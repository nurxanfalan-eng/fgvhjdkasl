/**
 * LIMON DENTAL SERVICE — Main JavaScript
 * Static site, no backend required
 */

// ===== EmailJS Configuration =====
// Sign up FREE at https://www.emailjs.com
// Then replace these with your actual credentials:
var EMAILJS_SERVICE_ID  = 'service_limondental';
var EMAILJS_TEMPLATE_ID = 'template_service_form';
var EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

// Initialize EmailJS
if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
}

// ===== Partner Data =====
var PARTNERS = [
    { name: 'CEDU 3D',      img: 'images/cedu-3d.png',    text: 'CEDU 3D',    cls: '' },
    { name: 'Creality 3D',  img: 'images/creality-3d.png', text: 'CREALITY',  cls: 'creality' },
    { name: 'Philden',      img: 'images/philden.png',     text: 'Philden',    cls: 'philden' },
    { name: 'Eighteeth',    img: 'images/eighteeth.png',   text: 'Eighteeth',  cls: 'eighteeth' },
    { name: 'Zetin',        img: 'images/zetin.png',       text: 'ZETIN',      cls: 'zetin' },
    { name: 'Zubler',       img: 'images/zubler.png',      text: 'zubler',     cls: 'zubler' },
    { name: 'TDDS',         img: 'images/tdds.png',        text: 'TD&S',       cls: 'tdds' }
];

// ===== Build partner items =====
function buildPartnerSidebar() {
    var el = document.getElementById('sidebarPartners');
    if (!el) return;
    PARTNERS.forEach(function(p) {
        var item = document.createElement('div');
        item.className = 'partner-item';

        var img = document.createElement('img');
        img.src = p.img;
        img.alt = p.name;
        img.onload = function() { fallback.style.display = 'none'; };
        img.onerror = function() {
            img.style.display = 'none';
            fallback.style.display = 'block';
        };

        var fallback = document.createElement('div');
        fallback.className = 'partner-logo-text ' + p.cls;
        fallback.innerHTML = p.text;
        fallback.style.display = 'none';

        item.appendChild(img);
        item.appendChild(fallback);
        el.appendChild(item);
    });
}

// ===== Build partners grid =====
function buildPartnersGrid() {
    var el = document.getElementById('partnersGrid');
    if (!el) return;
    PARTNERS.forEach(function(p) {
        var item = document.createElement('div');
        item.className = 'partner-grid-item';

        var img = document.createElement('img');
        img.src = p.img;
        img.alt = p.name;
        img.onerror = function() {
            img.style.display = 'none';
            fallback.style.display = 'block';
        };

        var fallback = document.createElement('div');
        fallback.className = 'pgrid-logo-text ' + p.cls;
        fallback.innerHTML = p.text;
        fallback.style.display = 'none';

        item.appendChild(img);
        item.appendChild(fallback);
        el.appendChild(item);
    });
}

// ===== Build media item =====
function buildMediaItem(item, cssClass) {
    var wrapper = document.createElement('div');
    wrapper.className = cssClass || 'media-item';

    if (item.type === 'video') {
        var video = document.createElement('video');
        video.src = item.src;
        if (item.poster) video.poster = item.poster;
        video.muted = true;
        video.playsInline = true;
        video.loop = false;
        wrapper.appendChild(video);

        var icon = document.createElement('div');
        icon.className = 'video-play-icon';
        icon.innerHTML = '<i class="fas fa-play"></i>';
        wrapper.appendChild(icon);

        wrapper.addEventListener('click', function() {
            openLightbox({ type: 'video', src: item.src });
        });
    } else {
        var img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt || '';
        img.loading = 'lazy';
        wrapper.appendChild(img);

        wrapper.addEventListener('click', function() {
            openLightbox({ type: 'image', src: item.src, alt: item.alt || '' });
        });
    }
    return wrapper;
}

// ===== Populate grid =====
function populateGrid(gridId, items, cssClass) {
    var el = document.getElementById(gridId);
    if (!el) return;
    el.innerHTML = '';
    if (!items || items.length === 0) return;
    items.forEach(function(item) {
        el.appendChild(buildMediaItem(item, cssClass));
    });
}

