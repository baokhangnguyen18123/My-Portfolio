import { t } from './language.js';

let toastTimer;

function showToast(message) {
  const toast = document.querySelector('[data-toast]');
  if (!toast) return;

  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('is-visible');
  toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 3200);
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.setAttribute('readonly', '');
  textArea.className = 'clipboard-fallback';
  document.body.append(textArea);
  textArea.select();
  const copied = document.execCommand('copy');
  textArea.remove();
  if (!copied) throw new Error('Copy command failed');
}

export function initClipboard() {
  document.querySelector('[data-copy-email]')?.addEventListener('click', async (event) => {
    try {
      await copyText(event.currentTarget.dataset.copyEmail);
      showToast(t('feedback.copySuccess'));
    } catch {
      showToast(t('feedback.copyFailure'));
    }
  });
}
