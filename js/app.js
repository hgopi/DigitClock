$(document).ready(function(){

    var hours = $('#hour'),
        minutes = $('#min'),
        seconds = $('#sec');

    var containerOffset = $('.container').offset().left,
        divHours = $('.hours'),
        divMins = $('.minutes'),
        divSec = $('.seconds');
 
     var radius = $('#hour-bar').attr('r'),
        hourBar = $('#hour-bar'),
        minBar = $('#min-bar'),
        secBar = $('#sec-bar');
    
    $('#svg-hour').css({
        marginLeft: divHours.offset().left - containerOffset
    });
    $('#svg-min').css({
        marginLeft: divMins.offset().left - containerOffset
    });
    $('#svg-sec').css({
        marginLeft: divSec.offset().left - containerOffset
    });

    function getPercent(r, val, total) {
        var circum = Math.PI * r * 2;
        var percent = ( (total - val) / total) * circum;
        return percent;
    }
   
    updateTimer();
    setInterval(updateTimer, 1000);
    
    function updateTimer() {
        var date = new Date();
        
        var getHour = date.getHours() % 12;
        var getMin = date.getMinutes();
        var getSec = date.getSeconds();

        var hour = getHour === 0 ? 12 : getHour < 10 ? '0' + getHour : getHour;
        var min = getMin < 10 ? '0' + getMin : getMin;
        var sec = getSec < 10 ? '0' + getSec : getSec;

        hours.html(hour);
        minutes.html(min);
        seconds.html(sec);

        hourBar.attr('stroke-dashoffset', getPercent(radius, parseInt(hour), 12));
        minBar.attr('stroke-dashoffset', getPercent(radius, parseInt(min), 60));
        secBar.attr('stroke-dashoffset', getPercent(radius, parseInt(sec), 60));
    }
   
});