// ===== Init all grids =====
function initGrids() {
    var d = window.LIMON_DATA;
    if (!d) return;

    populateGrid('productsGrid',       d.products,        'product-item');
    populateGrid('certificatesGrid',   d.certificates,    'certificate-item');
    populateGrid('zublerPhotos',       d.zublerPhotos,    'training-photo-item');
    populateGrid('tdssPhotos',         d.tdssPhotos,      'training-photo-item');
    populateGrid('eighteethPhotos',    d.eighteethPhotos, 'training-photo-item');
    populateGrid('phildenPhotos',      d.phildenPhotos,   'training-photo-item');
    populateGrid('satisMediaGrid',     d.satisMedia,      'media-item');
    populateGrid('servisMediaGrid',    d.servisMedia,     'media-item');
    populateGrid('xidmetlerMediaGrid', d.xidmetlerMedia,  'media-item');
    populateGrid('catdirilmaMediaGrid',d.catdirilmaMedia, 'media-item');
}

// ===== Ayarlar Panel =====
var mainPage     = document.getElementById('main-page');
var ayarlarPanel = document.getElementById('ayarlar-panel');

document.getElementById('openAyarlar').addEventListener('click', function() {
    mainPage.classList.add('hidden');
    ayarlarPanel.classList.remove('hidden');
    window.scrollTo(0, 0);
});

document.getElementById('closeAyarlar').addEventListener('click', function() {
    ayarlarPanel.classList.add('hidden');
    mainPage.classList.remove('hidden');
    window.scrollTo(0, 0);
});

// ===== Ayarlar Menu Navigation =====
var menuItems   = document.querySelectorAll('.menu-item');
var sections    = document.querySelectorAll('.ayarlar-section');

menuItems.forEach(function(btn) {
    btn.addEventListener('click', function() {
        var target = btn.getAttribute('data-section');
        menuItems.forEach(function(b) { b.classList.remove('active'); });
        sections.forEach(function(s) { s.classList.remove('active'); });
        btn.classList.add('active');
        var sec = document.getElementById('section-' + target);
        if (sec) sec.classList.add('active');
        var content = document.querySelector('.ayarlar-content');
        if (content) content.scrollTop = 0;
    });
});

// ===== Toggle Buttons =====
document.addEventListener('click', function(e) {
    var btn = e.target.closest('.toggle-btn');
    if (!btn) return;
    var group = btn.getAttribute('data-group');
    if (!group) return;
    var container = btn.closest('.toggle-buttons');
    if (!container) return;
    container.querySelectorAll('.toggle-btn').forEach(function(b) {
        b.classList.remove('selected');
    });
    btn.classList.add('selected');
    var hiddenInput = document.getElementById(group + 'Value');
    if (hiddenInput) hiddenInput.value = btn.getAttribute('data-value');
});

// ===== File Upload =====
var fileUploadArea = document.getElementById('fileUploadArea');
var fileInput      = document.getElementById('problemImages');
var filePreview    = document.getElementById('filePreview');

if (fileUploadArea && fileInput) {
    fileUploadArea.addEventListener('click', function() {
        fileInput.click();
    });
    fileInput.style.display = 'none';
    fileInput.addEventListener('change', function() {
        if (!filePreview) return;
        filePreview.innerHTML = '';
        Array.prototype.forEach.call(fileInput.files, function(file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                var img = document.createElement('img');
                img.src = e.target.result;
                img.className = 'preview-thumb';
                filePreview.appendChild(img);
            };
            reader.readAsDataURL(file);
        });
    });
}

// ===== Service Form Submit =====
var serviceForm = document.getElementById('serviceForm');
var formSuccess = document.getElementById('formSuccess');
var submitBtn   = document.getElementById('submitBtn');

