# Solusi Kemasan Prismatama - Industrial Bottle Packaging Web

Platform katalog e-commerce B2B modern untuk **PT Solusi Kemasan Prismatama**, perusahaan manufaktur pengemasan berskala global yang telah beroperasi sejak 1966. Proyek ini difokuskan pada antarmuka yang sinematik, responsif, dan stabil.

## 🚀 Tech Stack
- **Frontend:** React 19 (TypeScript)
- **Styling:** Tailwind CSS v4
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React
- **Build Tool:** Vite 6

## 📦 Fitur Utama
- **Cinematic Hero Section:** Latar belakang video yang diputar otomatis (`/videos/hero.mp4`) untuk memberikan kesan pertama yang kuat.
- **Industrial Bottle Catalog:** Filter produk responsif berdasarkan varian produk (15ml, 30ml, Glass). Grid kategori otomatis menyesuaikan layar *mobile*.
- **Advanced Cart System:** Manajemen *payload* keranjang belanja dengan animasi *spring*.
- **Mobile-First UX:** Desain dioptimalkan untuk *smartphone*, termasuk *header* dinamis, pencegahan *horizontal scroll*, dan ukuran logo adaptif.
- **Location Integration:** Embed Google Maps interaktif ke kantor pusat di Surabaya.

## 🛠️ Cara Menjalankan di Lokal
1. **Clone & Install Dependencies:**
   ```bash
   npm install
   ```
2. **Jalankan Development Server:**
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di `http://localhost:3000`.

3. **Build untuk Produksi:**
   ```bash
   npm run build
   ```

## 📂 Struktur Penting
- `/src/constants.ts`: Pusat data produk (katalog botol) dan URL gambar.
- `/src/App.tsx`: Logika utama UI, *state management* keranjang, dan pengaturan *layout*.
- `/public/images/`: Semua aset visual statis (Logo, Ikon). Penamaan folder menggunakan **huruf kecil** untuk mencegah *error case-sensitive* saat *deploy* ke Vercel.
- `/public/videos/hero.mp4`: File video latar belakang utama.

## ⚙️ Deployment Notes (Vercel)
Proyek ini sudah dikonfigurasi agar ramah *deployment* di Vercel:
- Tidak ada isu *case-sensitive* pada *path* gambar.
- Aset video diletakkan di `public` untuk *direct serving*.
- Error *type-checking* telah dibersihkan.
