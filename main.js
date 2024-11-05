// all elements to be used
const inputField = document.getElementById('input-field');
const addButton = document.querySelector('button');
const listContainer = document.getElementById('list-container');
const listItem = document.getElementById('li');

//add button functionality 
const addTask = () => {
    if(inputField.value === '') {
        alert('Please enter a task'); //alerts user to enter a value
    } else {
        //creating new list element
        let task = document.createElement('li');
        task.innerHTML = inputField.value;

        //creating and adding 'x' to task element
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        task.appendChild(span);

        //adding li to the container
        listContainer.appendChild(task);

        //saving data
        saveData();

    }

    //clearing input field
    inputField.value = '';
};

//adding checked functionality 
listContainer.addEventListener('click', function(e){
    //will check or remove task 
    if (e.target.tagName === 'LI'){             
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN')  {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//saving data in browser
const saveData = () => {
    localStorage.setItem('data', listContainer.innerHTML);
}

//displaing data
const showData = () => {
    listContainer.innerHTML = localStorage.getItem('data');
}

showData();   // function call




