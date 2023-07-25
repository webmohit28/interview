
$(document).ready(function () {
  removeListItem();
  showHideNewAction();
  showStatusOnDone();
});


// Retrieve tasks from local storage if available
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addDefaultTasks() {
  const defaultTasks = [
    { "poc": "dsd", "pocBrief": "sdsd", "startdate": "2023-07-18", "targetdate": "2023-07-27", "actualdate": "2023-07-28", "status": "pending" }, { "poc": "dsd", "pocBrief": "sdsd", "startdate": "2023-07-18", "targetdate": "2023-07-27", "actualdate": "2023-07-28", "status": "pending" }, { "poc": "dsd", "pocBrief": "sdsd", "startdate": "2023-07-18", "targetdate": "2023-07-27", "actualdate": "2023-07-28", "status": "pending" }, { "poc": "dsd", "pocBrief": "sdsd", "startdate": "2023-07-18", "targetdate": "2023-07-27", "actualdate": "2023-07-28", "status": "pending" }
  ];

  tasks.push(...defaultTasks);
  saveTasksToLocalStorage();
  populateTaskList();
}
addDefaultTasks();

function saveTasksToLocalStorage() {
  localStorage.setItem("tasks11", JSON.stringify(tasks));
}

function addTask() {
  const poc = document.getElementById("poc").value;
  const pocBrief = document.getElementById("pocBrief").value;
  const startdate = document.getElementById("startdate").value;
  const targetdate = document.getElementById("targetdate").value;
  const actualdate = document.getElementById("actualdate").value;
  const status = document.getElementById("status").value;
  // const time = document.getElementById("time").value;

  if (!poc || !pocBrief || !startdate || !targetdate || !actualdate || !status) {
    alert("Please fill in all fields.");
    return;
  }

  const task = { poc, pocBrief, startdate, targetdate, actualdate, status };
  tasks.push(task);
  saveTasksToLocalStorage();
  populateTaskList();
  document.getElementById("poc").value = "";
  document.getElementById("pocBrief").value = "";
  document.getElementById("startdate").value = "";
  document.getElementById("targetdate").value = "";
  document.getElementById('actualdate').value = "";
  document.getElementById("status").value = "pending";
}

function deleteTask(index) {
  tasks.splice(index, 1);

  saveTasksToLocalStorage();

  populateTaskList();
}

function populateTaskList() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.map((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.classList.add("actions-box");
    taskItem.innerHTML = `
        <div class="actions-box-wrap">
          <div class="box-title-wrap">
            <h2 class="${task.status == 'done' ? "box-title completed" : "box-title red"}">${index + 1}. Lorem Ipsum </h2>
            <div class="edit-delete">
              <span class="edit-icon">
                <img src="assets/images/edit.jpg" alt="edit">
              </span>
              <span class="delete-icon"onclick="deleteTask(${index})">
                <img src="assets/images/delete.jpg" alt="delete">
              </span>
            </div>
          </div>
          <div class="action-box-content">
            <div class="box-content">
              <span class="label"><b>For/Poc:</b></span>
              <span class="text">${task.poc} </span>
            </div>
            <div class="box-content">
              <span class="label"><b>POC Briefed:</b></span>
              <span class="text">${task.pocBrief}</span>
            </div>
            <div class="box-content">
              <span class="label"><b>Start Date:</b></span>
              <span class="text">${task.startdate} 6:30:00 PM</span>
            </div>
            <div class="box-content">
              <span class="label"><b>Target Date:</b></span>
              <span class="text">${task.targetdate} 6:30:00 PM</span>
            </div>
            <div class="box-content">
              <span class="label"><b>Actual Date:</b></span>
              <span class="text">${task.actualdate} 6:30:00 PM</span>
            </div>
          </div>
        </div>`;

    taskList.appendChild(taskItem);
  });
}

populateTaskList();




function saveReports() {
  const waitingPopup = document.getElementById("waitingPopup");
  waitingPopup.style.display = "block";

  setTimeout(() => {
    waitingPopup.style.display = "none";
    window.location.href = "sucess.html";
  }, 2000);
}


function removeListItem() {
  $(".edit-delete span.delete-icon").click(function () {
    $(this).closest(".actions-box").remove();
  });
}

function showHideNewAction() {
  $(".show-hide").click(function () {
    $(".showactionSec").show();
    $(".new-actionContainer").hide();
  });
  $(".showactionSecBtn").click(function () {
    $(".new-actionContainer").show();
    $(".showactionSec").hide();
  });
}

function showStatusOnDone() {
  var select = $("#status");
  select.on("change", function () {
    var selectedOptionText = $(this).children(":selected").text();
    if (selectedOptionText === "Done") {
      $("#custom-modal").show();
    }
  });
  $(".yes-done").click(function () {
    $("#custom-modal").hide();
  });
  $(".no-done").click(function () {
    $("#custom-modal").hide();
    document.getElementById("status").value = "pending";
  });
}