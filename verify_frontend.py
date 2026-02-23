import sys
import time
import subprocess
import os
from playwright.sync_api import sync_playwright

def run_verification():
    # Clean up existing DB for a fresh start
    if os.path.exists("expenses.db"):
        os.remove("expenses.db")

    # Start the Flask app
    server_process = subprocess.Popen([sys.executable, 'app.py'], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    print("Starting server...")
    time.sleep(3)  # Give it time to start

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch()
            page = browser.new_page()
            page.goto("http://localhost:5000")

            # Check initial state
            title = page.title()
            print(f"Page title: {title}")
            assert title == "Control de Gastos"

            # Add expense
            print("Adding expense...")
            page.fill("#description", "Test Verification Expense")
            page.fill("#amount", "50.00")
            page.fill("#category", "Testing")
            page.fill("#date", "2023-10-27")
            page.click("button[type=submit]")

            # Wait for list update - verify the expense is in the table
            page.wait_for_selector("text=Test Verification Expense")

            # Verify total
            # Wait for total to update? The JS updates it after fetch.
            # We can wait for the text to be 50.00
            page.wait_for_function("document.getElementById('total-amount').textContent === '50.00'")
            total_text = page.locator("#total-amount").inner_text()
            print(f"Total found: {total_text}")
            assert total_text == "50.00"

            # Delete expense
            print("Deleting expense...")
            page.on("dialog", lambda dialog: dialog.accept()) # Handle confirmation dialog
            page.click(".delete-btn") # Click the first one found

            # Wait for removal
            page.wait_for_function("document.querySelectorAll('tbody tr').length === 0")

            # Verify total is 0.00
            page.wait_for_function("document.getElementById('total-amount').textContent === '0.00'")
            total_text_after = page.locator("#total-amount").inner_text()
            print(f"Total after delete: {total_text_after}")
            assert total_text_after == "0.00"

            print("Frontend verification passed!")
            browser.close()

    except Exception as e:
        print(f"Verification failed: {e}")
        sys.exit(1)
    finally:
        print("Stopping server...")
        server_process.terminate()
        server_process.wait()
        # Clean up DB again
        if os.path.exists("expenses.db"):
            os.remove("expenses.db")

if __name__ == "__main__":
    run_verification()
