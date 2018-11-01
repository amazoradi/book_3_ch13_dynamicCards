// When the user enters in text into the text area and then clicks the create button, use a factory function that creates a new DOM component that has a border, and includes it's own delete button.
// Insert that new component into the DOM.
// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM.Not just made invisible, actually removed from the DOM.


// global vars
let createButton = document.getElementById("button-create")
let userText = document.getElementById("text-create")
let newCardArea = document.getElementById("createdCards")

// element creator function
function elementFactory(el, content, clazz, ID, ...children) {
  let element = document.createElement(el);
  element.innerHTML = content || null;
  element.classList.add(clazz || null)
  element.setAttribute("id", ID || null)
  children.forEach(child => {
    element.appendChild(child)
  })
  return element
}
// counter for the unique ids
countNumber = 0

// event listeners  event.detail
createButton.addEventListener("click", () => {
  countNumber += 1
  let newCard = elementFactory("p", userText.value)
  let cardButton = elementFactory("button", "Delete", "deleteButton", `button-${countNumber}`)
  let cardDiv = elementFactory('div', null, "newCardDiv", `div-${countNumber}`, newCard, cardButton)
  newCardArea.appendChild(cardDiv)
  userText.value = ""
  deleteIt(countNumber)
})

// function to delete cards based of the id. The unique counter/id is passed in as an arguement
function deleteIt(countNumber) {
  let deleteThis = document.querySelector(`#button-${countNumber}`)
  deleteThis.addEventListener("click", () => {
    let cardDivDelete = document.getElementById(`div-${countNumber}`)
    cardDivDelete.remove()
  })

}

