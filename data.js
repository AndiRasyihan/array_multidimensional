// data.js - Sumber data Array 3D dan fungsi Local Storage

const STATUS_KOSONG = 'KOSONG';
const STATUS_TERPAKAI = 'DIPAKAI/TERISI'; // Menggunakan istilah dari tampilan Anda

// DEFINISI AWAL ARRAY 3 DIMENSI
const initialDataArray = [
    // LAPISAN 0: LABORATORIUM (Komputer)
    [
        ['Komputer 1', STATUS_TERPAKAI],
        ['Komputer 2', STATUS_TERPAKAI],
        ['Komputer 3', STATUS_TERPAKAI],
        ['Komputer 4', STATUS_KOSONG],
        ['Komputer 5', STATUS_KOSONG]
    ],
    // LAPISAN 1: RUANGAN KELAS (Menggunakan R-Number)
    [
        ['Ruangan 1', STATUS_TERPAKAI],
        ['Ruangan 2', STATUS_TERPAKAI],
        ['Ruangan 3', STATUS_TERPAKAI],
        ['Ruangan 4', STATUS_TERPAKAI],
        ['Ruangan 5', STATUS_TERPAKAI]
    ],
    // LAPISAN 2: PERPUSTAKAAN (Menggunakan P-Number)
    [
        ['Meja 1', STATUS_TERPAKAI],
        ['Meja 2', STATUS_KOSONG],
        ['Meja 3', STATUS_KOSONG],
        ['Meja 4', STATUS_KOSONG],
        ['Meja 5', STATUS_KOSONG]
    ]
];

const areaLabels = ['LABORATORIUM', 'RUANGAN KELAS', 'PERPUSTAKAAN'];

// --- Fungsi Pengelolaan Local Storage ---
function getLatestData() {
    const storedData = localStorage.getItem('manajemenRuanganData');
    
    if (storedData) {
        return JSON.parse(storedData);
    } else {
        // Jika Local Storage kosong, simpan data awal dan kembalikan
        saveUpdatedData(initialDataArray); 
        return initialDataArray;
    }
}

function saveUpdatedData(newData) {
    localStorage.setItem('manajemenRuanganData', JSON.stringify(newData));
}