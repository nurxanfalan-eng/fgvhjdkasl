/**
 * ============================================================
 *  LIMON DENTAL SERVICE — MEDIA DATA FILE
 *  Developer bu faylda şəkil və videoları idarə edir.
 *  Sayta daxil olmadan yalnız bu faylı redaktə edin.
 * ============================================================
 *
 *  HƏR MEDIA OBYEKTİNİN FORMATΙ:
 *  {
 *    type: "image" | "video",   // Fayl növü
 *    src:  "images/xxx.jpg",    // Faylın yolu (images/ qovluğunda saxlayın)
 *    alt:  "Təsvir mətni"       // Alternativ mətn (şəkil üçün)
 *  }
 *
 *  VİDEO ÜÇÜN:
 *  {
 *    type: "video",
 *    src:  "images/video.mp4",
 *    poster: "images/thumb.jpg"  // İsteğe bağlı thumbnail
 *  }
 *
 * ============================================================
 */

// -------------------------------------------------------
// 1. TEZ-TEZ SATILAN MƏHSULLAR (Best Sellers)
//    Buraya məhsul şəkillərini/videolarını əlavə edin
// -------------------------------------------------------
const PRODUCTS = [
    // Nümunə:
    // { type: "image", src: ""C:\Users\Nurxan\Pictures\Screenshots\Ekran şəkli 2026-05-28 043246.png"", alt: "CAD/CAM Kampaniyası" },
    // { type: "image", src: "images/product-2.jpg", alt: "Vario 230" },
    // { type: "image", src: "images/product-3.jpg", alt: "Creality Halot 97 Combo" },
    // { type: "image", src: "images/product-4.jpg", alt: "Zetin 20B Pro" },
    // { type: "image", src: "images/product-5.jpg", alt: "CEDU QScan PRO S" },
    // { type: "image", src: "images/product-6.jpg", alt: "Vario Star T50" },
];

// -------------------------------------------------------
// 2. SERTİFİKATLAR (Certificates)
//    Buraya sertifikat şəkillərini əlavə edin
// -------------------------------------------------------
const CERTIFICATES = [
    // { type: "image", src: "images/cert-1.jpg", alt: "Zubler Sertifikat 1" },
    // { type: "image", src: "images/cert-2.jpg", alt: "Eighteeth CBCT Sertifikat" },
    // { type: "image", src: "images/cert-3.jpg", alt: "Zubler Sertifikat 2" },
    // { type: "image", src: "images/cert-4.jpg", alt: "Philden Sertifikat" },
    // { type: "image", src: "images/cert-5.jpg", alt: "TexnoLab Sertifikat" },
];

// -------------------------------------------------------
// 3. ZUBLER TƏLİMLƏRİ FOTOALBOMU
//    Zubler (Almaniya) təlim şəkilləri
// -------------------------------------------------------
const ZUBLER_PHOTOS = [
    // { type: "image", src: "images/zubler-1.jpg", alt: "Zubler Təlim 1" },
    // { type: "image", src: "images/zubler-2.jpg", alt: "Zubler Təlim 2" },
    // { type: "image", src: "images/zubler-3.jpg", alt: "Zubler Təlim 3" },
    // { type: "image", src: "images/zubler-4.jpg", alt: "Zubler Təlim 4" },
    // { type: "image", src: "images/zubler-5.jpg", alt: "Zubler Təlim 5" },
    // { type: "image", src: "images/zubler-6.jpg", alt: "Zubler Təlim 6" },
];

// -------------------------------------------------------
// 4. TDSS TƏLİMLƏRİ FOTOALBOMU (Türkiyə)
// -------------------------------------------------------
const TDSS_PHOTOS = [
    // { type: "image", src: "images/tdss-1.jpg", alt: "TDSS Təlim 1" },
    // { type: "image", src: "images/tdss-2.jpg", alt: "TDSS Təlim 2" },
    // { type: "image", src: "images/tdss-3.jpg", alt: "TDSS Təlim 3" },
    // { type: "image", src: "images/tdss-4.jpg", alt: "TDSS Təlim 4" },
];

