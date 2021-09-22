//declaracion de variables
const shareButton = document.querySelector('.share-button');
const shareOptions = document.querySelector('.share-options');
const fb = document.getElementById('facebook');
const tw = document.getElementById('twitter');
const pin = document.getElementById('pinterest');
const otherShareButton = document.querySelector('.share-button2')
let contador = 0;

//declaro una funcion para cuando se clickee el boton se abran las opciones para compartir, 
//y cuando se vuelva a tocar ese boton, se cierren las opciones para compartir.
function change(){
	if (contador == 0) {
		shareOptions.style.visibility = 'visible';
		contador = 1;
	} else {
		shareOptions.style.visibility = 'hidden';
		contador = 0;
	}
}

//escucha cuando se hace click en el boton share
shareButton.addEventListener('click',change,true);


//escucha cuando se hace click en los botones sociales y cierra el boton share
fb.addEventListener('click', ()=>{
	window.open('https://www.facebook.com/');
	change();
});

tw.addEventListener('click', ()=>{
	window.open('https://twitter.com/');
	change();
});

pin.addEventListener('click', ()=>{
	window.open('https://ar.pinterest.com/');
	change();
});

//si clickea en el otro boton share, se cierran los botones sociales en menor res
otherShareButton.addEventListener('click', ()=>{
	change();
})