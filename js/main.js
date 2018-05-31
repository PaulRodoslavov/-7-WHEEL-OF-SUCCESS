
const start = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let count = 0;
const keyrow = document.querySelector('#qwerty');
// const button = keyrow.querySelectorAll('button');
// console.log(button);
const phrase = document.querySelector('#phrase');
const ul = document.querySelector('.section ul');
const arrPhrases = [
	'The Shawshank Redemption',
	'The Godfather',
	'The Dark Knight',
	'The Lord of the Ring',
	'Pulp Fiction'
];	
const randomPhrases = arrPhrases[Math.floor(Math.random() * arrPhrases.length)];
const splitedPhrase = randomPhrases.split('');


function addPhraseToDispla(item){
	let li = document.createElement('LI');

	for (let i = 0; i < item.length; i++){
		let li = document.createElement('LI');		
		li.textContent = item[i];
		ul.appendChild(li);
		if (item[i] == ' '){
			li.className = 'space';
		}	else {
			li.className = 'letter';
		}		
	}	
}


function presKey(keyrow){
	keyrow.addEventListener('click', (e)=>{	
		let img = document.querySelectorAll('img');		
		if (e.target.tagName == "BUTTON"){			
			e.target.disabled = true;
			let letterFound = 0;
			let liInPrase = phrase.querySelectorAll('.letter');		
				for (var i = 0; i < liInPrase.length; i++){				
					if (e.target.textContent.toLowerCase() == liInPrase[i].textContent.toLowerCase()){
						liInPrase[i].className += ' show';
						e.target.className = 'right';
						letterFound = e.target.textContent;
	      				console.log(letterFound);	
					}								
					else if(e.target.className !=='right'){
						e.target.className = 'wrong';					
					}				
				}	
				if (count == img.length) {
					overlay.style.display = "flex";
					overlay.className = 'lose';
					start.textContent = 'Start Again'
				}
				else if (!letterFound && count <= img.length){
					const img = document.getElementsByTagName('img');
					count++;
	  				img[count - 1].src = 'images/lostHeart.png'; 
				}			
		}	
	});
};





	start.addEventListener('click', () => {
		if (start.textContent == 'Start Again'){
			document.location.reload(true);		
		}
		else{
			overlay.style.display = 'none';
			addPhraseToDispla(splitedPhrase);
			presKey(keyrow);
		}		

	});


// 	$('.btn__reset').on('click', (e)=>{
// 	$('#overlay').hide();
// 	addPhraseToDispla(splitedPhrase);
// 	presKey(keyrow);
// });