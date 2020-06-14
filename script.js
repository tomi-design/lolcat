var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var time= new Date().getHours();



var updateClock=function() {
  
var lolcatImage= document.getElementById('lolcat');
var blockQuote= document.getElementById('timeEvent');
var messageText;
var image= 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg';


if (time == partyTime){
	image= 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg';
    messageText = "IZ PARTEE TIME!!";
} else if (time == napTime) {
	image='https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg';
    messageText = "IZ NAP TIME…";	
	
} else if (time == lunchTime) {
	image= 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg';
    messageText = "IZ NOM NOM NOM TIME!!";
	
} else if (time == wakeupTime) {
	image= 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg';
    messageText = "IZ TIME TO GETTUP.";	
	
} else if (time < noon) {
	image='https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80';
    messageText = "Good morning!";	
	
} else if (time > evening) {
	image= 'https://images.unsplash.com/photo-1586705822376-62420594bf38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1018&q=80';
    messageText = "Good Evening!";	
	
} else {
	image='https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80';
    messageText = "Good afternoon!";
}

blockQuote.innerText= messageText;
lolcatImage.src= image;
  
showCurrentTime();
}

var showCurrentTime= function() {
  var clock=  document.getElementById('clock');
  var currentTime= new Date();
  var hours= currentTime.getHours();
  var minutes= currentTime.getMinutes();
  var seconds=currentTime.getSeconds();
  var meridian= 'AM';
  
  if (hours>=noon)
    {
      meridian= 'PM';
    }
  if (hours>noon)
    {
      hours=hours-12;
    }
  if (minutes< 10)
    {
      minutes= '0' + minutes;
    }
  if (seconds<10)
    {
      seconds= '0' + seconds;
    }
  var clockTime= hours + ':' +  minutes + ':' + seconds + '' + meridian;
  clock.innerText= clockTime;
};

updateClock(); // now i'm calling the updateclock function
var oneSecond=1000;
setInterval(updateClock, oneSecond);


var button= document.getElementById('partyTimeButton');
var isPartyTime= false;

var partyEvent= function(){
if (isPartyTime === false) {
    isPartyTime = true;
    time=partyTime;
    button.innerText='Party Over';
    button.style.backgroundColor='#222';
} else {
    isPartyTime= false;
    time=new Date().getHours();
    button.innerText='Party Time!';
    button.style.backgroundColor= 'pink';
}
};

button.addEventListener('click', partyEvent);


var wakeUpTimeSelector= document.getElementById('wakeUpTimeSelector');
var lunchTimeSelector= document.getElementById('lunchTimeSelector');
var napTimeSelector= document.getElementById('napTimeSelector');

var wakeUp= function() {
    wakeupTime=wakeUpTimeSelector.value;
}
var lunch= function() {
    lunchTime=lunchTimeSelector.value;
}

var nap= function() {
    napTime=napTimeSelector.value;
};

wakeUpTimeSelector.addEventListener('change', wakeUp);
lunchTimeSelector.addEventListener('change', lunch);
napTimeSelector.addEventListener('change', nap);

