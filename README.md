# Portofolio — Next.js + Tailwind CSS

Fitur: typewriter hero + partikel interaktif, counter statistik, filter project, lightbox sertifikat,
timeline kegiatan, form kontak (Web3Forms), dark/light mode, bottom-nav mobile, scroll reveal & progress bar,
OpenGraph, sitemap, robots, header keamanan Vercel.

## Jalankan lokal
```bash
npm install
cp .env.example .env.local   # isi NEXT_PUBLIC_WEB3FORMS_KEY
npm run dev                  # http://localhost:3000
```

## Yang wajib diganti
- Semua konten → `data/content.ts` (nama, link, project, sertifikat, kegiatan)
- `public/profile.jpg`, `public/og.png` (1200×630), `public/resume-ats.pdf`
- Gambar di `public/projects|certs|activities/`

## Deploy ke Vercel
1. `git init && git add . && git commit -m "init"` lalu push ke repo GitHub (node_modules sudah di .gitignore).
2. vercel.com → Add New → Project → import repo (framework Next.js terdeteksi otomatis).
3. Settings → Environment Variables:
   - `NEXT_PUBLIC_WEB3FORMS_KEY` = access key dari web3forms.com (gratis, masukkan email Anda)
   - `NEXT_PUBLIC_SITE_URL` = domain final, mis. `https://namaanda.vercel.app`
4. Deploy. Setiap `git push` akan otomatis ter-deploy ulang.
