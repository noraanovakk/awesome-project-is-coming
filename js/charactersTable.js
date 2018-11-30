function characters() {
  var characerTablesElement = document.querySelector('#character');
  var tableRow;
  for ( var i = 0; i < gameOfThronesCharacters.length; i += 1) {
    tableRow += `<tr>
                  <td>${gameOfThronesCharacters[i].name}</td>
                  <td><img src="${gameOfThronesCharacters[i].portrait}" alt="portrait"></td>
                  <td><img src="/img/houses/${gameOfThronesCharacters[i].house}.png" alt="housePicture"> ${gameOfThronesCharacters[i].house}</td>
                  <td>${gameOfThronesCharacters[i].organization}</td>
                  <td>${gameOfThronesCharacters[i].bio}</td>
                  <td><input type="button" value="törlés" onclick="deleteLine()"></td>
                  <td><input type="button" value="módosítás" onclick="changeBio"></td>
                </tr>`;
  }
  characerTablesElement.innerHTML = tableRow;
}
characters();
