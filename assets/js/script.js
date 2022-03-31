var date = moment().format("dddd, MMM Do, YYYY");
$("#currentDay").text(date);
var currentTime = moment().hour();

$(document).ready(function() {

    $(".saveBtn").on('click', function() {
   
    var time = $(this).parent().attr('id');
    var task = $(this).siblings('.description').val();


    localStorage.setItem(time, task);

    })


    function timeKeeper (){
        $(".time-block").each(function () {
            var timeBlock = $(this).data("id");
            if (timeBlock < currentTime){
            $(this).removeClass('present')
            $(this).removeClass('future')
            $(this).addClass('past');
            } else if (timeBlock === currentTime) {
            $(this).removeClass('past')
            $(this).removeClass('future')
            $(this).addClass('present');
            } else {
            $(this).removeClass('present')
            $(this).removeClass('past')
            $(this).addClass('future');
            }
        })
    }

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeKeeper();


})


            // for (let i=0; i < localStorage.length; i++) {
            //     $("#hour{i+9} .description").val(localStorage.getItem("hour9"));

            // }
        // $('div[id^="hour"] . document').each( function(){
        //     var task = $('#description').val(localStorage.getItem('div[id^="hour"]'));
        //     console.log(task);
        // })