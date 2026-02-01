(function () {
  'use strict';

  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-list a');
  const contactForm = document.getElementById('contactForm');
  const header = document.querySelector('.header');

  // 모바일 네비게이션 토글
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('is-open');
      nav.classList.toggle('is-open');
      document.body.style.overflow = nav.classList.contains('is-open') ? 'hidden' : '';
    });

    // 네비 링크 클릭 시 메뉴 닫기 (모바일)
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('is-open');
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // 스크롤 시 헤더 배경 강조 (선택적)
  if (header) {
    function onScroll() {
      if (window.scrollY > 50) {
        header.style.background = 'rgba(13, 17, 23, 0.98)';
      } else {
        header.style.background = 'rgba(13, 17, 23, 0.9)';
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Contact 폼 제출
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      if (!name || !email || !message || !submitBtn) return;

      const originalText = submitBtn.textContent;
      submitBtn.textContent = '전송 중...';
      submitBtn.disabled = true;

      // 실제 백엔드 연동 시 fetch 등으로 대체
      setTimeout(function () {
        submitBtn.textContent = '전송 완료';
        submitBtn.style.background = '#22c55e';
        contactForm.reset();

        setTimeout(function () {
          submitBtn.textContent = originalText;
          submitBtn.style.background = '';
          submitBtn.disabled = false;
        }, 2000);
      }, 800);
    });
  }
})();
