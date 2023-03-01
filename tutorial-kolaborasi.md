# Tutorial Kolaborasi

Adapun langkah-langkah dasar untuk berkontribusi/berkolaborasi dalam _repository_ adalah sebagai berikut:

1. _Fork repository_ (jika belum).
2. Lakukan _clone repository_ hasil _fork_ dari GitHub ke _local_.
3. Buat _branch_ baru sebagai tempat perubahan kode.
4. Lakukanlah perubahan kode yang diperlukan atau diinginkan.
5. Lakukan `commit` untuk perubahan yang sudah dilakukan. Gunakan pesan _commit_ yang informatif.
6. Lakukan _push_ dari _local_ ke _repository_ GitHub anda.
7. Lakukan _pull request_ dari **repository anda** ke **repository utama** ([pemrogrammer](https://github.com/pemrogrammer/kelas-alpinejs-2023)).
8. Selesai.

## Langkah 2-6 untuk pengguna CLI

2. Untuk _clone repository_ ketikan perintah `git clone https://github.com/username/nama-repository.git`, pastikan anda _repository_ yang di clone adalah milik anda sendiri agar tidak terjadi error seperti "permission denied"
3. Buat branch baru dengan perintah `git branch -M namabranch` 
	a. Setelah membuat branch baru gunakan perintah `git checkout namabranch` untuk pindah branch
4. Lakukan perubahan yang diperlukan
5. Sebelum melakukan commit pindahkan semua file ke _staging area_ dengan perintah `git add .`
	a. untuk commit jalan kan perintah `git commit -m "pesan commit"`
6. Untuk _push branch_ yang baru dibuat jalankan perintah `git push -u origin namabranch`