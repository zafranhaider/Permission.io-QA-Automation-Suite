import { test, expect } from '@playwright/test';

test.describe('AI Agent Feature', () => {
  test('Chat UI loads and responds', async ({ page }) => {
    await page.goto('https://ask.permission.io/ai');

    // Accept cookies
    await page.getByRole('button', { name: 'Accept All' }).click();

    // ✅ Check that the AI Agent header/intro text is visible
    await expect(page.locator('div').filter({ hasText: /^Permission AgentHere to help you Earn More$/ }).nth(1)).toBeVisible();

    // ✅ Check that the Permission link is present
    await expect(page.getByRole('link', { name: 'Permission', exact: true })).toBeVisible();

    // Open chat input
    await page.getByRole('textbox', { name: 'Type your message...' }).click();

    // Fill a message
    await page.getByRole('textbox', { name: 'Type your message...' }).fill('test');

    // Send the message
    await page.locator('#root').getByRole('button').filter({ hasText: /^$/ }).click();

  });


  test('Send message and validate response', async ({ page }) => {
    await page.goto('https://ask.permission.io/ai');

    // Accept cookies
    await page.getByRole('button', { name: 'Accept All' }).click();

    // ✅ Check that the AI Agent header/intro text is visible
    await expect(page.locator('div').filter({ hasText: /^Permission AgentHere to help you Earn More$/ }).nth(1)).toBeVisible();

    // ✅ Check that the Permission link is present
    await expect(page.getByRole('link', { name: 'Permission', exact: true })).toBeVisible();

    // Open chat input
    await page.getByRole('textbox', { name: 'Type your message...' }).click();

    // Fill a message
    await page.getByRole('textbox', { name: 'Type your message...' }).fill('test');

    // Send the message
    await page.locator('#root').getByRole('button').filter({ hasText: /^$/ }).click();

    // ✅ Validate that the bot replies
    await expect(page.locator('div').filter({ hasText: /^Hello! How can I help you today\?$/ }).first()).toBeVisible();
  });



test('Message history persists during session', async ({ page }) => {
  await page.goto('https://ask.permission.io/ai');

  // Accept cookies
  await page.getByRole('button', { name: 'Accept All' }).click();

  // Send first message
  await page.getByRole('textbox', { name: 'Type your message...' }).fill('test');
  await page.locator('#root button').last().click();

  // Send second message
  await page.getByRole('textbox', { name: 'Type your message...' }).fill('test2');
  await page.locator('#root button').last().click();

  // ✅ Validate both messages in history
await expect(page.locator('div', { hasText: /^test$/ }).nth(1)).toBeVisible();
await expect(page.locator('div', { hasText: /^test2$/ }).nth(1)).toBeVisible();

});

test.skip('Validate timestamps on messages (Not implemented in UI)', async () => {
  // timestamps are not visible in current chat UI
});

});
