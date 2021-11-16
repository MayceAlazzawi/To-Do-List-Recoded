let inputBox = document.getElementById("inputValue");
let noTasks = document.getElementById("noTasks");
let currentDate = document.getElementById("currentDate");
let deadlineDate = document.getElementById("deadlineDate");

// Getting today's date
n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("currentDate").innerHTML = m + "/" + d + "/" + y;
window.onload = inputBox.focus();

function addTask() {
  let inputValue = document.getElementById("inputValue").value;
  let deadlineDate = document.getElementById("deadlineDate").value;
  if (inputValue === "") {
    alert("This field cannot be empty!");
  } else {
    noTasks.textContent = " ";
    let myList = document.getElementById("myList");
    let newEl = document.createElement("li");
    let dateElement = document.createElement("span");
    const text = document.createTextNode(inputValue);

    newEl.className = "new-El";
    newEl.appendChild(text);
    document.getElementById("myList").appendChild(newEl);
    dateElement.textContent = deadlineDate;
    dateElement.className = "date-element";
    newEl.appendChild(dateElement);

    newEl.addEventListener(
      "click",
      function (ev) {
        if (ev.target.className === "new-El") {
          ev.target.classList.toggle("checked");
        }
      },
      false
    );

    //Adding priority
    let selectInputs = document.querySelectorAll("select");
    let res = [];
    selectInputs.forEach((Option) => {
      res.push(Option.value);
    });
    let priorityEl = document.createElement("span");
    priorityEl.textContent = res[0];
    newEl.appendChild(priorityEl);
    myList.appendChild(newEl);
    document.getElementById("inputValue").value = "";
  }
}
let noTasks = document.getElementById("noTasks");

//current date
let monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
n = new Date();
y = n.getFullYear();
let monthIndex = n.getMonth();
let monthName = monthNames[monthIndex];
d = n.getDate();
currentDate.innerHTML = `${monthName} ` + d + ", " + y;
window.onload = inputBox.focus();

function addTodo(item, item1, item2) {
  let todo = [];
  let obj = {
    task: item.textContent,
    deadline: item1.textContent,
    priority: item2.textContent,
  };
  todo.push(obj);
  console.log(todo);
}

function addTask() {
  if (inputBox.value === "") {
    alert("This field cannot be empty!");
  } else {
    noTasks.textContent = " ";
    let myList = document.getElementById("myList");
    let newEl = document.createElement("li");
    newEl.className = "new-El";
    let task = document.createTextNode(inputBox.value);
    let deadlineEL = document.createElement("span");
    deadlineEL.textContent = deadlineDate.value;
    deadlineEL.className = "date-element";
    let deleteEl = document.createElement("span");
    let deletetxt = document.createTextNode("Delete");
    deleteEl.className = "delete";
    deleteEl.appendChild(deletetxt);
    //Adding priority
    let selectInputs = document.querySelectorAll("select");
    let priorities = [];
    selectInputs.forEach((priority) => {
      priorities.push(priority.value);
    });
    let priorityEl = document.createElement("span");
    priorityEl.textContent = priorities[0];
    newEl.appendChild(task);
    newEl.appendChild(deadlineEL);
    newEl.appendChild(priorityEl);
    newEl.appendChild(deleteEl);
    myList.appendChild(newEl);
    document.getElementById("inputValue").value = "";

    addTodo(task, deadlineEL, priorityEl);
  }
}
document.addEventListener("click", function (ev) {
  if (ev.target.className === "new-El") {
    ev.target.classList.toggle("checked");
  }
});
document.addEventListener("click", function (ev) {
  if (ev.target.className == "delete") {
    ev.target.parentNode.remove();
  }
});
