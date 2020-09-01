// Manipulasi Array

// var arr=['Rafli','Natan','Firman'];

// for(var i=0;i<arr.length;i++){
// 	console.log('Siswa Ke:'+(i+1)+':'+arr[i]);
// }

// Menggunakan Join
// 1.join
// var arr=['Rafli','Natan','Firman','asu','koceng'];
// console.log(arr.join(' - '))

//2. Push&Pop
// arr.push('Opin');

// arr.pop();


//3.Unshift & Shift
// arr.unshift('Asu');

// arr.shift();

// 4. Splice & Slice

// arr.splice(2,0,'Haidar','Afin');

// var arr2=arr.slice(1,3);
// ForEach & Map
var angka=[1,2,3,4,5,6,7];
 
// angka.forEach(function(e){
// 	console.log(e);
// })
// var nama=['Rafli','Natan','Firman'];

// nama.forEach(function(e ,angka){
// 	console.log('Nama Siswa Ke: ' +(angka+1)+ ' adalah:'+e);
// })

// // map

// var angka=[1,2,3,4,5,6];
// var angka2=angka.map(function(e){
// 	return e;
// })
// console.log(angka2.join('-'))

// // sort

// var angka=[7,4,2,5,3,1,15,20];
// angka.sort(function(a,b){
// 	return a-b;
// });
// console.log(angka.join('-'));
//filter
var angka=[2,3,1,4,2,56,7,5];
var angka2=angka.filter(function(x){
	return x < 5;
})
console.log(angka2.join('-'));
//find
var angka=[2,3,1,4,2,56,7,5];
var angka2=angka.find(function(x){
	return x < 5;
})
console.log(angka2);




// console.log(arr.join(' - '));
