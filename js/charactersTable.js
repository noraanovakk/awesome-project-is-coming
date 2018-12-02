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
    tableRow += `<tr class="tableLine${i}" class="main__character__table__tr">
                  <td class="main__characters__table__td">${alias}</td>
                  <td class="main__characters__table__td"><img src="${gameOfThronesCharacters[i].portrait}" alt="portrait"></td>
                  <td class="main__characters__table__td">${house}</td>
                  <td class="main__characters__table__td">${organization}</td>
                  <td class="tableBox${i}" class="main__characters__table__td">${gameOfThronesCharacters[i].bio}</td>
                  <td class="main__characters__table__td"><input type="button" value="törlés" onclick="document.querySelector('.tableLine${i}').style.display = 'none'"></td>
                  <td class="main__characters__table__td"><input type="button" value="módosítás" onclick="document.querySelector('.tableBox${i}').contentEditable = true"></td>
                </tr>`;
  }

  characerTablesElement.innerHTML = tableRow;
}
characters();