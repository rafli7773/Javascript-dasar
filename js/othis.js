// THIS

// Function Declaration This

// function halo(){
// 	console.log(this);
// 	console.log('halo');
// 	// This Pada Fungsi Declarasi ,Mengembalikan Object Global
// }
// this.halo();


// Object Literal This

// var obj={a:10,nama:'Rafli Setiawan'};
// obj.halo=function(){
// 	console.log(this);
// 	console.log('halo');
// 	//This Mengembalikan Object Yang Bersangkutan
// }
// obj.halo();

// Construcktor This

function Halo(){
	console.log(this);
	console.log('halo');
	// This Mengembalikan Object Yang Baru Dibuat
}
new Halo();