// -------------------------------------------------------
// 5. EIGHTEETH TƏLİMLƏRİ FOTOALBOMU (Çin)
// -------------------------------------------------------
const EIGHTEETH_PHOTOS = [
    // { type: "image", src: "images/eighteeth-1.jpg", alt: "Eighteeth Təlim 1" },
    // { type: "image", src: "images/eighteeth-2.jpg", alt: "Eighteeth Təlim 2" },
    // { type: "image", src: "images/eighteeth-3.jpg", alt: "Eighteeth Təlim 3" },
    // { type: "image", src: "images/eighteeth-4.jpg", alt: "Eighteeth Təlim 4" },
    // { type: "image", src: "images/eighteeth-5.jpg", alt: "Eighteeth Təlim 5" },
];

// -------------------------------------------------------
// 6. PHİLDEN MİLLİNG TƏLİMLƏRİ FOTOALBOMU (Çin)
// -------------------------------------------------------
const PHILDEN_PHOTOS = [
    // { type: "image", src: "images/philden-1.jpg", alt: "Philden Milling Təlim 1" },
    // { type: "image", src: "images/philden-2.jpg", alt: "Philden Milling Təlim 2" },
];

// -------------------------------------------------------
// 7. SATIŞ BÖLÜMÜ — Ayarlar paneli
// -------------------------------------------------------
const SATIS_MEDIA = [
    // { type: "image", src: "images/satis-1.jpg", alt: "Satış şəkil 1" },
    // { type: "image", src: "images/satis-2.jpg", alt: "Satış şəkil 2" },
    // { type: "image", src: "images/satis-3.jpg", alt: "Satış şəkil 3" },
];

// -------------------------------------------------------
// 8. SERVİS BÖLÜMÜ — Ayarlar paneli
// -------------------------------------------------------
const SERVIS_MEDIA = [
    // { type: "image", src: "images/servis-1.jpg", alt: "Servis şəkil 1" },
    // { type: "image", src: "images/servis-2.jpg", alt: "Servis şəkil 2" },
    // { type: "image", src: "images/servis-3.jpg", alt: "Servis şəkil 3" },
    // { type: "image", src: "images/servis-4.jpg", alt: "Servis şəkil 4" },
    // { type: "video", src: "images/servis-video.mp4", poster: "images/servis-thumb.jpg" },
];

// -------------------------------------------------------
// 9. XİDMƏTLƏR BÖLÜMÜ — Ayarlar paneli
// -------------------------------------------------------
const XIDMETLER_MEDIA = [
    // { type: "image", src: "images/xidmet-1.jpg", alt: "Xidmət şəkil 1" },
    // { type: "image", src: "images/xidmet-2.jpg", alt: "Xidmət şəkil 2" },
];

// -------------------------------------------------------
// 10. ÇATDIRILMA VƏ QURAŞDIRILMA — Ayarlar paneli
// -------------------------------------------------------
const CATDIRILMA_MEDIA = [
    // { type: "image", src: "images/catdirilma-1.jpg", alt: "Çatdırılma şəkil 1" },
    // { type: "image", src: "images/catdirilma-2.jpg", alt: "Çatdırılma şəkil 2" },
];

// ============================================================
//  BU HİSSƏNİ DƏYİŞMƏYİN — AVTOMATIK İŞLƏYİR
// ============================================================
window.LIMON_DATA = {
    products:        PRODUCTS,
    certificates:    CERTIFICATES,
    zublerPhotos:    ZUBLER_PHOTOS,
    tdssPhotos:      TDSS_PHOTOS,
    eighteethPhotos: EIGHTEETH_PHOTOS,
    phildenPhotos:   PHILDEN_PHOTOS,
    satisMedia:      SATIS_MEDIA,
    servisMedia:     SERVIS_MEDIA,
    xidmetlerMedia:  XIDMETLER_MEDIA,
    catdirilmaMedia: CATDIRILMA_MEDIA,
};
