/**
 * BakeTech Commercial Systems - Master JavaScript Controller
 * Handles Navigation, Dark/Light Mode, RTL, Quote Modal, Form Validation
 */

document.addEventListener('DOMContentLoaded', function () {
  initTheme();
  initRtl();
  initActiveNav();
  initBackToTop();
  initQuoteModal();
  initFormValidation();
  initDynamicYear();
});

/* --------------------------------------------------------------------------
 * 1. Dark / Light Theme Toggle with LocalStorage Persistence
 * -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const savedTheme = localStorage.getItem('baketech_theme') || 'light';
  
  applyTheme(savedTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('baketech_theme', newTheme);
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-bs-theme', theme);
  const icons = document.querySelectorAll('.theme-toggle-icon');
  icons.forEach(icon => {
    if (theme === 'dark') {
      icon.className = 'bi bi-sun-fill theme-toggle-icon text-warning';
      icon.setAttribute('title', 'Switch to Light Mode');
    } else {
      icon.className = 'bi bi-moon-stars-fill theme-toggle-icon';
      icon.setAttribute('title', 'Switch to Dark Mode');
    }
  });
}

/* --------------------------------------------------------------------------
 * 2. RTL (Right-to-Left) Layout Toggle with LocalStorage Persistence
 * -------------------------------------------------------------------------- */
function initRtl() {
  const rtlToggleBtns = document.querySelectorAll('.rtl-toggle-btn');
  const savedDir = localStorage.getItem('baketech_direction') || 'ltr';

  applyDirection(savedDir);

  rtlToggleBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      applyDirection(newDir);
      localStorage.setItem('baketech_direction', newDir);
    });
  });

  // Re-apply to dynamically revealed phone inputs in tabs or modals
  document.addEventListener('shown.bs.tab', function () {
    const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
    applyPhonePlaceholders(currentDir);
  });
  document.addEventListener('shown.bs.modal', function () {
    const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
    applyPhonePlaceholders(currentDir);
  });
}

function applyDirection(dir) {
  document.documentElement.setAttribute('dir', dir);
  const labels = document.querySelectorAll('.rtl-label');
  labels.forEach(lbl => {
    lbl.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
  });

  applyPhonePlaceholders(dir);
}

function applyPhonePlaceholders(dir) {
  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  phoneInputs.forEach(input => {
    if (!input.hasAttribute('data-orig-placeholder')) {
      input.setAttribute('data-orig-placeholder', input.placeholder || '(312) 555-0199');
    }
    const rtlPlaceholder = input.getAttribute('data-rtl-placeholder') || '+966 50 123 4567 / +1 800 555 2253';
    if (dir === 'rtl') {
      input.placeholder = rtlPlaceholder;
      input.setAttribute('dir', 'ltr');
      input.style.direction = 'ltr';
      input.style.textAlign = 'right';
    } else {
      input.placeholder = input.getAttribute('data-orig-placeholder') || '(312) 555-0199';
      input.removeAttribute('dir');
      input.style.direction = '';
      input.style.textAlign = '';
    }
  });
}

/* --------------------------------------------------------------------------
 * 3. Active Navigation Link Detection
 * -------------------------------------------------------------------------- */
function initActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.site-navbar .nav-link, .site-navbar .dropdown-item');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const cleanHref = href.split('?')[0].split('#')[0];

    if (cleanHref === currentPath) {
      link.classList.add('active');
      // If inside dropdown, activate parent
      const dropdownParent = link.closest('.dropdown');
      if (dropdownParent) {
        const toggle = dropdownParent.querySelector('.dropdown-toggle');
        if (toggle) toggle.classList.add('active');
      }
    }
  });
}

/* --------------------------------------------------------------------------
 * 4. Back to Top Floating Button
 * -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* --------------------------------------------------------------------------
 * 5. Quick Quote Modal Trigger & Population
 * -------------------------------------------------------------------------- */
function initQuoteModal() {
  const quoteButtons = document.querySelectorAll('[data-bs-toggle="modal"][data-bs-target="#quoteModal"], .open-quote-modal-btn');
  const quoteModalEl = document.getElementById('quoteModal');
  const equipmentSelect = document.getElementById('quoteEquipmentSelect');

  quoteButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      const productName = this.getAttribute('data-product-name');
      const productId = this.getAttribute('data-product-id');

      if (quoteModalEl && equipmentSelect && productName) {
        // Try to match or select
        let found = false;
        for (let i = 0; i < equipmentSelect.options.length; i++) {
          if (equipmentSelect.options[i].text.includes(productName) || equipmentSelect.options[i].value === productId) {
            equipmentSelect.selectedIndex = i;
            found = true;
            break;
          }
        }
        if (!found) {
          // If not in standard list, set custom value
          const tempOpt = new Option(productName, productId || productName, true, true);
          equipmentSelect.add(tempOpt);
        }
      }
    });
  });
}

/* --------------------------------------------------------------------------
 * 6. Front-End Form Validation & Realistic Feedback
 * -------------------------------------------------------------------------- */
