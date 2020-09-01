// MEMBUAT OBJECT

// Object Literal
var siswa1={
	nama:'Rafli Setiawan',
	umur:16,
	jurusan:'RPL'
}
var siswa2={
	nama:'hasan',
	umur:'16',
	jurusan:'RPL'
}
// Function Declaration

function buatObjectSiswa(nama,umur,jurusan){
	siswa={};
	siswa.nama=nama;
	siswa.umur=umur;
	siswa.jurusan=jurusan;
	return siswa;
}
var siswa3=buatObjectSiswa('Irvan','16','RPL');

// Constructor

function Siswa(nama,umur,jurusan){
	this.nama=nama;
	this.umur=umur;
	this.jurusan=jurusan;
}
var mhs4= new Siswa('Ari','16','RPL');


