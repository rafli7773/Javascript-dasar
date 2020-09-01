var item=prompt('Masukkan Makanan\n(cth:nasi,daging,susu,gorengan,softdrink)');

switch (item) {
	case 'nasi':
	case 'daging':
	case 'susu':{
		alert('Makanan/Minuman Sehat');
		break;
	}
	case'gorengan':
	case 'softdrink':{
		alert('Makanan/Minuman tidak Sehat');
	}
}