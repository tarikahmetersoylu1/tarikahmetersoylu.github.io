
$(document).ready(function(){
	$("#HeaderMenuAcmaButonuAlani").on("click", function(){
		$("#HeaderMenuAcmaButonuMenuSinirlamaAlani").slideToggle("slow");
	});
	$(".AltMenuAc").on("click", function(){
		$("#HeaderMenuAcmaButonuMenuSinirlamaAltAlani").slideToggle("slow");
	});

	/* MAIN VE FOOTER ALANI İÇİN ÜSTTEN BOŞLUK HESAPLAMALARI >>>>> */
	var DokumanGenisligi		=	$(window).outerWidth();
	
	if(!$("#HeaderAlani").length){
	   if(DokumanGenisligi>=1200){ /* XL */
		  var OsfetDegeri		=	75;
	   }else if((DokumanGenisligi>=992) && (DokumanGenisligi<=1199)){ /* L */
		  var OsfetDegeri		=	65;
	   }else if((DokumanGenisligi>=768) && (DokumanGenisligi<=991)){ /* M */
		  var OsfetDegeri		=	55;
	   }else if((DokumanGenisligi>=576) && (DokumanGenisligi<=767)){ /* S */
		  var OsfetDegeri		=	45;
	   }else{ /* XL */
		  var OsfetDegeri		=	45;
	   }
	}
	
	$("main").css("top", OsfetDegeri);
	$("footer").css("top", OsfetDegeri);
	
	$(window).resize(function(){
		var DokumanGenisligi		=	$(window).outerWidth();

		if(!$("#HeaderMesajAlani").length){
		   if(DokumanGenisligi>=1200){ /* XL */
			  var OsfetDegeri		=	75;
		   }else if((DokumanGenisligi>=992) && (DokumanGenisligi<=1199)){ /* L */
			  var OsfetDegeri		=	65;
		   }else if((DokumanGenisligi>=768) && (DokumanGenisligi<=991)){ /* M */
			  var OsfetDegeri		=	55;
		   }else if((DokumanGenisligi>=576) && (DokumanGenisligi<=767)){ /* S */
			  var OsfetDegeri		=	45;
		   }else{ /* XL */
			  var OsfetDegeri		=	45;
		   }
		}
		$("main").css("top", OsfetDegeri);
		$("footer").css("top", OsfetDegeri);
	});
	/* SLAYT ALANI >>>>> */
	$(function(){
		var SlaytElementi					=	$(".SlaytAlaniKapsayicisi");
		var SlaytListeOlusturmaElementi		=	SlaytElementi.find(".SlaytAlaniResimleri");
		var	SlaytListesiUzunlugu			=	SlaytListeOlusturmaElementi.find(".SlaytResmi").length;
		var	SlaytIcinDokumanGenisligi		=	SlaytElementi.outerWidth();
		var	ToplamGenislik					=	SlaytListesiUzunlugu * SlaytIcinDokumanGenisligi;
		var	ResimSirasi						=	0;
		var	KayacakAlan						=	0;
		
		SlaytListeOlusturmaElementi.find(".SlaytResmi").width(SlaytIcinDokumanGenisligi).end().width(ToplamGenislik);

			$(window).resize(function(){
				SlaytElementi					=	$(".SlaytAlaniKapsayicisi");
				SlaytListeOlusturmaElementi		=	SlaytElementi.find(".SlaytAlaniResimleri");
				SlaytListesiUzunlugu			=	SlaytListeOlusturmaElementi.find(".SlaytResmi").length;
				SlaytIcinDokumanGenisligi		=	SlaytElementi.outerWidth();
				ToplamGenislik					=	SlaytListesiUzunlugu * SlaytIcinDokumanGenisligi;
				
				SlaytListeOlusturmaElementi.find(".SlaytResmi").width(SlaytIcinDokumanGenisligi).end().width(ToplamGenislik).css("margin-left", "-" + (ResimSirasi * SlaytIcinDokumanGenisligi) + "px");
		});

		$.OtomatikDegistir			=	function(){
			if(ResimSirasi < SlaytListesiUzunlugu - 1){
			   ResimSirasi++;
			   KayacakAlan			=	"-" + (ResimSirasi * SlaytIcinDokumanGenisligi) + "px";
			}else{
				ResimSirasi			=	0;
				KayacakAlan			=	0;
			}
			
			SlaytListeOlusturmaElementi.stop().animate({
				marginLeft:KayacakAlan
			}, 500, function(){
				SlaytElementi					=	$(".SlaytAlaniKapsayicisi");
				SlaytListeOlusturmaElementi		=	SlaytElementi.find(".SlaytAlaniResimleri");
				SlaytListesiUzunlugu			=	SlaytListeOlusturmaElementi.find(".SlaytResmi").length;
				SlaytIcinDokumanGenisligi		=	SlaytElementi.outerWidth();
				ToplamGenislik					=	SlaytListesiUzunlugu * SlaytIcinDokumanGenisligi;
				
				SlaytListeOlusturmaElementi.find(".SlaytResmi").width(SlaytIcinDokumanGenisligi).end().width(ToplamGenislik).css("margin-left", "-" + (ResimSirasi * SlaytIcinDokumanGenisligi) + "px");
			});
		}
		
		var	SlaytOynat		=	setInterval("$.OtomatikDegistir()", 3000);
	});
	
});





