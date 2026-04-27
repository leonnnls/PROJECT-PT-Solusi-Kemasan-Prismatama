# Product Requirements Document (PRD): PRISMA. Web System

**Project Name:** PRISMA. (Solusi Kemasan Prismatama Web)  
**Status:** Prototype / Development  
**Version:** 1.0.0

## 1. Executive Summary
PRISMA. adalah platform digital untuk memodernisasi cara klien industri berinteraksi dengan layanan pengemasan. Tujuannya adalah membangun kepercayaan melalui desain yang presisi dan sistem pemesanan yang efisien.

## 2. Target Audience
- Manajer Logistik & Rantai Pasok (Supply Chain).
- Pemilik Bisnis E-commerce Skala Besar.
- Perusahaan Manufaktur yang membutuhkan standar pengemasan ekspor.

## 3. Functional Requirements
### A. Product Discovery
- User dapat melihat katalog produk dengan gambar high-resolution.
- User dapat memfilter produk berdasarkan kategori fungsional.
### B. Cart & Order Management
- Sistem "Payload Manifest" (Keranjang) untuk mengumpulkan item sebelum checkout.
- Penghitungan total nilai secara real-time.
### C. Checkout Workflow
- Form pengumpulan data pengiriman (Shipping Protocol).
- Notifikasi sukses "Manifest Secured" setelah konfirmasi.
### D. Company Trust Signals
- Profil perusahaan dengan statistik (Units Shipped, Success Rate).
- Lokasi pabrik yang jelas melalui integrasi peta.

## 4. Design & UX Requirements
- **Theme:** Industrial-Minimalist.
- **Color Palette:** Putih (#FFFFFF), Hitam (#000000), dan Accent Orange/Red untuk elemen aksi.
- **Vibe:** Profesional, Kokoh, Terpercaya, dan High-Tech.

## 5. Technical Specifications
- **Performance:** Skor Lighthouse > 90 untuk performa dan SEO.
- **Scalability:** Struktur data produk di `constants.ts` harus mudah dipindahkan ke Headless CMS atau Database nantinya.
- **AI Roadmap:** Integrasi `@google/genai` untuk chatbot asisten pemilihan kemasan berdasarkan dimensi barang.

## 6. Success Metrics
- Kecepatan load halaman < 2 detik.
- User flow dari landing hingga checkout tidak lebih dari 5 klik.
