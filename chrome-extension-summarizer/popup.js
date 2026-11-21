document.getElementById('summarize').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: extractText
  }, async (results) => {
    const text = results[0].result;
    summarize(text);
  });
});

function extractText() {
  return document.body.innerText.slice(0, 8000);
}

async function summarize(text) {
  const { apiKey, provider = 'gemini' } = await chrome.storage.local.get(['apiKey', 'provider']);
  if (!apiKey) {
    document.getElementById('summary').textContent = 'Set API key in Options first.';
    return;
  }
  document.getElementById('summary').textContent = 'Summarizing...';
  // Placeholder: implement actual API call based on provider
  // Example for Gemini:
  // const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, ...)
  document.getElementById('summary').textContent = 'Summary placeholder. Implement API call in production.\n\nKey points from page:\n- Point 1\n- Point 2';
}

document.getElementById('upgrade').addEventListener('click', () => {
  chrome.tabs.create({ url: 'https://example.com/upgrade' }); // Replace with your Stripe/LemonSqueezy link
});