if (serviceForm) {
    serviceForm.addEventListener('submit', function(e) {
        e.preventDefault();

        var fullName      = document.getElementById('fullName').value.trim();
        var phoneNum      = document.getElementById('phoneNumber').value.trim();
        var equipmentName = document.getElementById('equipmentName').value.trim();

        if (!fullName) { alert('Ad, Soyad daxil edin'); return; }
        if (!phoneNum) { alert('Telefon nömrəsi daxil edin'); return; }
        if (!equipmentName) { alert('Avadanlığın adını daxil edin'); return; }

        var phoneCountry = document.getElementById('phoneCountry').value;
        var phoneFull    = phoneCountry + ' ' + phoneNum;
        var email        = document.getElementById('email').value || '';
        var brandModel   = document.getElementById('brandModel').value || '';
        var serialNum    = document.getElementById('serialNumber').value || '';
        var purchDate    = document.getElementById('purchaseDate').value || '';
        var warranty     = document.getElementById('warrantyValue').value || 'Qeyd edilməyib';
        var probDesc     = document.getElementById('problemDesc').value || '';
        var probStart    = document.getElementById('problemStart').value || '';
        var prevSvc      = document.getElementById('servicedValue').value || 'Qeyd edilməyib';

        var messageLines = [
            'AVADANLIQ QEBUL FORMU - Yeni Muraciet',
            '',
            '1. MUSTERI MELUMATI',
            'Ad, Soyad: ' + fullName,
            'Telefon: ' + phoneFull,
            'Email: ' + (email || '--'),
            '',
            '2. AVADANLIQ MELUMATI',
            'Avadanliq adi: ' + equipmentName,
            'Marka/Model: ' + (brandModel || '--'),
            'Seriya nomresi: ' + (serialNum || '--'),
            'Alinma tarixi: ' + (purchDate || '--'),
            'Zemanet: ' + warranty,
            '',
            '3. PROBLEM MELUMATI',
            'Problem tesviri: ' + (probDesc || '--'),
            'Problem baslama: ' + (probStart || '--'),
            'Evvel servis: ' + prevSvc
        ];
        var messageText = messageLines.join('\n');

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Göndərilir...';

        function showSuccess() {
            serviceForm.classList.add('hidden');
            formSuccess.classList.remove('hidden');
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Göndər';
        }

        function fallbackMailto() {
            var subject = 'AVADANLIQ QEBUL FORMU - ' + fullName;
            var mailUrl = 'mailto:zaur.mikayilov@limondental.az?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(messageText);
            window.open(mailUrl, '_blank');
            showSuccess();
        }

        if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                from_name:    fullName,
                phone:        phoneFull,
                reply_to:     email || 'qeyd_edilmeyib',
                equipment:    equipmentName,
                brand_model:  brandModel || '--',
                serial_num:   serialNum  || '--',
                purch_date:   purchDate  || '--',
                warranty:     warranty,
                problem:      probDesc   || '--',
                prob_start:   probStart  || '--',
                prev_service: prevSvc,
                message:      messageText
            }).then(function() {
                showSuccess();
            }).catch(function(err) {
                console.error('EmailJS error:', err);
                fallbackMailto();
            });
        } else {
            fallbackMailto();
        }
    });
}

// ===== Lightbox =====
var lightbox      = document.getElementById('lightbox');
var lightboxImg   = document.getElementById('lightboxImg');
var lightboxVideo = document.getElementById('lightboxVideo');
var lightboxClose = document.getElementById('lightboxClose');

function openLightbox(item) {
    lightboxImg.style.display   = 'none';
    lightboxVideo.style.display = 'none';
    lightboxImg.src   = '';
    lightboxVideo.src = '';
    lightboxVideo.pause();

    if (item.type === 'video') {
        lightboxVideo.src = item.src;
        lightboxVideo.style.display = 'block';
    } else {
        lightboxImg.src = item.src;
        lightboxImg.alt = item.alt || '';
        lightboxImg.style.display = 'block';
    }
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.add('hidden');
    lightboxVideo.pause();
    lightboxVideo.src = '';
    lightboxImg.src   = '';
    document.body.style.overflow = '';
}

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightbox) {
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) closeLightbox();
    });
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
});

// ===== DOMContentLoaded =====
document.addEventListener('DOMContentLoaded', function() {
    buildPartnerSidebar();
    buildPartnersGrid();
    initGrids();
});
