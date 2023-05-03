const scriptURL = 'https://script.google.com/macros/s/AKfycbxgzXpWFgtV3YZSVOVjX9NL1xsXq-pWsQ2dSP0Pou4K-DUfCEhtGz1-j71moqQzD2k/exec'
            const form = document.forms['google-sheet']
            const sbtn= document.getElementById('btn')
          
            form.addEventListener('submit', e => {
            
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => 
                alert("successfully sent! press ok and go back."))
                .catch(error => console.error('Error!', error.message))
  
            })
           

            const subtn = document.getElementById('sub-btn')
            const show = document.getElementById('pt')
            subtn.addEventListener('click', function(e){
              setTimeout(() => {
                  show.style.opacity = '1'
              }, 1000);
              setTimeout(() => {
                  show.style.opacity = '0'
              }, 5000);
            })