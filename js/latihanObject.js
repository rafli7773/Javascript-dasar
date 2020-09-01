function Angkot(nama,trayek,penumpang,kas){
	this.nama=nama;
	this.trayek=trayek;
	this.penumpang=penumpang;
	this.kas=kas;

	this.penumpangNaik=function(namapenumpang){
		this.penumpang.push(namapenumpang);
		return this.penumpang;
	}
	this.penumpangTurun=function(namapenumpang,bayar){
		if(this.penumpang.length===0){
			alert('Penumpang Masih Kosong');
			return false;
		}
		for(var i=0;i< this.penumpang.length;i++){
			if  (this.penumpang[i]==namapenumpang){
				this.penumpang[i]= undefined;
				this.kas+=bayar;
				return this.penumpang;
			}
		}
	}

}
var angkot1=new Angkot('Cak Budi',['Sembayat','GKB'],[],0);

var angkot2 = new Angkot('Wak Ri',['Dukun','Gub Suryo'],[],0);