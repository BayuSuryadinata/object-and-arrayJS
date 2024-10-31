
const daftarSiswa = [
    {
        nama : "Rosa",
        jenKel : "P",
        umur : "17",
        wfavorit : "kuning",
        seragam : ["osis", "identitas", "wearpack", "pramuka", "olaraga"],
    },
    {
        nama : "Ambar",
        jenKel : "L",
        umur : "16",
        wfavorit : "merah",
        seragam : ["osis", "identitas", "wearpack", "pramuka", "olaraga"],
    },
    {
        nama : "Rizki",
        jenKel : "P",
        umur : "16",
        wfavorit : "ungu",
        seragam : ["osis", "identitas", "wearpack", "pramuka", "olaraga"],
    
    },
    {
        nama : "Mila",
        jenKel : "P",
        umur : "18",
        wfavorit : "biru",
        seragam : ["osis", "identitas", "wearpack", "pramuka", "olaraga"],
    
    },
    {
        nama : "Bagas",
        jenKel : "L",
        umur : "15",
        wfavorit : "coklat",
        seragam : ["osis", "identitas", "wearpack", "pramuka", "olaraga"],
    
    },
    
]

const tampilkanSiswa = () =>
{
    for(let i = 0; i < daftarSiswa.length ; i++){
    console.log
    (
        `
        ${i+1}.Nama Siswa: ${daftarSiswa[i].nama}
         Jenis Kelamin: ${daftarSiswa[i].jenKel}
         Umur: ${daftarSiswa[i].umur}
         Warna Favorit: ${daftarSiswa[i].wfavorit}
         seragam: ${daftarSiswa[i].seragam}
        `
    )
    }
}


const tambahSiswa = () =>
{
    const nama = prompt("Inputkan nama")
    const jenKel = prompt("Inputkan Jenis Kelamin:")
    const umur = prompt("Inputkan umur")
    const wfavorit = prompt("Inputkan warna favorit: ")
  
    const siswaBaru = {
        nama : nama,
        jenKel : jenKel,
        umur : umur,
        wfavorit : wfavorit,
        seragam : ["osis", "identitas", "wearpack", "pramuka", "olaraga"],
    }
    daftarSiswa.push(siswaBaru)
}


const cariIndex = (nama) =>
{
    for(let i = 0; i < daftarSiswa.length; i++){
        if(daftarSiswa[i].nama == nama){
            return i 
        }
    }
}


const hapusSiswa = (target) =>
{
    const hapusIndex = cariIndex(target)

    daftarSiswa.splice(hapusIndex, 1)
}




const editSiswa = (target) =>
{
    const namaBaru = prompt("Nama Baru: ")
    const jenKelBaru = prompt("Jenis Kelamin: ")
    const umurBaru = prompt("Umur: ")
    const wfavoritBaru = prompt("Warna Favorit")

    const editSiswa = cariIndex(target)
    daftarSiswa[editSiswa] = {
        nama : namaBaru,
        jenKel : jenKelBaru,
        umur : umurBaru,
        wfavorit : wfavoritBaru,
        seragam : ["osis", "identitas", "wearpack", "pramuka", "olaraga"],

    }
}







