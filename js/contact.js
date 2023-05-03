// const scriptURL = 'https://script.google.com/macros/s/AKfycbxgzXpWFgtV3YZSVOVjX9NL1xsXq-pWsQ2dSP0Pou4K-DUfCEhtGz1-j71moqQzD2k/exec'
//             const form = document.forms['google-sheet']
//             const sbtn= document.getElementById('btn')

//             form.addEventListener('submit', e => {

//               e.preventDefault()
//               fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//                 .then(response => 
//                 alert("successfully sent! press ok and go back."))
//                 .catch(error => console.error('Error!', error.message))

//             })


//             const subtn = document.getElementById('sub-btn')
//             const show = document.getElementById('pt')
//             subtn.addEventListener('click', function(e){
//               setTimeout(() => {
//                   show.style.opacity = '1'
//               }, 1000);
//               setTimeout(() => {
//                   show.style.opacity = '0'
//               }, 5000);
//             })





function SendMail(){
  var parms = {
  from_name: document.getElementById("Name").value,
  email_id: document.getElementById("email_id").value,
  message: document.getElementById("message").value
 
};

emailjs.send('service_9ygswwv', 'template_ayr4gdd', parms)
  .then(function(response) {
    //  console.log('SUCCESS!', response.status, response.text);
     document.getElementById("pp").innerHTML = " Your massage sent successfully thankyou."
     document.getElementById("pp").style.color = "green"
  }, function(error) {
    //  console.log('FAILED...', error);
     document.getElementById("pp").innerHTML = " Faild! Please try again."
     document.getElementById("pp").style.color = "red"
     


  });

}




// function SendMail() {
//   var parms = {
//     from_name: document.getElementById("Name").value,
//     Name : document.getElementById("Name").value,
//     email_id: document.getElementById("email_id").value,
//     message: document.getElementById("message").value
//   }
//   emailjs.send("service_9ygswwv", "template_ayr4gdd", parms).then(function (res) {
//     btn = document.getElementById("sub-btn")
//     p = document.getElementById("pt")
//     alert("succcess")

//   })
// }