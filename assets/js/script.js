
$(document).ready(function () {
  removeListItem();
  showHideNewAction();
  showStatusOnDone();
});


// Retrieve tasks from local storage if available
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

if (tasks.length === 0) {
  tasks = [
    { "poc": "dsd", "pocBrief": "sdsd", "startdate": "2023-07-18", "targetdate": "2023-07-27", "actualdate": "2023-07-28", "status": "done", "startHour": "16", "targetHour": "0", "actualHour": "12", "startMin": "50", "targetMin": "30", "actualMin": "30" }, { "poc": "dsd", "pocBrief": "sdsd", "startdate": "2023-07-18", "targetdate": "2023-07-27", "actualdate": "2023-07-28", "status": "pending", "startHour": "23", "targetHour": "0", "actualHour": "12", "startMin": "50", "targetMin": "30", "actualMin": "30" }, { "poc": "dsd", "pocBrief": "sdsd", "startdate": "2023-07-18", "targetdate": "2023-07-27", "actualdate": "2023-07-28", "status": "pending", "startHour": "23", "targetHour": "0", "actualHour": "12", "startMin": "50", "targetMin": "30", "actualMin": "30" }, { "poc": "dsd", "pocBrief": "sdsd", "startdate": "2023-07-18", "targetdate": "2023-07-27", "actualdate": "2023-07-28", "status": "pending", "startHour": "23", "targetHour": "0", "actualHour": "18", "startMin": "30", "targetMin": "30", "actualMin": "30" }
  ];
  document.getElementById('shwoRecord').innerText = 'Showing 1 - 4 of 4 Records';
  document.getElementById('shwoRecordItem').innerText = 'Showing 1 - 4 of 4 Records';

}
document.getElementById('shwoRecord').innerText = `Showing 1 - ${tasks.length} of ${tasks.length} Records`;
document.getElementById('shwoRecordItem').innerText = `Showing 1 - ${tasks.length} of ${tasks.length} Records`;


function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const poc = document.getElementById("poc").value;
  const pocBrief = document.getElementById("pocBrief").value;
  const startdate = document.getElementById("startdate").value;
  const targetdate = document.getElementById("targetdate").value;
  const actualdate = document.getElementById("actualdate").value;
  const status = document.getElementById("status").value;

  const startHour = document.getElementById("startHour").value;
  const targetHour = document.getElementById("targetHour").value;
  const actualHour = document.getElementById("actualHour").value;
  const startMin = document.getElementById("startMin").value;
  const targetMin = document.getElementById("targetMin").value;
  const actualMin = document.getElementById("actualMin").value;

  // const time = document.getElementById("time").value;

  if (!poc || !pocBrief || !startdate || !targetdate || !actualdate || !status) {
    alert("Please fill in all fields.");
    return;
  }

  const task = { poc, pocBrief, startdate, targetdate, actualdate, status, startHour, targetHour, actualHour, startMin, targetMin, actualMin };

  tasks.push(task);
  saveTasksToLocalStorage();
  populateTaskList();


  document.getElementById("poc").value = "";
  document.getElementById("pocBrief").value = "";
  document.getElementById("startdate").value = "";
  document.getElementById("targetdate").value = "";
  document.getElementById('actualdate').value = "";
  document.getElementById("status").value = "pending";
  document.getElementById("startHour").value = "0";
  document.getElementById("targetHour").value = "0";
  document.getElementById("actualHour").value = "0";
  document.getElementById("startMin").value = "0";
  document.getElementById("targetMin").value = "0";
  document.getElementById("actualMin").value = "0";
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasksToLocalStorage();
  populateTaskList();
  document.getElementById('shwoRecord').innerText = `Showing 1 - ${tasks.length} of ${tasks.length} Records`;
  document.getElementById('shwoRecordItem').innerText = `Showing 1 - ${tasks.length} of ${tasks.length} Records`;
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
              <span class="text">${task.startdate} ${task.startHour < 13 ? task.startHour : (task.startHour - 12)}:${task.startMin}:00 ${task.startHour < 12 ? 'AM' : 'PM'}</span>
            </div>
            <div class="box-content">
              <span class="label"><b>Target Date:</b></span>
              20:15
              <span class="text">${task.targetdate} ${task.targetHour < 13 ? task.targetHour : (task.targetHour - 12)}:${task.targetMin}:00 ${task.targetHour < 12 ? 'AM' : 'PM'}</span>
            </div>
            <div class="box-content">
              <span class="label"><b>Actual Date:</b></span>
              <span class="text">${task.actualdate} ${task.actualHour < 13 ? task.actualHour : (task.actualHour - 12)}:${task.actualMin}:00 ${task.actualHour < 12 ? 'AM' : 'PM'}</span>
            </div>
          </div>
        </div>`;

    taskList.appendChild(taskItem);
    document.getElementById('shwoRecord').innerText = `Showing 1 - ${tasks.length} of ${tasks.length} Records`;
    document.getElementById('shwoRecordItem').innerText = `Showing 1 - ${tasks.length} of ${tasks.length} Records`;

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


function showMinoptions(id) {
  const selectMinutes = document.getElementById(id);
  for (let i = 0; i <= 60; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectMinutes.appendChild(option);
  }
}
function showHouroptions(id) {
  const selectHour = document.getElementById(id);
  for (let i = 0; i <= 23; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectHour.appendChild(option);
  }
}

showMinoptions('targetMin');
showMinoptions('startMin');
showMinoptions('actualMin');

showHouroptions('targetHour');
showHouroptions('startHour');
showHouroptions('actualHour');