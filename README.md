# Dapur Rasa — template landing jasa katering

Template landing page untuk jasa katering acara: pernikahan, acara kantor, syukuran, dan arisan. Dibuat dengan SvelteKit 3 + Tailwind CSS v4 + Svelte 5 (runes).

## Jalanin

```bash
npm install
npm run dev
```

## Ganti teks

Semua teks ada di `src/lib/components/`:

- `Header.svelte` — nama brand, tagline, menu, CTA
- `Hero.svelte` — headline, social proof, promo bar
- `Stories.svelte` — filter acara + testimoni
- `Press.svelte` — nama klien/partner
- `HowItWorks.svelte` — langkah pemesanan
- `Menu.svelte` — 16 menu andalan, filter kategori, aturan menu per paket
- `Plans.svelte` — paket, harga per pax, aturan menu (Hemat 3, Premium 5, Custom bebas)
- `Different.svelte` — alasan memilih
- `Footer.svelte` — copyright

Judul dan deskripsi halaman ada di `src/routes/+layout.svelte`.

## Ganti foto

Semua foto ada di `static/images/`:

- `hero.jpg` — foto hero (sudah dikompres ±582 KB; ganti dengan file < 600 KB)
- `ava1.jpg`, `ava2.jpg`, `ava3.jpg` — avatar testimoni
- `mealbox.jpg` — foto kotak katering di langkah 1
- `kurir.jpg` — foto tim/pengiriman
- `dummy.jpg` — foto hidangan di bagian "Kenapa Kami"

Ganti file dengan nama yang sama. Usahakan di bawah 300 KB per foto.

## Catatan

- Desain, layout, dan class Tailwind jangan diubah kalau hanya mengganti konten.
- CTA saat ini mengarah ke `#plans`. Untuk produksi, ganti ke link WhatsApp.
- Untuk deploy statis, tambahkan `@sveltejs/adapter-static` dan prerender.
