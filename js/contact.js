
function SendMail(){
  var parms = {
  from_name: document.getElementById("Name").value,
  email_id: document.getElementById("email_id").value,
  message: document.getElementById("message").value
 
};

emailjs.send('service_9ygswwv', 'template_ayr4gdd', parms)
  .then(function(response) {
    //  console.log('SUCCESS!', response.status, response.text);
     document.getElementById("pp").innerHTML = " Your massage sent successfully Thank you."
     document.getElementById("pp").style.color = "green"
  }, function(error) {
    //  console.log('FAILED...', error);
     document.getElementById("pp").innerHTML = " Faild! Please try again."
     document.getElementById("pp").style.color = "red"
     


  });

}




