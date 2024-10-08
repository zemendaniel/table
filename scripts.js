const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]
const table = document.createElement('table');
const tableheader = document.createElement('thead');
table.appendChild(tableheader);
const tableheaderRow = document.createElement('tr');
tableheader.appendChild(tableheaderRow);
const lastname = document.createElement('th');
lastname.innerHTML = "Keresztnév";
const firstname = document.createElement('th');
firstname.innerHTML = "Vezetéknév";
const married = document.createElement('th');
married.innerHTML = 'Házas-e?';
const pet = document.createElement('th');
pet.innerHTML = 'Háziállat';
tableheaderRow.appendChild(firstname);
tableheaderRow.appendChild(lastname);
tableheaderRow.appendChild(married);
tableheaderRow.appendChild(pet);
document.body.appendChild(table);
const tbody = document.createElement('tbody');
table.appendChild(tbody);

function handleSelect(e) {

    const classList = e.currentTarget.classList;
    if (classList.contains('selected')) {
        classList.remove('selected');
    }
    else {
        const row = document.querySelector('.selected');
        if (row) {
            row.classList.remove('selected');
        }    
        classList.add('selected');
    }
    
}

function updateTable() {
    tbody.innerHTML = "";
    for (person of array) {
        const row = document.createElement('tr');
        const fn = document.createElement('td');
        fn.innerHTML = person.firstname1
        if (person.firstname2){
            fn.innerHTML += " " + person.firstname2;
        }
        const ln = document.createElement('td');
        ln.innerHTML = person.lastname;
        row.appendChild(ln);
        row.appendChild(fn);
        
        const married = document.createElement('td');
        married.innerHTML = person.married ? "igen" : 'nem';
        const pet = document.createElement('td');
        pet.innerHTML = person.pet ? person.pet : 'nincs';

        row.appendChild(married);
        row.appendChild(pet);
        row.addEventListener('click', handleSelect);
        tbody.appendChild(row);
    }
}

updateTable();

const form = document.getElementById('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const person = {
        firstname1: document.getElementById('firstname1').value,
        firstname2: document.getElementById('firstname2').value,
        lastname: document.getElementById('lastname').value,
        married: document.getElementById('married').checked,
        pet: document.getElementById('pet').value,
    };
    
    array.push(person);
    updateTable();
    form.reset();
})