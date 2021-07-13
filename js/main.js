document.addEventListener('DOMContentLoaded', () => {
    //cards options
    const cardArray = [{
            name: 'Bellia',
            img: 'imgs/Bellia.jpg'
        },
        {
            name: 'Bellia',
            img: 'imgs/Bellia.jpg'
        },
        {
            name: 'Azrael',
            img: 'imgs/azrael.jpg'
        },
        {
            name: 'Azrael',
            img: 'imgs/azrael.jpg'
        },
        {
            name: 'Belia',
            img: 'imgs/Belia.jpg'
        },
        {
            name: 'Belia',
            img: 'imgs/Belia.jpg'
        },
        {
            name: 'Jerico',
            img: 'imgs/jerico.jpg'
        },
        {
            name: 'Jerico',
            img: 'imgs/jerico.jpg'
        },
        {
            name: 'Nova',
            img: 'imgs/nova.jpg'
        },
        {
            name: 'Nova',
            img: 'imgs/nova.jpg'
        },
        {
            name: 'Millie',
            img: 'imgs/millie.jpg'
        },
        {
            name: 'Millie',
            img: 'imgs/millie.jpg'
        },
        {
            name: 'Vanellope',
            img: 'imgs/vanellope.jpg'
        },
        {
            name: 'Vanellope',
            img: 'imgs/vanellope.jpg'
        },
        {
            name: 'Maddy',
            img: 'imgs/Maddy.jpg'
        },
        {
            name: 'Maddy',
            img: 'imgs/Maddy.jpg'
        }
    ];

    cardArray.sort(() => 0.5 - Math.random());
    const grid = document.querySelector('.grid');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];
    var resultDisplay = document.querySelector('#result');
    //Create the board

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'imgs/cards.jpg');
            //card.setAttribute('src', cardArray[i].img);
            card.setAttribute('data-id', i);
            card.classList.add('card');
            card.addEventListener('click', flipcard);
            grid.appendChild(card);
        }

        resultDisplay.textContent = cardsWon.length + "/" + cardArray.length / 2;

    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        console.log(cardsChosen)
        if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', cardArray[optionOneId].img)
            cards[optionTwoId].setAttribute('src', cardArray[optionTwoId].img)
            cards[optionOneId].classList.add('paired');
            cards[optionTwoId].classList.add('paired');
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'imgs/cards.jpg')
            cards[optionTwoId].setAttribute('src', 'imgs/cards.jpg')
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length + "/" + cardArray.length / 2;
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = "Congratulations!!"
            createButtonPlayAgain();
        }
    }

    //flip card
    function flipcard() {
        var cardId = this.getAttribute('data-id');
        if (!this.classList.contains('paired')) {
            cardsChosen.push(cardArray[cardId].name);
            cardsChosenId.push(cardId);
            this.setAttribute('src', cardArray[cardId].img);
            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500);
            }
        }

        console.log(cardsWon)
    }

    //Play again
    function createButtonPlayAgain() {
        var button = document.createElement('button');
        button.classList.add('btn-win');
        button.innerHTML = 'Play again';
        button.onclick = function() {
            reload();
        };
        document.querySelector('.principal h2').appendChild(button);
    }

    function reload() {
        location.reload();
    }

    //Init
    createBoard();

});