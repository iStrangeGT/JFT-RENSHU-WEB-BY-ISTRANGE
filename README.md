# JFT 練習問題 — JFT-Basic Practice Web (React + Tailwind)

Web latihan untuk JFT-Basic (Japan Foundation Test), berisi 4 bagian:

| Bagian | Jumlah Soal | Keterangan |
|---|---|---|
| 文字語彙 (Mojigoi) | 20 | Kanji, cara baca, arti kata |
| 表現 (Hyougen) | 50 | Tata bahasa & ungkapan percakapan |
| 聴解 (Choukai) | 20 | Listening (text-to-speech browser) |
| 読解 (Dokkai) | 20 | Membaca wacana pendek |

Pindah antar bagian akan memunculkan konfirmasi (dalam bahasa Jepang) karena
progres bagian yang sedang dikerjakan akan diulang dari awal.

## Cara menjalankan

```bash
npm install
npm run dev
```

Lalu buka `http://localhost:5173` di browser.

## Build untuk production

```bash
npm run build
npm run preview
```

## Struktur folder

```
src/
  components/        Komponen UI (TaskBar, QuestionCard, dll)
  data/               Data soal per bagian + metadata section
  App.jsx             Komponen utama, menggabungkan semuanya
  main.jsx            Entry point React
  index.css           Tailwind directives + font import
```

## Catatan

- Audio bagian 聴解 menggunakan **Web Speech API** browser (`SpeechSynthesis`),
  jadi kualitas suara tergantung voice bahasa Jepang yang tersedia di
  perangkat/browser pengguna.
- Bagian 表現 berisi 50 soal yang diambil dari materi referensi pengguna
  (JFT ekspresi 6–10 / irodori 1–4), tidak dikurangi atau ditambahi.
