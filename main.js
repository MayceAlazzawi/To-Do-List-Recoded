let inputBox = document.getElementById("inputValue");
let noTasks = document.getElementById("noTasks");

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