function initFormValidation() {
  // Helper to determine if an input is a Name field (letters only)
  function isNameField(target) {
    if (!target) return false;
    // CRITICAL: Immediately exclude email, phone, number, url, and password inputs
    if (target.type === 'email' || target.type === 'tel' || target.type === 'number' || target.type === 'url' || target.type === 'password') {
      return false;
    }
    if (target.name && (target.name.toLowerCase().includes('email') || target.name.toLowerCase().includes('phone'))) {
      return false;
    }
    if (target.id && (target.id.toLowerCase().includes('email') || target.id.toLowerCase().includes('phone'))) {
      return false;
    }
    if (target.classList && (target.classList.contains('email-format-input') || target.classList.contains('phone-numbers-only-input'))) {
      return false;
    }

    // Strict positive checks for Name inputs
    if (target.classList && target.classList.contains('name-only-input')) return true;
    if (target.name && (target.name === 'fullName' || target.name === 'name' || target.name === 'applicantName')) return true;
    if (target.id && (target.id.toLowerCase().includes('fullname') || target.id === 'name' || target.id === 'applicantName')) return true;

    const label = target.closest('.col-md-6, .mb-3, div')?.querySelector('label');
    if (label) {
      const lbl = label.textContent.toLowerCase();
      if ((lbl.includes('full name') || lbl.includes('legal name') || lbl.includes('your name') || lbl === 'name *' || lbl === 'name') &&
          !lbl.includes('company') && !lbl.includes('bakery') && !lbl.includes('email') && !lbl.includes('phone')) {
        return true;
      }
    }
    return false;
  }

  // Helper to determine if an input is a Phone field (numbers only)
  function isPhoneField(target) {
    if (!target) return false;
    if (target.type === 'email') return false;
    if (target.matches && target.matches('.phone-numbers-only-input, input[type="tel"]')) return true;
    if (target.type === 'tel') return true;
    if (target.name && target.name.toLowerCase().includes('phone')) return true;
    if (target.id && target.id.toLowerCase().includes('phone')) return true;
    const label = target.closest('.col-md-6, .mb-3, div')?.querySelector('label');
    if (label && label.textContent.toLowerCase().includes('phone') && !label.textContent.toLowerCase().includes('email')) return true;
    return false;
  }

  // Keydown blocking: immediately disallow invalid characters from being typed
  document.addEventListener('keydown', function (e) {
    // If it's a Name field, block numeric keys
    if (isNameField(e.target)) {
      if (e.key >= '0' && e.key <= '9') {
        e.preventDefault();
        return false;
      }
    }

    // If it's a Phone field, block alphabetic keys (allow digits, +, -, (, ), space, and control keys)
    if (isPhoneField(e.target)) {
      if (['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) {
        return;
      }
      if (e.ctrlKey || e.metaKey) return;
      if (/^[a-zA-Z]$/.test(e.key)) {
        e.preventDefault();
        return false;
      }
    }
  });

  // Real-time input filtering on paste or programmatic change
  document.addEventListener('input', function (e) {
    // Name inputs: only letters, spaces, hyphens, apostrophes
    if (isNameField(e.target)) {
      e.target.value = e.target.value.replace(/[^a-zA-Z\s\.\'\-]/g, '');
    }

    // Phone inputs: only digits and standard telephone delimiters (+, -, (, ), space)
    if (isPhoneField(e.target)) {
      e.target.value = e.target.value.replace(/[^0-9+\-\(\)\s]/g, '');
    }
  });

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    // Real-time validation for email inputs
    const emailInputs = form.querySelectorAll('input[type="email"], .email-format-input');
    emailInputs.forEach(input => {
      input.addEventListener('blur', function () {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (input.value && !emailRegex.test(input.value.trim())) {
          input.setCustomValidity('Please provide a valid email address with a proper domain (e.g., name@company.com).');
        } else {
          input.setCustomValidity('');
        }
      });
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      // Check email format
      emailInputs.forEach(input => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (input.value && !emailRegex.test(input.value.trim())) {
          input.setCustomValidity('Invalid email');
        } else {
          input.setCustomValidity('');
        }
      });

      // Check name format (letters only)
      const allInputs = form.querySelectorAll('input');
      allInputs.forEach(input => {
        if (isNameField(input)) {
          const nameRegex = /^[A-Za-z\s\.\'\-]{2,50}$/;
          if (input.value && !nameRegex.test(input.value.trim())) {
            input.setCustomValidity('Name must contain letters only');
          } else {
            input.setCustomValidity('');
          }
        }
        if (isPhoneField(input)) {
          const phoneRegex = /^[\d\s+\-\(\)]{7,25}$/;
          if (input.value && !phoneRegex.test(input.value.trim())) {
            input.setCustomValidity('Phone number must contain numbers only');
          } else {
            input.setCustomValidity('');
          }
        }
      });

      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }

      form.classList.add('was-validated');

      // Generate Reference Number
      const refId = 'BK-' + Math.floor(100000 + Math.random() * 900000);
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Processing...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        // Show Feedback Modal or Alert
        showSubmissionFeedback(refId, form);
        form.reset();
        form.classList.remove('was-validated');

        // If inside quote modal, close modal
        const parentModal = form.closest('.modal');
        if (parentModal) {
          const bsModal = bootstrap.Modal.getInstance(parentModal);
          if (bsModal) bsModal.hide();
        }
      }, 900);
    }, false);
  });
}

function showSubmissionFeedback(refId, form) {
  const feedbackModalEl = document.getElementById('submissionFeedbackModal');
  if (feedbackModalEl) {
    const refDisplay = document.getElementById('feedbackRefNumber');
    if (refDisplay) refDisplay.textContent = refId;
    const bsFeedbackModal = new bootstrap.Modal(feedbackModalEl);
    bsFeedbackModal.show();
  } else {
    alert(`Inquiry Confirmed (Demo Mode)\nReference Number: ${refId}\n\nYour commercial equipment consultation request has been validated. In production, this dispatches directly to BakeTech Sales Engineering.`);
  }
}

/* --------------------------------------------------------------------------
 * 7. Dynamic Year Helper
 * -------------------------------------------------------------------------- */
function initDynamicYear() {
  const yearSpans = document.querySelectorAll('.current-year');
  const year = new Date().getFullYear();
  yearSpans.forEach(el => el.textContent = year);
}

