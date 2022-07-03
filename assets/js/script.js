
setInterval(() => {
  var time = moment().format("MMMM Do YYYY, h:mm:ss");
  $("#time").text(time);
}, 1000)

function handleProjectFormSubmit(event) {
  event.preventDefault();
}

$(document).ready(function () {

  let currentHour = moment().format("HH");
  //grabs hour from each time slot and compares it to actual time
  $(".time-div").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];

    if (currentHour == timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

  //retrieves items from local storage and sets them in proper places
  $("#hour-09 .time-block").val(localStorage.getItem("09"));
  $("#hour-10 .time-block").val(localStorage.getItem("10"));
  $("#hour-11 .time-block").val(localStorage.getItem("11"));
  $("#hour-12 .time-block").val(localStorage.getItem("12"));
  $("#hour-1 .time-block").val(localStorage.getItem("1"));
  $("#hour-2 .time-block").val(localStorage.getItem("2"));
  $("#hour-3 .time-block").val(localStorage.getItem("3"));
  $("#hour-4 .time-block").val(localStorage.getItem("4"));
  $("#hour-5 .time-block").val(localStorage.getItem("5"));

  // adds functionality to the save button
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });


});