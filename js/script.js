function getDate () {
    var dd= Date();

    var  day = parseInt(document.getElementById("day").value);
    var  month = parseInt(document.getElementById("month").value);
    var  year = parseInt(document.getElementById("year").value);
    
    if(day <0 || >31) {
        document.getElementsByClassName("day error").innerHtml = "invalid";
        return false;
    } else {
        document.setDate(date);
    }

    if(month <0 || >12) {
        document.getElementsByClassName("month error").innerHtml = "invalid";
        return false;
    } else {
        document.setMonth(month);
    }

    if(year <0 || >2020) {
        document.getElementsByClassName("year error").innerHtml = "invalid";
        return false;
    } else {
        document.setYear(year);
    }

function akanName () {
    
}
akanName()



