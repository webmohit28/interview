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
  });
}

function submitForm() {
  $("#saveForm").click(function () {
    $("#loadingIcon").show();
    setTimeout(function () {
      $("#loadingIcon").hide();
    }, 2000);
    window.location.href = "sucess.html";
  });
}

$(document).ready(function () {
  removeListItem();
  showHideNewAction();
  showStatusOnDone();
  submitForm();
});
