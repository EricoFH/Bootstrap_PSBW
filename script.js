const mataKuliah = [
    {
        no: 1,
        nama: "Teknologi dan Aplikasi Bisnis Berkembang",
        nilai: "AB"
    },
    {
        no: 2,
        nama: "Pemrograman Berorientasi Objek",
        nilai: "A"
    },
    {
        no: 3,
        nama: "Arsitektur dan Organisasi Komputer",
        nilai: "AB"
    },
    {
        no: 4,
        nama: "Sistem Basis Data",
        nilai: "B"
    },
    {
        no: 5,
        nama: "Statistika dan Probabilitas",
        nilai: "B"
    },
    {
        no: 6,
        nama: "Algoritma dan Struktur Data",
        nilai: "AB"
    },
    {
        no: 7,
        nama: "Interaksi Manusia Komputer",
        nilai: "AB"
    }
];

function hitungNilai(data, nilaiDicari) {
    let jumlah = 0;

    for (let matkul of data) {
        if (matkul.nilai === nilaiDicari) {
            jumlah++;
        }
    }

    return jumlah;
}

function cariMatkul(data, nilaiDicari) {
    return data.filter(function(matkul) {
        return matkul.nilai === nilaiDicari;
    });
}

console.log("DAFTAR MATA KULIAH");

mataKuliah.forEach(function(matkul) {
    console.log(
        matkul.no + ". " +
        matkul.nama +
        " - Nilai: " +
        matkul.nilai
    );
});


console.log("")


console.log("STATUS NILAI");

mataKuliah.forEach(function(matkul) {

    if (matkul.nilai === "A" || matkul.nilai === "AB") {
        console.log(matkul.nama + " : Nilai bagus");
    }

    if (matkul.nilai === "B" && matkul.no > 3) {
        console.log(matkul.nama + " : Nilai B dan nomor mata kuliah > 3");
    }
});


console.log("")


console.log("HASIL DATA");

console.log("Jumlah nilai A:", hitungNilai(mataKuliah, "A"));
console.log("Jumlah nilai AB:", hitungNilai(mataKuliah, "AB"));
console.log("Jumlah nilai B:", hitungNilai(mataKuliah, "B"));

console.log("Mata kuliah dengan nilai A:");
console.log(cariMatkul(mataKuliah, "A"));

console.log("Mata kuliah dengan nilai AB:");
console.log(cariMatkul(mataKuliah, "AB"));

console.log("Mata kuliah dengan nilai B:");
console.log(cariMatkul(mataKuliah, "B"));