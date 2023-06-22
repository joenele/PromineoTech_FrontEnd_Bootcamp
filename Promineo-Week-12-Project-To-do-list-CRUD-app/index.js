var createInput = document.getElementById("createInput"); // input input label
var createButton = document.getElementById("createButton"); // create button
var updateTaskInput = document.getElementById("updateTaskInput"); // update input label
var updateIdInput = document.getElementById("updateIdInput"); // update id input label
var updateButton = document.getElementById("updateButton"); // update button
var deleteInput = document.getElementById("deleteInput"); // delete input label
var deleteButton = document.getElementById("deleteButton"); // read input label
var readButton = document.getElementById("readButton"); // read button
var Tasks = document.getElementById("Tasks"); // task table body
var error = document.querySelector(".error")

// EVENT LISTENERS FOR DELETE, UPDATE, CREATE AND READ BUTTONS
deleteButton.addEventListener("click", () => deleteTask(deleteInput.value));
updateButton.addEventListener("click", () =>
  updateTask(updateIdInput.value, updateTaskInput.value)
);
createButton.addEventListener("click", () => addTask(createInput.value));
readButton.addEventListener("click", getTasks);

// API URL FOR TO DO LIST HOSTED ON MOCKAPI.IO
var apiURL =
  "https://640bfa7b94ce1239b0a336f2.mockapi.io/todoList";


// READ FUNCTION - fetches data from api, then displays data in console and DOM
function getTasks() {
  fetch(apiURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // returns response in json format
    })
    .then((data) => {
      console.log(data);
      tasks.innerHTML = ""; // clears table to prevent tasks from repeating

      for (var i = 0; i < data.length; i++) { // Loops through task elements in API
        var task = data[i].task;
        var id = data[i].id;
        var newRow = document.createElement("tr"); // creates a new row for each task
        newRow.innerHTML = `<td><input class="form-check-input" type="checkbox" value="">${task}</td> 
        <td>${id}</input></td> 
        `; // new row with task name and ID
        tasks.appendChild(newRow); // appends the new row to the table body with 'tasks' id
      }
    })
    .catch((error) => {
      console.error("Error fetching tasks:", error);
      tasks.innerHTML = "An error occurred while fetching tasks. Please try again later.";
    });
}



// CREATE FUNCTION - fetches data from api, then adds new task to the data
function addTask(newTask) {  
  if (!newTask) { // checks if Task is entered
    error = "Error: Please enter a task"
  alert(error); // alerts error if task input is empty
  return;
  }

  fetch(apiURL, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: 'POST', // POST method instead of GET to send data to the API
    body: JSON.stringify({task: newTask}) // converts JS string to JSON task
  })
  .then(response => response.json()) // extract json data from response
  .then(data => console.log(data)) // logs response data to console

  createInput.value = ""; // clears CREATE input label
}

//DELETE FUNCTION - fetches data from the api, then removes a task from that data
function deleteTask(existingID) {
  fetch(apiURL + "/" + existingID, {
    method: "DELETE", // DELETE method removes data from the API
  })
  .then(response => {
    if (!response.ok) { // check if response is not ok
      throw new Error("ID not found"); // throw an error
    }
    console.log(response); // log response if successful
  })
  .then(() => {
    deleteInput.value = ""; // clear input label
  })
  .catch(error => {
    console.error(error); // handles error in console
    alert(error)// alerts message to the user
  });
}



// UPDATE FUNCTION - fetches data from the api, then updates the data with an existing ID
function updateTask(existingID, updatedTask) {
  fetch(apiURL + "/" + existingID, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: "PUT", // PUT method updates the existing source
    body: JSON.stringify({ task: updatedTask }), // converts updated JS task string to JSON task
  })
  .then(response => {
    if (!response.ok) { // checks if response has an error
      var error='Error: Task not found.'
      alert(error); // alerts task not found as error
      throw new Error('Error updating task. Task not found.');
    }
    return response.json(); // returns response in json format
  })
  .then(data => console.log(data)) // logs response data to console
  .catch(error => console.error(error)); // handles error in console
  
  updateTaskInput.value = ""; // clears TASK input label
  updateIdInput.value = ""; // clears ID input label
}
