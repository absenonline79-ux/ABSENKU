//=================================================
// URL GOOGLE APPS SCRIPT
//=================================================

const URL_WEB_APP = "https://script.google.com/macros/s/AKfycbwyabEs1MiJViV-wTJxtaSSiVryHqPS0092lGIUZoYzM2Eoucl-WQQgT9kI5dYXHJYX-Q/exec";


//=================================================
// DATA GURU
//=================================================

const guru = [

{username:"isma",password:"12345",nama:"Ismaroh"},
{username:"budi",password:"12345",nama:"Setiyo Budi Utomo"},
{username:"nur",password:"12345",nama:"Ahmat Nurkhozin"},
{username:"yoga",password:"12345",nama:"Yoga Prastyo"},
{username:"rus",password:"12345",nama:"Rustini"},
{username:"novi",password:"12345",nama:"Novida Handayani"},
{username:"sus",password:"12345",nama:"Susyati"},
{username:"tri",password:"12345",nama:"Tri Haryati"},


];


//=================================================
// LOGIN
//=================================================

function login(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

let berhasil = false;

for(let i=0;i<guru.length;i++){

if(username === guru[i].username &&
password === guru[i].password){

localStorage.setItem("namaGuru",guru[i].nama);

alert("Login Berhasil");

window.location.href = "dashboard.html";

berhasil = true;

break;

}

}

if(!berhasil){

alert("Username atau Password salah.");

}

}


//=================================================
// LOGOUT
//=================================================

function logout(){

localStorage.clear();

alert("Logout Berhasil");

window.location.href="index.html";

}



//=================================================
// KIRIM DATA KE GOOGLE SPREADSHEET
//=================================================

function kirimData(nama,status){

let sekarang = new Date();

let data = {

nama:nama,
tanggal:sekarang.toLocaleDateString("id-ID"),
jam:sekarang.toLocaleTimeString("id-ID"),
status:status

};


fetch(URL_WEB_APP,{

method:"POST",

body:JSON.stringify(data)

})

.then(response => response.text())

.then(result =>{

alert(result);

})

.catch(error =>{

alert("Data gagal dikirim.");

console.log(error);

});


}



//=================================================
// ABSEN MASUK
//=================================================

function absenMasuk(){

let nama = localStorage.getItem("namaGuru");

kirimData(nama,"Hadir");

}


//=================================================
// ABSEN PULANG
//=================================================

function absenPulang(){

let nama = localStorage.getItem("namaGuru");

kirimData(nama,"Pulang");

}


//=================================================
// IZIN
//=================================================

function izin(){

let nama = localStorage.getItem("namaGuru");

kirimData(nama,"Izin");

}


//=================================================
// SAKIT
//=================================================

function sakit(){

let nama = localStorage.getItem("namaGuru");

kirimData(nama,"Sakit");

}



//=================================================
// EXPORT EXCEL
//=================================================

function exportExcel(){

alert("Fitur Export Excel akan dibuat dari Google Spreadsheet.");

}



//=================================================
// EXPORT PDF
//=================================================

function exportPDF(){

alert("Fitur Export PDF akan dibuat dari Google Spreadsheet.");

}



//=================================================
// RIWAYAT ABSENSI
//=================================================

function riwayatAbsensi(){

alert("Fitur Riwayat Absensi sedang dibuat.");

}



//=================================================
// SERVICE WORKER (PWA)
//=================================================

if("serviceWorker" in navigator){

navigator.serviceWorker.register("service-worker.js")

.then(function(){

console.log("PWA Aktif");

})

.catch(function(error){

console.log(error);

});

}