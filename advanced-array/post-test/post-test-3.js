const daftarNilai = [
    {
      kelas: 'A1',
      nilai_siswa: [
        { nama: 'Jarwa Budiyanto', nilai: 83 },
        { nama: 'Balijan Uwais', nilai: 91 },
        { nama: 'Rafid Firgantoro', nilai: 57 },
        { nama: 'Reksa Waluyo', nilai: 87 },
        { nama: 'Aurora Rahmawati', nilai: 77 },
        { nama: 'Yani Purnawati', nilai: 59 },
        { nama: 'Violet Hastuti', nilai: 95 },
        { nama: 'Kuncara Maryadi', nilai: 56 },
        { nama: 'Kacung Hutapea', nilai: 62 },
        { nama: 'Jarwa Wasita', nilai: 69 },
        { nama: 'Hana Mardhiyah', nilai: 98 },
        { nama: 'Cengkal Sihombing', nilai: 86 },
        { nama: 'Opan Firgantoro', nilai: 71 },
        { nama: 'Nabila Pertiwi', nilai: 61 },
        { nama: 'Zulfa Laksita', nilai: 57 },
        { nama: 'Argono Suwarno', nilai: 72 },
        { nama: 'Janet Novitasari', nilai: 94 },
        { nama: 'Fitriani Mulyani', nilai: 68 },
        { nama: 'Balamantri Tampubolon', nilai: 90 },
        { nama: 'Jarwa Nashiruddin', nilai: 53 },
        { nama: 'Ajiman Manullang', nilai: 99 },
        { nama: 'Lembah Prasasta', nilai: 87 },
        { nama: 'Ciaobella Usamah', nilai: 72 },
        { nama: 'Lukita Thamrin', nilai: 92 },
        { nama: 'Kariman Widodo', nilai: 86 },
        { nama: 'Puji Yulianti', nilai: 62 },
        { nama: 'Carla Pudjiastuti', nilai: 57 },
        { nama: 'Kawaca Manullang', nilai: 97 },
        { nama: 'Janet Purwanti', nilai: 98 },
        { nama: 'Jagaraga Haryanto', nilai: 79 },
      ],
    },
    {
      kelas: 'A2',
      nilai_siswa: [
        { nama: 'Sumandi Ashim', nilai: 64 },
        { nama: 'Priyohadi Fitriyah', nilai: 82 },
        { nama: 'Jeremiah Fitra Maulina', nilai: 98 },
        { nama: 'Ferhat Fahmi Manar', nilai: 97 },
        { nama: 'Mario Melfriza', nilai: 88 },
        { nama: 'Givan Aristy', nilai: 81 },
        { nama: 'Deristya Gibran', nilai: 54 },
        { nama: 'Dede Cahyadi', nilai: 82 },
        { nama: 'Imam Amaliya', nilai: 81 },
        { nama: 'Ismail Atarita', nilai: 71 },
        { nama: 'Sutrisno Rumanti', nilai: 95 },
        { nama: 'Ressy Abidah', nilai: 56 },
        { nama: 'Mirza Lestari', nilai: 66 },
        { nama: 'Revi Aulia Hamdan', nilai: 53 },
        { nama: 'Alditio Purwanto', nilai: 91 },
        { nama: 'Herdaru Ervya', nilai: 72 },
        { nama: 'Yoedhistiera Maulidah', nilai: 65 },
        { nama: 'Edwin Naradhipa', nilai: 76 },
        { nama: 'Fahlian Latifani', nilai: 71 },
        { nama: 'Okky Novianti', nilai: 73 },
        { nama: 'Chandra Maydina', nilai: 84 },
        { nama: 'Arthur Prayogi', nilai: 57 },
        { nama: 'Adi Aisyah', nilai: 95 },
        { nama: 'Arrivaldi Rosmalia', nilai: 62 },
        { nama: 'Ilyas Chairunisa', nilai: 55 },
        { nama: 'Ray Cahyani', nilai: 64 },
        { nama: 'Wildan Widyasmoro', nilai: 78 },
        { nama: 'Doni Mark Abrianto', nilai: 79 },
        { nama: 'Julian Veronica', nilai: 67 },
        { nama: 'Adam Nirmala', nilai: 76 },
      ],
    },
    {
      kelas: 'A3',
      nilai_siswa: [
        { nama: 'Marvel Aurealia', nilai: 54 },
        { nama: 'Fakhrul Maulidah', nilai: 85 },
        { nama: 'Sumandi Puspitasari', nilai: 82 },
        { nama: 'Allen Pulandathi', nilai: 92 },
        { nama: 'Firas Alyani', nilai: 97 },
        { nama: 'Satrya Nirmala', nilai: 96 },
        { nama: 'Rendy Indriany', nilai: 100 },
        { nama: 'Pratama Rozi', nilai: 89 },
        { nama: 'Abdul Devito Cahyani', nilai: 60 },
        { nama: 'Hilman Wibisono', nilai: 56 },
        { nama: 'Hudzaifah Sapto', nilai: 79 },
        { nama: 'Mohammad Mitsuko', nilai: 84 },
        { nama: 'Aditya Yuniara', nilai: 54 },
        { nama: 'Andrilla Sayoga', nilai: 92 },
        { nama: 'Hafizh Rahma', nilai: 56 },
        { nama: 'Bryan Soleha', nilai: 63 },
        { nama: 'Aburachman Arifah', nilai: 72 },
        { nama: 'Aufa Irwansyah', nilai: 73 },
        { nama: 'Yenu Nurullah', nilai: 88 },
        { nama: 'Reynaldi Noverlia', nilai: 56 },
        { nama: 'Miftachul Kasta', nilai: 51 },
        { nama: 'Richard Gorat', nilai: 91 },
        { nama: 'Alfin Hidayatul', nilai: 66 },
        { nama: 'Izhar Adisanyoto', nilai: 67 },
        { nama: 'Roy Syahputra', nilai: 96 },
        { nama: 'Rinaldy Arie Fadhilah', nilai: 90 },
        { nama: 'Rezky Ghifary', nilai: 86 },
        { nama: 'Yuda Ramadhanty', nilai: 51 },
        { nama: 'Alrendy Pinem', nilai: 56 },
        { nama: 'Rangga Noordien', nilai: 79 },
      ],
    },
  ];


let kelasA1 = []

for (let i = 0; i < daftarNilai[0].nilai_siswa.length; i++) {
    kelasA1.push(daftarNilai[0].nilai_siswa[i])
}

const sumA1 = kelasA1

const kelasA1SortedAtas = kelasA1.sort(function(a, b) {
    return a.nilai - b.nilai
})

console.log('Daftar Nilai kelas A1 - Atas',kelasA1SortedAtas);

let kelasA2 = []

for (let i = 0; i < daftarNilai[1].nilai_siswa.length; i++) {
    kelasA2.push(daftarNilai[1].nilai_siswa[i])
}

const kelasA2SortedAtas = kelasA2.sort(function(a, b) {
    return a.nilai - b.nilai
})

console.log('Daftar Nilai kelas A2 - Atas',kelasA2SortedAtas);

let kelasA3 = []

for (let i = 0; i < daftarNilai[2].nilai_siswa.length; i++) {
    kelasA3.push(daftarNilai[2].nilai_siswa[i])
}

const kelasA3SortedAtas = kelasA3.sort(function(a, b) {
    return a.nilai - b.nilai
})


console.log('Daftar Nilai kelas A3 - Atas', kelasA3SortedAtas);