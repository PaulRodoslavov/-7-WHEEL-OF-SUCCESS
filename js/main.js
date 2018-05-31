
// Variables

const start = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let count = 0;
const keyrow = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const ul = document.querySelector('.section ul');
const arrPhrases = [
	'The Shawshank Redemption',
	'The Godfather',
	'The Dark Knight',
	'The Lord of the Ring',
	'Pulp Fiction'
];	

// Getting random phrase from arr

const randomPhrases = arrPhrases[Math.floor(Math.random() * arrPhrases.length)];
const splitedPhrase = randomPhrases.split('');

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


function presKey(keyrow){   // Main function


	// Adds event to every buttons

	keyrow.addEventListener('click', (e)=>{	
		let letterFound = 0;
		let liInPrase = phrase.querySelectorAll('.letter');	
		let img = document.querySelectorAll('img');
		if (e.target.tagName == "BUTTON"){			
			e.target.disabled = true;				
			for (var i = 0; i < liInPrase.length; i++){	

	// Checks matching guess and show wrong or right		

				if (e.target.textContent.toLowerCase() == liInPrase[i].textContent.toLowerCase()){
					liInPrase[i].className += ' show';
					e.target.className = 'right';
					letterFound = e.target.textContent;
				}								
				else if(e.target.className !=='right'){
					e.target.className = 'wrong';					
				}	
			}	

	// Checks user won or lost

			if (phrase.querySelectorAll('.show').length ==	liInPrase.length){
					overlay.style.display = "flex";
					overlay.className = 'win';
					start.textContent = 'Start Again'
				}
			else if (count == img.length) {
				overlay.style.display = "flex";
				overlay.className = 'lose';
				start.textContent = 'Start Again'
			}

	// Shows quantity tries

			else if (!letterFound && count <= img.length){
				const img = document.getElementsByTagName('img');
				count++;
  				img[count - 1].src = 'images/lostHeart.png'; 
			}		
		}	
	});

};



// Starts and restarts game

start.addEventListener('click', (e) => {
		if (start.textContent == 'Start Again'){
			document.location.reload(true);		
		}
		else{
			overlay.style.display = 'none';
			addPhraseToDisplay(splitedPhrase);
			presKey(keyrow);
		}
	});

	

	