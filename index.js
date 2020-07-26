let coinFlipButton = document.getElementById('coinFlipButton');
let outcome = document.querySelector('.outcome');
let tossCount = 0;

if(localStorage.tossCount){
  tossCount = parseInt(localStorage.tossCount);
  if(tossCount > 4) {
    document.getElementById("resourceLink").style.display = 'block';
  }
}

const getClickHandler = bool => {
  return function() {
    const randomNumber = bool;
    outcome.textContent = '';
    outcome.classList.toggle('flip');
    outcome.classList.add('toss');

    setTimeout(function() {
      if (randomNumber === 1) {
        outcome.innerHTML = '<img class="coin" src="./assets/heads.png"/>';
      } else if (randomNumber == 0) {
        outcome.innerHTML = '<img class="coin" src="./assets/tails.png"/>';
      }
      outcome.classList.remove('toss');
      tossCount++;
      localStorage.setItem("tossCount", tossCount);
      if(tossCount > 4) {
        document.getElementById("resourceLink").style.display = 'block';
      }
    }, 800);

  }
}

headsButton.addEventListener('click', getClickHandler(0));
tailsButton.addEventListener('click', getClickHandler(1));
