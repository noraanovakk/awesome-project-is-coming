function selectCharactersPortraits(){
    var allCharacters ='';
    for (i=0; i < gameOfThronesCharacters.length; i += 1){  
       allCharacters += `
        <div class="main_myAllCharacters">
            <img src="${gameOfThronesCharacters[i].picture}">
        </div>
       `
    }
    document.querySelector('.myAllCharacters').innerHTML = allCharacters;
    }
    selectCharactersPortraits();