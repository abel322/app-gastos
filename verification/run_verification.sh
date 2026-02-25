#!/bin/bash
set -e

# Start the Flask app in the background
echo "Starting Flask app..."
python3 app.py > app.log 2>&1 &
APP_PID=$!

# Wait for the app to start
echo "Waiting for app to start..."
sleep 5

# Run the test
echo "Running frontend tests..."
python3 verification/test_frontend.py
TEST_EXIT_CODE=$?

# Kill the app
echo "Stopping Flask app..."
kill $APP_PID

# Exit with the test's exit code
exit $TEST_EXIT_CODE
