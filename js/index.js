
const toggle = document.getElementById('three-dought');
const menu = document.getElementById('nav-list');

toggle.addEventListener('click', function () {
  if (menu.style.display == 'block') {
    menu.style.display = 'none'
  }
  else {
    menu.style.display = 'block'
  }
})




// 14 february event

// Set the date we're counting down to
var countDownDate = new Date("may 20, 2023 00:00:00").getTime();


// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = `Exam day📝 `;
    document.getElementById("demo").style.color = 'white'
    document.getElementById('demo1').innerHTML = ' '


  }
  
}, 1000);

setTimeout(()=>{
  document.getElementById("demo").innerHTML = " "
},1544400000)


// welcome function

