function characters() {
  var characerTablesElement = document.querySelector('#character');
  var tableRow;
  for ( var i = 0; i < gameOfThronesCharacters.length; i += 1) {
    var alias;
    if (gameOfThronesCharacters[i].alias) {
      alias = (`${gameOfThronesCharacters[i].name} \n alias: \n ${gameOfThronesCharacters[i].alias}`);
    } else {
      alias = (`${gameOfThronesCharacters[i].name}`);
    }
    var house;
    if (gameOfThronesCharacters[i].house) {
      house = (`<img src="/img/houses/${gameOfThronesCharacters[i].house}.png" alt="housePicture"> ${gameOfThronesCharacters[i].house}`);
    } else {
      house = '';
    }
    var organization;
    if (gameOfThronesCharacters[i].organization) {
      organization = (`${gameOfThronesCharacters[i].organization}`);
    } else {
      organization = '';
    }
    tableRow += `<tr>
                  <td>${alias}</td>
                  <td><img src="${gameOfThronesCharacters[i].portrait}" alt="portrait"></td>
                  <td>${house}</td>
                  <td>${organization}</td>
                  <td>${gameOfThronesCharacters[i].bio}</td>
                  <td><input type="button" value="törlés" onclick="deleteLine()"></td>
                  <td><input type="button" value="módosítás" onclick="changeBio"></td>
                </tr>`;
  }
  characerTablesElement.innerHTML = tableRow;
}

characters();
