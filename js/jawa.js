//pilih player
var tanya=true;
while(tanya){
	var player=prompt('Pilih!\nContoh:Gajah ,Semut ,Orang');
	//menangkap pilihan komputer
	// membangkitkan bilangan random
	var comp=Math.random();
	console.log(comp);
	if(comp>=0.34){
		comp='gajah'
	}
	else if(comp >= 0.34 && comp <0.66){
		comp='semut'
	}
	else{
		comp='orang';
	}
	console.log(comp);
	//menentukan rules
	var hasil='';
	if(player==comp){
		hasil='Seri!';
	}
	else if(player=='gajah'){
	// 	if(comp == Semut){
	// 		hasil='Kalah!';
	// 	}
	// 	else{
	// 		hasil='Menang';
	// 	}
	hasil=(comp=='orang')?'Menang!':'Kalah!';
	}
	else if(player=='semut'){
		hasil=(comp=='gajah')?'Kalah!':'Menang!';
	}
	else if(player =='orang'){
		hasil=(comp == 'semut')?'Menang!':'Kalah!';
	}
	else{
		alert('Yang Anda pilih tidak ada');
	}
	//hasil
	alert('Kamu Memilih: ' +player+' dan Computer Memilih: ' +comp+' \nMaka Hasilnya Kamu: ' +hasil);
	tanya=confirm('Lagi?');
}
alert('Terima Kasih');