function yukariCık(){

	document.location.href	=	"#top";
}
function yukariOkKontrol(){
	var deger	=	window.scrollY;
	if(deger !== 0){
		document.getElementById("YukariOku").style.display	=	"block";
	}else{
		document.getElementById("YukariOku").style.display	=	"none";
	}
}








function modalAc(deger){
	if( deger === 1 ){
		document.getElementsByClassName("modal")[0].style.display	=	"block";
	}else if( deger === 2 ){
		document.getElementsByClassName("modal")[1].style.display	=	"block";
	}else{
		document.getElementsByClassName("modal")[2].style.display	=	"block";
	}
	
}
function modalKapat(deger){
	if( deger === 1){
		document.getElementsByClassName("modal")[0].style.display	=	"none";
		var frame	=	document.getElementById("video1");
		video.pause();
		video.currentTime	=	0;
	}else if( deger === 2){
		document.getElementsByClassName("modal")[1].style.display	=	"none";
		var video	=	document.getElementById("video2");
		video.pause();
		video.currentTime	=	0;
	}else{
		document.getElementsByClassName("modal")[2].style.display	=	"none";
		var video	=	document.getElementById("video3");
		video.pause();
		video.currentTime	=	0;
	}
}









function duyuruAc(deger){
	if( deger === 1 ){
		document.getElementsByClassName("DuyuruModal")[0].style.display	=	"block";
	}else if( deger === 2 ){
		document.getElementsByClassName("DuyuruModal")[1].style.display	=	"block";
	}else{
		document.getElementsByClassName("DuyuruModal")[2].style.display	=	"block";
	}
}

function duyuruKapat(deger){
	if( deger === 1){
		document.getElementsByClassName("DuyuruModal")[0].style.display	=	"none";
	}else if( deger === 2){
		document.getElementsByClassName("DuyuruModal")[1].style.display	=	"none";
	}else{
		document.getElementsByClassName("DuyuruModal")[2].style.display	=	"none";
	}
}






function duzenleButonu(){
	var metin	=	document.getElementById("TamSayfaCerceveAlaniIciGenelBilgilendirmeMetniAlani");
	var buton	=	document.getElementById("Duzenle");
	var resim	=	document.getElementById("CvResim");

	if(buton.textContent			==	"Duzenle"){
		buton.textContent			=	"Kaydet";
		metin.contentEditable		=	"true";
		metin.style.backgroundColor	=	"rgba(128, 128, 128, 0.1)";
	}
	else{
		buton.textContent	=	"Duzenle";
		metin.contentEditable	=	"false";
		metin.style.backgroundColor	=	"#fff";
	}
}
function indirButonu(){
		
		var pdf = new jsPDF('p', 'pt', 'letter');
		source = $('#OzgecmisTablo')[0];
		specialElementHandlers = {
			'#bypassme': function(element, renderer) {
				return true
			}
		};
		margins = {
			top: 80,
			bottom: 60,
			left: 40,
			width: 522,
		};

		pdf.fromHTML(
				source, 
				margins.left, 
				margins.top, {
					'width': margins.width, 
					'elementHandlers': specialElementHandlers
				},
		function(dispose) {
			pdf.save('Test.pdf');
		}
		, margins);
	
	}

