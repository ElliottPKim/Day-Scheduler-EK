// current date is displayed
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// changes color depending on past, present, or future.
function timeBlockColor() {
    var time = moment().hour();

    $(".time-block").each(function() {
        var currentHours = parseInt($(this).attr("id"));

        if (currentHours < time) {
            $(this).addClass("past");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    })
};

// saves to local storage
$(".saveBtn").on("click", function() {
    // console.log(this);
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();
    localStorage.setItem(time, plan);
});


