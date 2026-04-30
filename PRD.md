# Product Requirements Document (PRD): PRISMA. Web System

**Project Name:** PRISMA. (Solusi Kemasan Prismatama Web)  
**Status:** Prototype / Development  
**Version:** 1.1.0

## 1. Executive Summary
PRISMA. adalah platform e-commerce B2B untuk **PT Solusi Kemasan Prismatama**, perusahaan manufaktur pengemasan yang telah berdiri sejak **1966**. Platform ini dirancang untuk menampilkan spesialisasi perusahaan dalam produksi botol industri berkekuatan tinggi (Glass, Polymer, Steel, Eco-friendly) dengan desain antarmuka yang modern, sinematik, dan responsif.

## 2. Target Audience
- Manajer Logistik & Rantai Pasok (Supply Chain).
- Perusahaan Laboratorium & Kimia.
- Produsen Minuman & Kosmetik skala besar.

## 3. Functional Requirements
### A. Product Discovery
- Katalog produk yang difokuskan pada varian botol industri (15ml, 30ml, Glass, Premium).
- Bar kategori responsif (auto-fit grid) yang menampilkan semua opsi tanpa perlu *horizontal scroll* di perangkat mobile.
- Gambar produk berkualitas tinggi untuk merepresentasikan kualitas material.

### B. Cart & Order Management
- Sistem "Payload Manifest" (Keranjang) interaktif.
- Penghitungan total nilai secara real-time.

### C. Checkout Workflow
- Form simulasi pengumpulan data pengiriman (Shipping Protocol).
- Notifikasi sukses "Manifest Secured" setelah konfirmasi.

### D. Company Trust Signals
- Latar belakang video sinematik di *Hero Section* untuk kesan premium.
- Integrasi Google Maps interaktif yang mengarah ke markas pusat: **Jl. Simo Kwagean No.22, Surabaya**.
- Penekanan pada warisan sejarah perusahaan (berdiri sejak 1966, 99% Success Rate).

## 4. Design & UX Requirements
- **Theme:** Industrial-Minimalist, Dark Mode Hero.
- **Responsiveness:** Optimalisasi ketat untuk layar *smartphone* (Logo responsif, Grid kategori, Anti-horizontal scroll).
- **Vibe:** Profesional, Kokoh, Terpercaya, dan High-Tech.

## 5. Technical Specifications
- **Frontend:** React 19 (TypeScript) + Vite 6.
- **Styling:** Tailwind CSS v4.
- **Assets:** Semua aset statis berada di direktori `public/images/` dan `public/videos/` dengan format *lowercase* untuk memastikan kompatibilitas *deployment* di server berbasis Linux (seperti Vercel).
- **Video:** Menggunakan satu file video ringan (`videos/hero.mp4`) sebagai latar belakang otomatis untuk stabilitas *render*.

## 6. Success Metrics
- Kecepatan load halaman instan (penggunaan aset gambar/video yang telah dioptimasi).
- Tidak ada isu *layout breaking* di perangkat *mobile*.
