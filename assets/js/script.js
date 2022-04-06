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
            $(this).removeClass('present');
            $(this).removeClass('future');
            $(this).addClass('past');
            } else if (timeBlock === currentTime) {
            $(this).removeClass('past');
            $(this).removeClass('future');
            $(this).addClass('present');
            } else {
            $(this).removeClass('present');
            $(this).removeClass('past');
            $(this).addClass('future');
            }
        })
    }

    for (let i=0; i < 8; i++) {
        $(`#hour${i+9} .description`).val(localStorage.getItem(`hour${i+9}`));
    }

    timeKeeper();

})
