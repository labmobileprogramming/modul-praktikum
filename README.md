# Panduan singkat Docusaurus

### Installasi Docusaurus

```
npm install -g docusaurus-init
```

### Local Development

```
npm run start
```

Perintah ini akan memulai lokal development server dan akan membukanya pada jendela browser.  

### Build

```
npm run build
```

Perintah ini akan menggenerasi konten ke dalam folder `build`, yang bisa di served oleh layanan static konten hosting.

### Deployment

Untuk deployment pada Github, kami menggunakan 2 repository, repo ini digunakan khusus untuk menyimpan folder project Docusaurus. sedangkan yang akan menyimpan file static `build` yang akan di *serve* adalah repository `https://github.com/labmobileprogramming/labmobileprogramming`
