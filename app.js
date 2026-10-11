/**
 * İmeje Lounge Cafe - Etkileşim ve Mantık Scripti
 * Konum: Trabzon Söğütlü | Trabzon Üniversitesi'ne 5 Dk
 * Özellikler:
 *  1. Dinamik "Şu an açığız / kapalıyız" saat kontrolü
 *  2. Menü kategori sekmeleri filtreleme
 *  3. Grup masası form denetimi ve mailto link oluşturma
 *  4. Mobil açılır menü kontrolü
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. DİNAMİK AÇIK / KAPALI ÇALIŞMA SAATLERİ KONTROLÜ
     Pazartesi - Cuma: 08:00 - 23:00
     Cumartesi: 09:00 - 23:00
     Pazar: 10:00 - 22:00
     ========================================================================== */
  function updateBusinessStatus() {
    const now = new Date();
    const day = now.getDay(); // 0 = Pazar, 1 = Pazartesi, ..., 6 = Cumartesi
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    let openMinutes = 8 * 60;   // 08:00 varsayılan
    let closeMinutes = 23 * 60; // 23:00 varsayılan
    let closeStr = "23:00";
    let nextOpenStr = "yarın sabah";
    let activeRowId = "rowWeekday";

    if (day >= 1 && day <= 5) {
      // Pazartesi - Cuma
      openMinutes = 8 * 60;
      closeMinutes = 23 * 60;
      closeStr = "23:00";
      nextOpenStr = day === 5 ? "yarın 09:00" : "yarın 08:00";
      activeRowId = "rowWeekday";
    } else if (day === 6) {
      // Cumartesi
      openMinutes = 9 * 60;
      closeMinutes = 23 * 60;
      closeStr = "23:00";
      nextOpenStr = "yarın 10:00";
      activeRowId = "rowSaturday";
    } else if (day === 0) {
      // Pazar
      openMinutes = 10 * 60;
      closeMinutes = 22 * 60;
      closeStr = "22:00";
      nextOpenStr = "yarın 08:00";
      activeRowId = "rowSunday";
    }

    const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

    // Hero bölümündeki rozet elemanları
    const heroBadge = document.getElementById('liveStatusBadge');
    const heroText = document.getElementById('statusText');

    // İletişim bölümündeki alt saat göstergesi
    const hoursBadge = document.getElementById('hoursFooterStatus');
    const hoursText = document.getElementById('hoursStatusText');

    if (heroBadge && heroText) {
      if (isOpen) {
        heroBadge.className = 'status-badge open';
        heroText.textContent = `Şu an açığız • Kapanış ${closeStr}`;
      } else {
        heroBadge.className = 'status-badge closed';
        heroText.textContent = `Şu an kapalıyız • Açılış ${nextOpenStr}`;
      }
    }

    if (hoursBadge && hoursText) {
      if (isOpen) {
        hoursBadge.className = 'current-status-footer open';
        hoursText.textContent = `Şu an açığız (Kapanış: ${closeStr})`;
      } else {
        hoursBadge.className = 'current-status-footer closed';
        hoursText.textContent = `Şu an kapalıyız (Açılış: ${nextOpenStr})`;
      }
    }

    // Bugünün satırını çalışma saatleri tablosunda vurgula
    const allHourRows = document.querySelectorAll('.hours-row');
    allHourRows.forEach(row => row.classList.remove('today'));
    const todayRow = document.getElementById(activeRowId);
    if (todayRow) {
      todayRow.classList.add('today');
    }
  }

  updateBusinessStatus();
  // Her 60 saniyede bir saati güncelle
  setInterval(updateBusinessStatus, 60000);

  /* ==========================================================================
     2. MENÜ KATEGORİ SEKMELERİ (TABS)
     ========================================================================== */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const menuCards = document.querySelectorAll('.menu-item-card');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedCategory = button.getAttribute('data-category');

      // Aktif sekme butonunu güncelle
      tabButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      // İlgili kategoriye ait kartları göster, diğerlerini gizle
      menuCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (cardCategory === selectedCategory) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.transition = 'opacity 0.25s ease';
            card.style.opacity = '1';
          }, 10);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ==========================================================================
     3. GRUP MASASI TALEP FORMU DENETİMİ & E-POSTA BAĞLANTISI (MAILTO)
     ========================================================================== */
  const reservationForm = document.getElementById('groupBookingForm');
  const feedbackBox = document.getElementById('formFeedback');

  // Hata alanları
  const fieldsToValidate = [
    { input: document.getElementById('resName'), error: document.getElementById('nameError') },
    { input: document.getElementById('resPhone'), error: document.getElementById('phoneError') },
    { input: document.getElementById('resCount'), error: document.getElementById('countError') },
    { input: document.getElementById('resDate'), error: document.getElementById('dateError') },
    { input: document.getElementById('resTime'), error: document.getElementById('timeError') }
  ];

  // Kullanıcı yazdıkça hataları temizle
  fieldsToValidate.forEach(item => {
    if (item.input) {
      item.input.addEventListener('input', () => {
        if (item.input.value.trim() !== '') {
          item.error.classList.remove('visible');
        }
      });
      item.input.addEventListener('change', () => {
        if (item.input.value.trim() !== '') {
          item.error.classList.remove('visible');
        }
      });
    }
  });

  if (reservationForm) {
    reservationForm.addEventListener('submit', (event) => {
      event.preventDefault();

      let hasError = false;

      // Alanları kontrol et
      fieldsToValidate.forEach(item => {
        if (!item.input || item.input.value.trim() === '') {
          item.error.classList.add('visible');
          hasError = true;
        } else {
          item.error.classList.remove('visible');
        }
      });

      if (hasError) {
        return;
      }

      // Form değerlerini topla
      const name = document.getElementById('resName').value.trim();
      const phone = document.getElementById('resPhone').value.trim();
      const count = document.getElementById('resCount').value;
      const date = document.getElementById('resDate').value;
      const time = document.getElementById('resTime').value;
      const noteInput = document.getElementById('resNote');
      const note = noteInput && noteInput.value.trim() !== '' ? noteInput.value.trim() : 'Belirtilmedi';

      // Hazır e-posta şablonunu oluştur (mailto formatı)
      const recipient = 'merhaba@imejeloungecafe.com';
      const subject = encodeURIComponent(`Grup Masası Talebi - ${name}`);
      const bodyText = 
`Merhaba İmeje Lounge Cafe Ekibi,

Grup çalışma masası rezervasyon talebimin detayları aşağıdadır:

• Ad Soyad: ${name}
• Telefon Numarası: ${phone}
• Kişi Sayısı: ${count}
• Tarih: ${date}
• Saat: ${time}
• Özel Not: ${note}

Müsaitlik durumunu teyit etmek için dönüşünüzü bekliyorum.
Teşekkür ederim.`;

      const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;

      // Başarı bildirim kutusunu göster
      if (feedbackBox) {
        feedbackBox.style.display = 'flex';
      }

      // Kullanıcının e-posta uygulamasını hazır mesajla aç
      window.location.href = mailtoUrl;
    });
  }

  // Geçmiş tarihlerin seçilmesini engelle (Bugünün tarihini min yap)
  const dateInput = document.getElementById('resDate');
  if (dateInput) {
    const todayStr = new Date().toISOString().split('T')[0];
    dateInput.min = todayStr;
  }

  /* ==========================================================================
     4. MOBİL MENÜ ÇEKMECESİ KONTROLÜ
     ========================================================================== */
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer-cta a');

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        mobileDrawer.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      } else {
        mobileDrawer.classList.add('open');
        menuToggle.classList.add('open');
        menuToggle.setAttribute('aria-expanded', 'true');
      }
    });

    // Mobil menüdeki herhangi bir linke tıklayınca çekmeceyi kapat
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Menü dışına tıklanınca çekmeceyi kapat
    document.addEventListener('click', (e) => {
      if (mobileDrawer.classList.contains('open')) {
        if (!mobileDrawer.contains(e.target) && !menuToggle.contains(e.target)) {
          mobileDrawer.classList.remove('open');
          menuToggle.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });

    // ESC tuşuna basıldığında çekmeceyi kapat
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        mobileDrawer.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ==========================================================================
     5. SAĞ ÜSTTEKİ TALEP ET BUTONU İÇİN DİKKAT ÇEKİCİ ODAK EFEKTİ
     ========================================================================== */
  const headerCtaBtn = document.getElementById('headerCtaBtn');
  const reservationCard = document.getElementById('rezervasyon');
  if (headerCtaBtn && reservationCard) {
    headerCtaBtn.addEventListener('click', () => {
      setTimeout(() => {
        reservationCard.style.transition = 'box-shadow 0.4s ease, border-color 0.4s ease';
        reservationCard.style.borderColor = 'var(--color-caramel)';
        reservationCard.style.boxShadow = '0 0 0 4px rgba(160, 82, 45, 0.25), 0 10px 30px rgba(160, 82, 45, 0.15)';
        setTimeout(() => {
          reservationCard.style.boxShadow = '';
          reservationCard.style.borderColor = '';
        }, 1500);
      }, 350);
    });
  }

});
