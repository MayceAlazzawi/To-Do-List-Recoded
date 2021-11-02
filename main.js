let inputBox = document.getElementById("inputValue");
let noTasks = document.getElementById('noTasks');

// Getting today's date
  n =  new Date();
  y = n.getFullYear();
  m = n.getMonth() + 1;
  d = n.getDate();
  document.getElementById("currentDate").innerHTML = m + "/" + d + "/" + y; 

  window.onload = inputBox.focus();  

  addTodoBtn.onclick = function addTask() { 
  let inputValue = document.getElementById("inputValue").value; 
  let deadlineDate = document.getElementById("deadlineDate").value; 
  if (inputValue === '') 
  {
    alert("This field cannot be empty!");
  }
  else
  {
    noTasks.innerHTML = ' ';
    let ul = document.getElementById('myList');
    let li = document.createElement('li');
    li.className = 'li';
    let textElement = document.createElement('span');
    let dateElement = document.createElement('span');
    textElement.textContent = inputValue;
    dateElement.textContent = deadlineDate;
    dateElement.className = 'date-element';
    li.appendChild(textElement);
    li.appendChild(dateElement);
    ul.appendChild(li);

    // Clears the inputValue on click
    document.getElementById("inputValue").value ='';
  }
}


