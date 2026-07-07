# Limon Dental Service Website

## Layihə Haqqında
Limon Dental Service — stomatoloji avadanlıqların ehtiyat hissələri və peşəkar təmiri üzrə sayt.

## Texniki Məlumat
- **Platform**: Render.com Static Site
- **Texnologiya**: Saf HTML/CSS/JavaScript (backend yoxdur)
- **URL**: limondental.az

## Qovluq Strukturu
```
webapp/
├── index.html          # Əsas HTML faylı
├── css/
│   └── style.css       # Bütün stillər
├── js/
│   ├── data.js         # ← DEVELOPER BURAYA ŞƏKİL/VİDEO ƏLAVƏ EDİR
│   └── main.js         # Funksionallıq (dəyişdirməyin)
├── images/             # Bütün şəkil/video faylları buraya
│   ├── limon-logo.png
│   ├── cedu-3d.png
│   ├── product-1.jpg   (developer əlavə edir)
│   └── ...
└── README.md
```

## Developer Üçün: Şəkil/Video Əlavə Etmək

### Addım 1: Şəkil/Video Faylını Köçür
`images/` qovluğuna şəkil/video faylını əlavə edin.

### Addım 2: `js/data.js` Faylını Redaktə Et
İstədiyiniz bölümü tapın və fayl məlumatını əlavə edin:

```javascript
const PRODUCTS = [
    { type: "image", src: "images/product-1.jpg", alt: "Məhsul adı" },
    { type: "video", src: "images/video.mp4",     poster: "images/thumb.jpg" },
];
```

### Bölümlər:
| Dəyişən | Görünəcəyi yer |
|---------|----------------|
| `PRODUCTS` | Tez-Tez Satılan Məhsullar |
| `CERTIFICATES` | Sertifikatlar |
| `ZUBLER_PHOTOS` | Zubler Təlimləri |
| `TDSS_PHOTOS` | TDSS Təlimləri |
| `EIGHTEETH_PHOTOS` | Eighteeth Təlimləri |
| `PHILDEN_PHOTOS` | Philden Milling Təlimləri |
| `SATIS_MEDIA` | Ayarlar → Satış |
| `SERVIS_MEDIA` | Ayarlar → Servis |
| `XIDMETLER_MEDIA` | Ayarlar → Xidmətlər |
| `CATDIRILMA_MEDIA` | Ayarlar → Çatdırılma |

## EmailJS Konfiqurasiyası (Forma)
`js/main.js` faylında bu dəyərləri əvəz edin:
```javascript
const EMAILJS_SERVICE_ID  = 'service_limondental';
const EMAILJS_TEMPLATE_ID = 'template_service_form';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
```
[EmailJS Qeydiyyat](https://www.emailjs.com) — aylıq 200 email pulsuz.

## Render.com Deploy
1. GitHub repoya push edin
2. Render.com → New → Static Site
3. Branch: `main`
4. Build Command: *(boş buraxın)*
5. Publish Directory: `.` (nöqtə)
6. Deploy!
