setTimeout(function(){
    $(".se-pre-con").fadeOut("slow");
}, 3000);

$(document).ready(function () {

    // set's the clock.
    setInterval(updateClock, 1000);

    // Hides start menu on load.
    $('#startMenu').hide();
    
    // Show Menu when button is clicked.
    $('#startButton').click(function(){
        $('#startMenu').toggle();
        // Creates the Indentation effect on click.
        $('#startButton').toggleClass('effect3dIn');
    });

    // hide's start menu once menu item is selected.
    $('#startMenuItems li a').click(function(e){
        $('#startMenu').hide();
        $('#startButton').toggleClass('effect3dIn');
    });

    // Event Listener for Taskbar WindowButton.
    $('#windowButton').on('click', function(){
        $('#contentWindow').toggle();
    });

    // Event Listener for Taskbar WindowButton.
    $('#windowMinimise').on('click', function(){
        $('#contentWindow').toggle();
    });

    // Event Listener for Maximise Window.
    $('#windowMaximise').on('click', function(){
        // This stops it from working on Mobile.
        if ($(window).width() > 600) {
            $('#contentWindow').toggleClass('maximiseWindow');
            $('#content').toggleClass('maximiseContent');
            $('#contentWindowStatusBar').toggle();
            $('#windowMaximise').toggleClass('windowRestore'); 
        } else {
            // Don't do it.
        }
    });

});

function updateClock() {
    var currentTime = new Date();
    // Operating System Clock Hours for 12h clock
    var currentHoursAP = currentTime.getHours();
    // Operating System Clock Hours for 24h clock
    var currentHours = currentTime.getHours();
    // Operating System Clock Minutes
    var currentMinutes = currentTime.getMinutes();
    // Operating System Clock Seconds
    var currentSeconds = currentTime.getSeconds();
    // Adding 0 if Minutes & Seconds is More or Less than 10
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    // Picking "AM" or "PM" 12h clock if time is more or less than 12
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";
    // transform clock to 12h version if needed
    currentHoursAP = (currentHours > 12) ? currentHours - 12 : currentHours;
    // transform clock to 12h version after mid night
    currentHoursAP = (currentHoursAP == 0) ? 12 : currentHoursAP;
    // display first 24h clock and after line break 12h version
    var currentTimeString = currentHours + ":" + currentMinutes + " " + timeOfDay;
    // print clock js in div #clock.
    $("#clock").html(currentTimeString);
}