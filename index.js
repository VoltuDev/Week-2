const selectMenu = document.querySelector('#colors');
const btnGetResult = document.querySelector('button');
const resultArea = document.querySelector('.result');
const resultContainer = document.querySelector('.result-container');

btnGetResult.addEventListener('click', () => {

    const userChoice = selectMenu.options[selectMenu.selectedIndex].value;
    let resultText = "";

    switch(userChoice) {
            case 'red':
                resultText = 'You exude passion and intensity, with a fiery spirit that lights up any room.';
                break;
            case 'green': 
                resultText = 'You possess an innate ability to nurture growth and cultivate positive change wherever you go.';
                break;
            case 'yellow':
                resultText = 'Your vibrant energy and unwavering optimism radiate, inspiring those around you to embrace joy.';
                break;
            case 'black':
                resultText = 'You navigate the depths of complexity with unwavering strength and a keen sense of self-assurance.';
                break;
            case 'pink': 
                resultText = 'Your charm and infectious enthusiasm create an atmosphere of joy and warmth wherever you roam.';
                break;
            case 'blue':
                resultText = 'You delve into the depths of the unknown, seeking wisdom and understanding in the mysteries of life.';
                break;
            default:
                resultText = 'You are a mystical enigma, traversing realms of the unknown with an aura of intrigue.';
                break;
        }
    

    if(userChoice === 'other') {
        resultContainer.style.backgroundColor = '#777';
    } else {
        resultContainer.style.backgroundColor = userChoice;
    }
     
    resultArea.innerHTML = resultText;

});
