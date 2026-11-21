document.getElementById('save').addEventListener('click', () => {
  const apiKey = document.getElementById('apiKey').value;
  const provider = document.getElementById('provider').value;
  chrome.storage.local.set({ apiKey, provider }, () => {
    alert('Saved!');
  });
});