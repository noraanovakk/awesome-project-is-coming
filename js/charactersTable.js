var characerTablesElement = document.querySelector('#character');
var tableRow = `<tr>
                  <td>${gameOfThronesCharacters[0].name}</td>
                  <td><img src="${gameOfThronesCharacters[0].portrait}" alt="portrait"></td>
                  <td><img src="/img/house/${gameOfThronesCharacters[0].house}.png" alt="housePicture"></td>
                  <td>${gameOfThronesCharacters[0].house}</td>
                  <td>${gameOfThronesCharacters[0].bio}</td>
                  <td><input type="button" value="törlés" onclick="deleteLine()"></td>
                  <td><input type="button" value="módosítás" onclick="changeBio"></td>
                </tr>`;
for ( var i = 0; i < gameOfThronesCharacters.length; i += 1) {
  tableRow += `<tr>
                  <td>${gameOfThronesCharacters[i].name}</td>
                  <td><img src="${gameOfThronesCharacters[i].portrait}" alt="portrait"></td>
                  <td><img src="/img/house/${gameOfThronesCharacters[i].house}.png" alt="housePicture"></td>
                  <td>${gameOfThronesCharacters[i].house}</td>
                  <td>${gameOfThronesCharacters[i].bio}</td>
                  <td><input type="button" value="törlés" onclick="deleteLine()"></td>
                  <td><input type="button" value="módosítás" onclick="changeBio"></td>
                </tr>`;
}
characerTablesElement.innerHTML = tableRow;


