const formDomEl = document.querySelector('form')
const fieldDomEl = document.querySelector('.field')

formDomEl.addEventListener('submit', function (ev) {

  ev.preventDefault()
  //console.log('hey there');
  //console.log(ev);
  let limit = 100
  //clear the dom element
  fieldDomEl.innerHTML = ''

  // Generate battle field
  //genererà una griglia di gioco quadrata.
 generateBattleField(limit, fieldDomEl)


})



/**
 * Generates the battle filed give a cells limit and a dom element
 * @param {number} limit the max amount of cells to create
 * @param {object} fieldDomEl Dom element where insert the cells
 */
function generateBattleField(limit, fieldDomEl) {
  // Generate battle field
  //genererà una griglia di gioco quadrata.
  for (let i = 0; i < limit; i++) {


    // generate the field cell
    //Ogni cella ha un numero progressivo, da 1 a 100.
    const cellMarkupEl = generateCell(i + 1, 'div', 'cell', limit)


    // append to the dom element
    fieldDomEl.append(cellMarkupEl)

  }

}


/**
 * 
 * @param {*} numb The number to insert into the cell
 * @param {string} el the html element tag name to create
 * @param {string} css_class the css class name to appy to the cell
 * @returns {Object}
 */
function generateCell(numb, el, css_class, limit) {

  
  // generate the field cell
  //Ogni cella ha un numero progressivo, da 1 a 100.
  const cellMarkupEl = document.createElement(el)
  cellMarkupEl.append(numb)
  cellMarkupEl.classList.add(css_class)
  cellMarkupEl.style.width = `calc(100% / ${Math.sqrt(limit)})`

  //Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
  cellMarkupEl.addEventListener('click', function(ev){
   
    this.classList.toggle('bg-blue')
    console.log(this.innerText);

    
  })



  return cellMarkupEl



}


/*Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. */ 


// genero 16 numeri
const bombNumber = Math.floor(Math.random() * 16 + 1 )
console.log(bombNumber);

const bombs = [bombNumber]
console.log(bombs);

// let cellBombs = cellMarkupEl += bombs
// console.log(cellBombs);



// generatore di 16 numeri casuali
for (let i = 0; i < 16 ; i++) {
    const arraybomb = [(Math.floor(Math.random() * 100 )) ];
    console.log(arraybomb); 


 
   
}



   // arraybomb.addEventListener('click', function(){
    //     this.classList.toggle("bg-red")
    //     console.log(this.innerText);
    // })