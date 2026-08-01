import { initLanguage } from "./modules/language.js";
import { initTheme } from "./modules/theme.js";
import { initNavigation } from "./modules/navigation.js";
import { initProjectModal } from "./modules/project-modal.js";
import { initClipboard } from "./modules/clipboard.js";
import { initRevealAnimations } from "./modules/reveal-animation.js";

initLanguage();
initTheme();
initNavigation();
initProjectModal();
initClipboard();
initRevealAnimations();

document.querySelector("[data-current-year]").textContent =
  new Date().getFullYear();
