/* --------------------------------------------------
   Part 2 Helpers: Functions demonstrating scope,
   parameters, return values
-------------------------------------------------- */

// Global variable
const globalVar = '🌐 I am global';

function sum(a, b) {
  // parameters a & b, returns their sum
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function scopeDemo() {
  // local variable
  const localVar = '🔒 I am local';
  return `Inside function: ${localVar} | Can see global: ${globalVar}`;
}

/* --------------------------------------------------
   Utility to toggle a CSS class
-------------------------------------------------- */
function toggleClass(el, className) {
  el.classList.toggle(className);
}

/* --------------------------------------------------
   Part 1 & 3 Event Bindings
-------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  /* Part 2: Run & display function outputs */
  document.getElementById('runFuncs').addEventListener('click', () => {
    const out = [];
    out.push(`sum(3,4) = ${sum(3, 4)}`);
    out.push(`multiply(5,6) = ${multiply(5, 6)}`);
    out.push(scopeDemo());
    document.getElementById('funcOutput').textContent = out.join('\n');
  });

  /* Part 3a: Animate Box */
  const animBox = document.getElementById('animBox');
  document.getElementById('animateBtn').addEventListener('click', () => {
    // toggle scale + color
    toggleClass(animBox, 'active');
    if (animBox.classList.contains('active')) {
      animBox.style.transform = 'scale(1.3)';
      animBox.style.background = '#1abc9c';
    } else {
      animBox.style.transform = 'scale(1)';
      animBox.style.background = '#9b59b6';
    }
  });

  /* Part 3b: Card Flip */
  const cardInner = document.getElementById('cardInner');
  document.getElementById('flipBtn').addEventListener('click', () => {
    toggleClass(cardInner, 'flipped');
  });

  /* Part 3c: Start/Stop Spinner */
  const spinnerCtl = document.getElementById('spinnerControl');
  document.getElementById('startSpinner').addEventListener('click', () => {
    spinnerCtl.style.display = 'block';
  });
  document.getElementById('stopSpinner').addEventListener('click', () => {
    spinnerCtl.style.display = 'none';
  });

  /* Part 3d: Modal */
  const modal = document.getElementById('modal');
  document.getElementById('showModal').addEventListener('click', () => {
    modal.style.display = 'flex';
  });
  document.getElementById('closeModal').addEventListener('click', () => {
    modal.style.display = 'none';
  });
  // close if clicking outside content
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });
});
