export function initProjectModal() {
  const modal = document.querySelector('[data-modal]');
  const panel = modal?.querySelector('[data-modal-panel]');
  const openButtons = document.querySelectorAll('[data-modal-open]');
  const closeButtons = modal?.querySelectorAll('[data-modal-close]') ?? [];
  let triggerElement = null;

  const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  function openModal(trigger) {
    if (!modal || !panel) return;
    triggerElement = trigger;
    modal.inert = false;
    modal.setAttribute('aria-hidden', 'false');
    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');
    panel.focus();
  }

  function closeModal() {
    if (!modal || modal.getAttribute('aria-hidden') === 'true') return;
    modal.setAttribute('aria-hidden', 'true');
    modal.inert = true;
    document.documentElement.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
    triggerElement?.focus();
  }

  openButtons.forEach((button) => button.addEventListener('click', () => openModal(button)));
  closeButtons.forEach((button) => button.addEventListener('click', closeModal));

  modal?.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
      return;
    }

    if (event.key !== 'Tab' || !panel) return;
    const focusableElements = [...panel.querySelectorAll(focusableSelector)];
    if (!focusableElements.length) return;
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  });
}
