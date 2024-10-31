const namaKaryawan = [
    "Devyn Ramirez",
    "Harmony Duncan",
    "Clarissa Burgess",
    "Reilly Blanchard",
    "Zion Brooks",
    "Jovanny Mays",
    "Cindy Chase",
    "Kristin Mcdaniel",
    "Macey Sanford",
    "Alfredo Faulkner",
]

const masaKerja = [
    10,
    5,
    8,
    7,
    4,
    10,
    9,
    8,
    7,
    10
]

const karyawanJunior = []
const karyawanSenior = []
const gajiKaryawan = []

const golonganKaryawan = () => {
    for (let i = 0; i < masaKerja.length; i++){
        if(masaKerja[i] <= 5){
            karyawanJunior.push(namaKaryawan[i])
            gajiKaryawan.push(`${namaKaryawan[i]} mendapatkan gaji Rp 4.000.000`)
        }else{
            karyawanSenior.push(namaKaryawan[i])
            gajiKaryawan.push(`${namaKaryawan[i]} mendapatkan gaji Rp 7.000.000`)
        }
    }
}


const listKaryawanSenior = () => {
    console.log("Karyawan Senior:\n")
    for(let index in karyawanSenior){
    console.log(`${Number(index) + 1}.${karyawanSenior[index]}`)
    }
}


const listKaryawanJunior = () => {
    console.log("Karyawan Junior:\n")
    let nomer = 0;
    for (let i of karyawanJunior){
    console.log(`${nomer+=1}.${i}`)
}s
}


const listGajiKaryawan = () => {
    console.log("Gaji karyawan: \n")
    for(let g in gajiKaryawan){
    console.log(`${parseInt(g)+1}.${gajiKaryawan[g]}`)
}
}

golonganKaryawan()
console.log(`----------------------------------------------------`)
listKaryawanSenior()
console.log(`----------------------------------------------------`)
listKaryawanJunior()
console.log(`----------------------------------------------------`)
listGajiKaryawan()
console.log(`----------------------------------------------------`)

 

    