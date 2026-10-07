(function() {
  const navbarHTML = `
    <!-- === TOP NAVIGATION === -->
    <header class="cnav-header-bar">
      <div class="cnav-logo-box">
        <a href="index.html">
          <img src="https://raw.githubusercontent.com/filmyfly4wap/icon/main/crickettv.png" alt="crickettv">
        </a>
      </div>

      <!-- Hamburger -->
      <label for="mobile-nav-checkbox" class="cnav-hamburger-btn">
        <svg viewBox="0 0 24 24">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </label>
    </header>

    <!-- === TOGGLE CHECKBOX === -->
    <input type="checkbox" id="mobile-nav-checkbox">

    <!-- === DRAWER MENU === -->
    <aside class="cnav-drawer-menu">
      <div class="cnav-drawer-head">
        <label for="mobile-nav-checkbox" class="cnav-drawer-close-btn">
          <svg viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </label>
      </div>

      <ul class="cnav-link-list">
        <li>
          <a href="index.html" class="cnav-item-link">
            <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
            Home
          </a>
        </li>
        <li>
          <a href="music.html" class="cnav-item-link">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 3v12.5a3.5 3.5 0 1 1-2-3.16V7.64L9 9.31V18.5a3.5 3.5 0 1 1-2-3.16V6.62L21 3z" />
            </svg>
            Music Play
          </a>
        </li>
        <li>
          <a href="about-us.html" class="cnav-item-link">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
            About Us
          </a>
        </li>
        <li>
          <a href="contact-us.html" class="cnav-item-link">
            <svg viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Contact Us
          </a>
        </li>
        <li>
          <a href="privacy-policy.html" class="cnav-item-link">
            <svg viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
            </svg>
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="teams-condition.html" class="cnav-item-link">
            <svg class="terms-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
              <path d="M13 4H43L54 15V55C54 58 52 60 49 60H13C10 60 8 58 8 55V9C8 6 10 4 13 4Z" fill="#2962FF"/>
              <path d="M43 4V15H54" fill="#1D4ED8"/>
              <text x="31" y="29" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="900" fill="#FFFFFF">T&amp;C</text>
              <path d="M17 37H45 M17 44H40 M17 51H35" stroke="#182235" stroke-width="3" stroke-linecap="round"/>
            </svg>
            Terms & Conditions
          </a>
        </li>
        <li>
          <a href="mailto:helpfilmyfly4wap@gmail.com" class="cnav-item-link">
            <svg viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            Gmail
          </a>
        </li>
      </ul>
    </aside>
  `;

  function injectNavbar() {
    if (!document.querySelector('.cnav-header-bar')) {
      document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNavbar);
  } else {
    injectNavbar();
  }
})();
