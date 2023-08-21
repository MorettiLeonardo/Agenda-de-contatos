const form = document.getElementById('form-add-contact')
const numbers = []
let rows = ''

function addRow() {
    const inputNameContact = document.getElementById('name-contact')
    const inputNumberContact = document.getElementById('number-contact')


    let row = '<tr>'
    row += `<td>${inputNameContact.value}</td>`
    row += `<td>${inputNumberContact.value}</td>`
    row += '</tr>'
    rows += row

    inputNameContact.value = ''
    inputNumberContact.value = ''
}

function updateTable() {
    const tableBody = document.querySelector('tbody')
    tableBody.innerHTML = rows
}

form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    addRow()
    updateTable()
})