function dkuHandlePointer() {
  document.documentElement.classList.add('pointer-user');
  document.documentElement.classList.remove('keyboard-user');
  window.removeEventListener('mousedown', dkuHandlePointer, true);
  window.removeEventListener('touchstart', dkuHandlePointer, true);
  window.addEventListener('keydown', dkuHandleKeyboard, true);
}

function dkuHandleKeyboard(e) {
  if (e.keyCode === 9) { // the "I am a keyboard user" key
    document.documentElement.classList.add('keyboard-user');
    document.documentElement.classList.remove('pointer-user');
    window.removeEventListener('keydown', dkuHandleKeyboard, true);
    window.addEventListener('mousedown', dkuHandlePointer, true);
    window.addEventListener('touchstart', dkuHandlePointer, true);
  }
}

export default class DetectKeyboardUser {
  constructor(settings = {}) {
    this.originalSettings = {
      keyboardPriority: true,
    };
    this.settings = { ...this.originalSettings, ...settings };
    this.init();
  }

  init() {
    if (this.settings.keyboardPriority) {
      document.documentElement.classList.add('keyboard-user');
      window.addEventListener('mousedown', dkuHandlePointer, true);
    } else {
      document.documentElement.classList.add('pointer-user');
      window.addEventListener('touchstart', dkuHandleKeyboard, true);
      window.addEventListener('keydown', dkuHandleKeyboard, true);
    }
  }

  destroy() {
    document.documentElement.classList.remove(this.settings.classes[this.settings.type]);
  }

  refresh() {
    this.destroy();
    this.init();
  }
}
