var currentHour = new Date().getHours() 
var Hour_array = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var currentDay = document.querySelector("#currentDay")
var saveBtn = document.querySelectorAll(".saveBtn");
currentDay.innerHTML = moment().format("dddd, MMMM Do YYYY");

//shade timeblocks according to the current time.
function timeblock() {
    $(".timeblock").each(function() {
        var timeblock_hour = parseInt($(this).attr("time-id"));
        if (timeblock_hour == currentHour) {
            $(this).addClass("present");
        } else if (timeblock_hour > currentHour) {
            $(this).addClass("future");
        } else if (timeblock_hour < currentHour) {
            $(this).addClass("past");
        }
    })
};
timeblock()
 
// return previously saved data
for (var i = 0; i < Hour_array.length; i++) {
  if(localStorage.getItem(Hour_array[i]) != null){
      var textfield = document.getElementById(Hour_array[i])
      textfield.value = localStorage.getItem(Hour_array[i]);
  }
  // add event listener to each button 
  saveBtn[i].addEventListener("click",function(){
    var text_data = document.getElementById(this.getAttribute("button-id")).value;
    localStorage.setItem(this.getAttribute("button-id"),text_data);
})
}
