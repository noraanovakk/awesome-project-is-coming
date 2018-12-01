function selectCharactersPortraitsAndNames(){
var characters ='';
for (i=0; i < gameOfThronesCharacters.length; i += 1){  
   characters += `
    <div class="main_myCharacters">
        <img src="${gameOfThronesCharacters[i].portrait}">
        <p>${gameOfThronesCharacters[i].name}</p>
    </div>
   `
}
document.querySelector('.myCharacters').innerHTML = characters;
}
selectCharactersPortraitsAndNames();