
// Variables

const start = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let count = 0;
const keyrow = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const ul = document.querySelector('.section ul');
let phraseInDisplay = document.getElementsByClassName('letter');
const img = document.querySelectorAll('img');
const arrPhrases = [
	'The Shawshank Redemption',
	'The Godfather',
	'The Dark Knight',
	'The Lord of the Ring',
	'Pulp Fiction'
];	

// Getting random phrase from array

const splitedPhrase = arrPhrases[Math.floor(Math.random() * arrPhrases.length)].split('');

// Adding random phrase to display by creating li

function addPhraseToDisplay(item){
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

// Applying styles after finish game

function stylesAfterFinish (){
	overlay.style.display = "flex";					
	start.textContent = 'Start Again';
	phrase.style.display = "none";
}

// Starts and restarts game

start.addEventListener('click', (e) => {
		if (start.textContent == 'Start Again'){
			document.location.reload(true);		
		}
		else{
			overlay.style.display = 'none';
			addPhraseToDisplay(splitedPhrase);			
		}
	});
	
// Adds event to every buttons key

keyrow.addEventListener('click', (e)=>{	
	let letterFound = 0	
	if (e.target.tagName == "BUTTON"){		// If button - go
		e.target.disabled = true;				
		for (var i = 0; i < phraseInDisplay.length; i++){	

// Checks matching guess and shows wrong or right 

			if (e.target.textContent.toLowerCase() == phraseInDisplay[i].textContent.toLowerCase()){
				phraseInDisplay[i].className += ' show';
				e.target.className = 'right';
				letterFound = e.target.textContent;
			}								
			else if(e.target.className !=='right'){
				e.target.className = 'wrong';					
			}	
		}	

// Shows quantity tries

		if (!letterFound && count <= img.length){				
			count++;
				img[count - 1].src = 'images/lostHeart.png'; 
		}

// Checks user won or lost

		if (phrase.querySelectorAll('.show').length ==	phraseInDisplay.length){
				overlay.className = 'win';
				stylesAfterFinish ();		// Applying styles				
			}
		else if (count == img.length) {
		 	overlay.className = 'lose';
			stylesAfterFinish ();		// Applying styles 		
		}		
	}	
});

