import unittest
import json
import os
from app import app, init_db, DB_NAME

class ExpenseTrackerTestCase(unittest.TestCase):
    def setUp(self):
        # Use a temporary database for testing
        app.config['TESTING'] = True
        self.db_name = "test_expenses.db"
        # Patch the database name in app
        import app as app_module
        app_module.DB_NAME = self.db_name

        self.app = app.test_client()
        init_db()

    def tearDown(self):
        # Remove the temporary database
        if os.path.exists(self.db_name):
            os.remove(self.db_name)

    def test_add_expense(self):
        response = self.app.post('/expenses',
                                 data=json.dumps({
                                     'description': 'Test Expense',
                                     'amount': 10.0,
                                     'category': 'Comida',
                                     'date': '2023-10-01'
                                 }),
                                 content_type='application/json')
        self.assertEqual(response.status_code, 201)
        data = json.loads(response.data)
        self.assertEqual(data['description'], 'Test Expense')
        self.assertEqual(data['amount'], 10.0)
        self.assertEqual(data['category'], 'Comida')

    def test_add_expense_invalid_category(self):
        response = self.app.post('/expenses',
                                 data=json.dumps({
                                     'description': 'Test Expense',
                                     'amount': 10.0,
                                     'category': 'Invalid Category',
                                     'date': '2023-10-01'
                                 }),
                                 content_type='application/json')
        self.assertEqual(response.status_code, 400)
        data = json.loads(response.data)
        self.assertEqual(data['error'], 'Invalid category')

    def test_get_expenses(self):
        # Add an expense first
        self.app.post('/expenses',
                      data=json.dumps({
                          'description': 'Test Expense',
                          'amount': 10.0,
                          'category': 'Transporte',
                          'date': '2023-10-01'
                      }),
                      content_type='application/json')

        response = self.app.get('/expenses')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertEqual(len(data), 1)
        self.assertEqual(data[0]['description'], 'Test Expense')

    def test_delete_expense(self):
        # Add an expense first
        response = self.app.post('/expenses',
                                 data=json.dumps({
                                     'description': 'Test Expense',
                                     'amount': 10.0,
                                     'category': 'Servicios',
                                     'date': '2023-10-01'
                                 }),
                                 content_type='application/json')
        data = json.loads(response.data)
        expense_id = data['id']

        # Delete the expense
        response = self.app.delete(f'/expenses/{expense_id}')
        self.assertEqual(response.status_code, 200)

        # Verify it's gone
        response = self.app.get('/expenses')
        data = json.loads(response.data)
        self.assertEqual(len(data), 0)

if __name__ == '__main__':
    unittest.main()
