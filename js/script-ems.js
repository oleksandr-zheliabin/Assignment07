// CREATE AN ARRAY OF EMPLOYEES

let employees = [
    [12345678, 'Luke Skywalker', 1234, 'lsky@tatooine.com', 'QA'],
    [66666666, 'Darth Vader', 6666, 'dvader@deathstar.com', 'Executive'],
    [22334455, 'Obi-Wan Kenobi', 5431, 'obi@jedi.com', 'Administrative'],
    [98765432, 'Han Solo', 4477, 'solo@falcon.com', 'Sales'],
    [22002200, 'Chewbacca', 2200, 'chewie@falcon.com', 'Engineering']
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY

if (localStorage.getItem('employees') !== null) {

    employees = JSON.parse(localStorage.getItem('employees'))            
}

// GET DOM ELEMENTS

let form = document.getElementById('addForm')
let table = document.getElementById('empTable')
let empCount = document.getElementById('empCount')

// HELPER FUNCTION TO RETURN DOM ELEMENT
const $ = (id) => document.getElementById(id)

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS

buildGrid(employees)


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES

    let empId           = $('id').value
    let name            = $('name').value
    let ext             = $('extension').value
    let email           = $('email').value
    let department      = $('department').value

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT

    let employee = [empId, name, ext, email, department]

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY

    employees.push(employee)

    // BUILD THE GRID

    buildGrid(employees)

    // RESET THE FORM

    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX

    let id = $('id').focus()

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {

    if (e.target.classList.contains('delete')) {

    // CONFIRM THE DELETE

    if (confirm('Are you sure you want to delete this record?')) {

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

        row = e.target.parentElement.parentElement.rowIndex

        // REMOVE EMPLOYEE FROM ARRAY

        employees.splice(row - 1, 1)

        // BUILD THE GRID

        buildGrid(employees)

    }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid(employees) {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

    table.lastElementChild.remove()

    // REBUILD THE TBODY FROM SCRATCH

    let tbody = document.createElement('tbody')

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE

    for (let employee of employees) {
        tbody.innerHTML += 
        `
            <tr>
                <td>${employee[0]}</td>
                <td>${employee[1]}</td>
                <td>${employee[2]}</td>
                <td>${employee[3]}</td>
                <td>${employee[4]}</td>
                <td><button class='btn btn-danger btn-sm float-end delete'></button></td>
            </tr>
        `
    }

    // BIND THE TBODY TO THE EMPLOYEE TABLE

    table.appendChild(tbody)

    // UPDATE EMPLOYEE COUNT

    empCount.value = '(' + employees.length + ')'

    // STORE THE ARRAY IN STORAGE

    localStorage.setItem('employees', JSON.stringify(employees))

}