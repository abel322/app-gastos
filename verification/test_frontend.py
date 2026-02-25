from playwright.sync_api import sync_playwright, expect
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        try:
            page.goto("http://localhost:5000")
            print("Page loaded.")

            # Add Expense
            page.fill("#description", "Almuerzo Test")
            page.fill("#amount", "15.50")
            page.fill("#category", "Comida")
            page.fill("#date", "2023-10-25")
            page.click("button[type=submit]")
            print("Form submitted.")

            # Verify it appears in table
            page.wait_for_selector("text=Almuerzo Test")
            print("Expense verification: Found 'Almuerzo Test'.")

            # Take screenshot of added expense
            page.screenshot(path="verification/screenshot_added.png")
            print("Screenshot taken.")

            # Delete Expense
            # Handle confirm dialog
            page.on("dialog", lambda dialog: dialog.accept())

            # Find the row that contains "Almuerzo Test"
            row = page.locator("tr", has_text="Almuerzo Test")

            # Click the delete button inside that row
            # We must ensure the row is visible before clicking
            row.locator(".delete-btn").click()
            print("Delete button clicked.")

            # Verify it's gone. Wait for it to disappear.
            expect(row).to_have_count(0)
            print("Expense deleted and verified.")

        except Exception as e:
            print(f"Test failed: {e}")
            page.screenshot(path="verification/error_screenshot.png")
            raise e
        finally:
            browser.close()

if __name__ == "__main__":
    run()
