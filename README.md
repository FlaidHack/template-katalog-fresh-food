# Fresh Food — landing page clone

SvelteKit 3 + Tailwind CSS v4 + Svelte 5 (runes).

## Jalanin
```bash
npm install
npm run dev
```

## Ganti gambar
Semua gambar sekarang pakai satu dummy: `static/images/dummy.jpg`.
Cari `/images/dummy.jpg` di `src/lib/components/*.svelte`, ganti satu-satu:
- `Hero.svelte` — background hero + 3 avatar
- `Stories.svelte` — foto before/after tiap card
- `HowItWorks.svelte` — gambar step 1 & gambar besar kanan
- `Different.svelte` — foto meal tengah

## Design tokens (`src/app.css`)
| Token | Hex |
|---|---|
| forest | #0b5d40 |
| forest-deep | #07492f |
| lime | #c8f23a |
| cream | #fbf7dc |
| ember | #e8622c |

Fonts (via @fontsource, offline-safe): Anton (display), Kaushan Script (aksen brush), Outfit (body).

## Struktur
`src/lib/components/` → Header, Hero, Stories, Press, HowItWorks, Plans, Different, Footer, plus Badge & Tag (sticker).
