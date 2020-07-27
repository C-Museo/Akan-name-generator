function getDate () {
    /*var dd= new Date();*/
    var  day = parseInt(document.getElementById("day").value);
    var  month = parseInt(document.getElementById("month").value);
    var  year = parseInt(document.getElementById("year").value);
    
    if(day <=0 || day>31) {
        document.getElementsByClassName("day error").innerHtml = "invalid";
        return false;
    } else {
        document.setDate(date);
    }

    if(month <=0 || month>12) {
        document.getElementsByClassName("month error").innerHtml = "invalid";
        return false;
    } else {
        document.setMonth(month);
    }

    if(year <=0 || year >new Date().getFullYear() {
      document.getElementsByClassName("year error").innerHtml = "invalid";
        return false;
    } else {
        document.setYear(year);
    }

    var day= d.getDate(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7

    );
var day= ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
var male =["kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame"]
var female= ["akosua", "adwoa", "abenaa", "akua", "yaa", "afua", "ama"]

function akanName () {
    var ismale = Document.getElementById("male").checked;
    var isfemale = Document.getElementById("male").checked; 
    if (gender[1].checked) {
      if (gender[1].value == 'male') {
        if (weekDay === 0) {
          response.innerHTML = 'Kwasi'
        } else if (weekDay === 1) {
          response.innerHTML = 'Kwadwo'
        } else if (weekDay === 2) {
          response.innerHTML = 'Kwabena'
        } else if (weekDay === 3) {
          response.innerHTML = 'Kwaku'
        } else if (weekDay === 4) {
          response.innerHTML = 'Yaw'
        } else if (weekDay === 5) {
          response.innerHTML = 'Kofi'
        } else {
          response.innerHTML = 'Kwame'
        }
      } else {if (gender[2].checked) {
        if (gender[2].value == 'female') {

        if (weekDay === 0) {
          response.innerHTML = 'Akosua'
        } else if (weekDay === 1) {
          response.innerHTML = 'Adwoa'
        } else if (weekDay === 2) {
          response.innerHTML = 'Abenaa'
        } else if (weekDay === 3) {
          response.innerHTML = 'Akua'
        } else if (weekDay === 4) {
          response.innerHTML = 'Yaa'
        } else if (weekDay === 5) {
          response.innerHTML = 'Afua'
        } else {
          response.innerHTML = 'Ama'
        }
      }
    }
  }
  event.preventDefault();
}

    
}
akanName()



