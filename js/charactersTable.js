var characerTablesElement = document.querySelector('#character');
var tableRow = `<tr>
                  <td>${gameOfThronesCharacters[0].name}</td>
                  <td>${gameOfThronesCharacters[0].portrait}</td>
                  <td><img src="/img/house/${gameOfThronesCharacters[0].house}.png" alt="housePicture"></td>
                  <td>${gameOfThronesCharacters[0].house}</td>
                  <td>${gameOfThronesCharacters[0].bio}</td>
                  <td><input type="button" value="törlés" onclick="deleteLine()"></td>
                  <td><input type="button" value="módosítás" onclick="changeBio"></td>
                </tr>`
;
