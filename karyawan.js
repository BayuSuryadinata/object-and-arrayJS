const daftarKaryawan = [
    {
        id : [],
        namaKaryawan : "Devyn Ramirez",
        masaKerja : 10,
    },
    {
        id : [],
        namaKaryawan : "Harmony Duncan",
        masaKerja : 5,
    },
    {
        id : [],
        namaKaryawan : "Clarissa Burgess",
        masaKerja : 8,
    },
    {
        id : [],
        namaKaryawan : "Reilly Blanchard",
        masaKerja : 7,
    },
    {
        id : [],
        namaKaryawan : "Zion Brooks",
        masaKerja : 4,
    },
    {
        id : [],
        namaKaryawan : "Jovanny Mays",
        masaKerja :  10,
    },
    {
        id : [],
        namaKaryawan :  "Cindy Chase",
        masaKerja : 9,
    },
    {
        id : [],
        namaKaryawan : "Kristin Mcdaniel",
        masaKerja :  8,
    },
    {
        id : [],
        namaKaryawan : "Macey Sanford",
        masaKerja : 7,
    },
    {
        id : [],
        namaKaryawan : "Alfredo Faulkner",
        masaKerja :  10
    },
]


const golonganGajiKaryawan = () =>
{   
    const golonganGajiKaryawan = []
    for(let i = 0; i < daftarKaryawan.length; i++){
        if(daftarKaryawan[i].masaKerja < 6){
            golonganGajiKaryawan.push(console.log("4.000.000"))
            
        }else{
            golonganGajiKaryawan.push(console.log("7.000.000"))
        }
    }
}
golonganGajiKaryawan()

const tampilkanKaryawan = () =>
{
    for(let i = 0; i < daftarKaryawan.length; i++){
        daftarKaryawan[i].id.push(i+1+(1000))
        console.log
        (`
            ID : ${daftarKaryawan[i].id}
            Nama Karyawan: ${daftarKaryawan[i].namaKaryawan}
            Masa Kerja: ${daftarKaryawan[i].masaKerja}
            Gaji: ${daftarKaryawan[i].masaKerja}
        `)
    }
}

