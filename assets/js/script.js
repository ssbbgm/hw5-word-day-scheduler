var date = moment().format("dddd, MMM Do, YYYY");
$("#currentDay").text(date);
var currentTime = moment().hour();

$(document).ready(function() {

    $(".saveBtn").on('click', function() {
   
    var time = $(this).siblings().attr('id');
    var text = $(this).siblings('.description').val();


    localStorage.setItem(time, text);

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

    

    // Object.keys(localStorage).forEach(function(key){
    //     console.log(localStorage.getItem(key));
    //     let message = localStorage.getItem(key);

    //     $('.description').textContent = message;

    //  });




    timeKeeper();

})
