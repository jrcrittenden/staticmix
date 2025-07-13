# Kasus Penggunaan

Kekuatan Repomix terletak pada kemampuannya untuk bekerja dengan layanan berlangganan seperti ChatGPT, Claude, Gemini, Grok tanpa khawatir tentang biaya, sambil menyediakan konteks kode base lengkap yang menghilangkan kebutuhan untuk eksplorasi file—membuat analisis lebih cepat dan seringkali lebih akurat.

Dengan seluruh kode base tersedia sebagai konteks, Repomix memungkinkan berbagai aplikasi termasuk perencanaan implementasi, investigasi bug, pemeriksaan keamanan perpustakaan pihak ketiga, pembuatan dokumentasi, dan banyak lagi.

## Analisis & Investigasi & Refactoring Kode

### Investigasi Bug
Bagikan seluruh kode base Anda dengan AI untuk mengidentifikasi akar penyebab masalah di beberapa file dan dependensi.

```
Kode base ini memiliki masalah memory leak di server. Aplikasi crash setelah berjalan selama beberapa jam. Silakan analisis seluruh kode base dan identifikasi penyebab potensial.
```

### Perencanaan Implementasi
Dapatkan saran implementasi komprehensif yang mempertimbangkan seluruh arsitektur kode base dan pola yang ada.

```
Saya ingin menambahkan autentikasi pengguna ke aplikasi ini. Silakan tinjau struktur kode base saat ini dan sarankan pendekatan terbaik yang cocok dengan arsitektur yang ada.
```

### Bantuan Refactoring
Dapatkan saran refactoring yang mempertahankan konsistensi di seluruh kode base Anda.

```
Kode base ini perlu refactoring untuk meningkatkan maintainability. Silakan sarankan perbaikan sambil menjaga fungsionalitas yang ada tetap utuh.
```

### Review Kode
Review kode komprehensif yang mempertimbangkan seluruh konteks proyek.

```
Silakan review kode base ini seolah-olah Anda melakukan review kode menyeluruh. Fokus pada kualitas kode, masalah potensial, dan saran perbaikan.
```


## Dokumentasi & Pengetahuan

### Pembuatan Dokumentasi
Hasilkan dokumentasi komprehensif yang mencakup seluruh kode base Anda.

```
Hasilkan dokumentasi komprehensif untuk kode base ini, termasuk dokumentasi API, instruksi setup, dan panduan developer.
```

### Ekstraksi Pengetahuan
Ekstrak pengetahuan teknis dan pola dari kode base Anda.

```
Ekstrak dan dokumentasikan pola arsitektural utama, keputusan desain, dan praktik terbaik yang digunakan dalam kode base ini.
```

## Analisis Perpustakaan Pihak Ketiga

### Audit Keamanan Dependensi
Analisis perpustakaan pihak ketiga dan dependensi untuk masalah keamanan.

```
Silakan analisis semua dependensi pihak ketiga dalam kode base ini untuk kerentanan keamanan potensial dan sarankan alternatif yang lebih aman jika diperlukan.
```

### Analisis Integrasi Perpustakaan
Pahami bagaimana perpustakaan eksternal diintegrasikan ke dalam kode base Anda.

```
Analisis bagaimana kode base ini berintegrasi dengan perpustakaan eksternal dan sarankan perbaikan untuk maintainability yang lebih baik.
```

## Contoh Dunia Nyata

### Workflow Generasi Kode LLM
Seorang developer berbagi bagaimana mereka menggunakan Repomix untuk mengekstrak konteks kode dari kode base yang ada, kemudian memanfaatkan konteks tersebut dengan LLM seperti Claude dan Aider untuk perbaikan incremental, review kode, dan pembuatan dokumentasi otomatis.

**Kasus Penggunaan**: Workflow pengembangan yang efisien dengan bantuan AI
- Ekstrak konteks kode base lengkap
- Berikan konteks kepada LLM untuk generasi kode yang lebih baik
- Pertahankan konsistensi di seluruh proyek

[Baca workflow lengkap →](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/)

### Membuat Knowledge Datapack untuk LLM
Penulis menggunakan Repomix untuk mengemas konten tertulis mereka—blog, dokumentasi, dan buku—ke dalam format yang kompatibel dengan LLM, memungkinkan pembaca berinteraksi dengan keahlian mereka melalui sistem Q&A yang didukung AI.

**Kasus Penggunaan**: Berbagi pengetahuan dan dokumentasi interaktif
- Kemas dokumentasi ke dalam format yang ramah AI
- Aktifkan Q&A interaktif dengan konten
- Buat basis pengetahuan yang komprehensif

[Pelajari lebih lanjut tentang knowledge datapack →](https://lethain.com/competitive-advantage-author-llms/)