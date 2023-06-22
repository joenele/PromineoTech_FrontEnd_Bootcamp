let paragraphId = 0;

document.getElementById('p-button').addEventListener('click', ()=> {

    // Locate the parent 
    var parent = document.getElementById('p-div');

    // create a new element
    var newElement = document.createElement('p');
    newElement.innerHTML = document.getElementById('p-input').value;

    // attach to the parent
    parent.appendChild(newElement);

    // clear out the input box after adding the element
    document.getElementById('p-input').value = '';
})