
let saveBtn = $('.save-btn');


//*Display the current day to the top of the page
$('#currentDay').text("Today is " + moment().format("dddd, MMMM Do"));


//get values from local storage (if any).
function getPriorNotes() {
    $('.hour').each(function() {  //*goes through each .hour and check to see if there is existing data in local storage
        let notesHour = $(this).text();
        let previousNotes = localStorage.getItem(notesHour);
        if (notesHour !== null) {
            $(this).siblings('.time-block').val(previousNotes);
        }
    })
};
getPriorNotes();


//*saving to local storage
saveBtn.on('click', function() {
    let hour = $(this).siblings('.hour').text();
    let userNote = $(this).siblings('.time-block').val();
    localStorage.setItem(hour, userNote);
})


//*color code the hour rows
function timeColors() {
    let currentTime = moment().hours(); //*to pull the general hour, instead of exact time from moment();

    $('.time-block').each(function() {
        let taskTime = parseInt($(this).attr("id")); //*taskTime now represents each class="time-block" by their unique id's

        if (currentTime > taskTime) {
            $(this).addClass("past");
        } else if (currentTime === taskTime) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    })
}
timeColors();