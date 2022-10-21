document.querySelectorAll(
  '.triibe-modal,.pum-overlay'
).forEach(el => el.remove())

const text = 'ad blocker';

for (const div of document.querySelectorAll('div')) {
  if (div.textContent.toLowerCase().includes(text)) {
    div.remove();
  }
}
