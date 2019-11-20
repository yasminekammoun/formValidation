const nameInput = document.querySelector('#name')
const addressInput = document.querySelector('#address')
const emailInput=document.querySelector('#email')
const mdpInput=document.querySelector('#mdp')
const commInput=document.querySelector('#comm.text')



document.getElementById("validation").addEventListener("click", function() {
    if ((nameInput.value==="")
     || (addressInput.value==="" )
     ||(emailInput.value==="" )
     || (mdpInput.value==="" )|| (commInput.value==="" ))
    alert("Please fill all the boxes");
  });

  mdpInput.addEventListener("change",function(){
  var regex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z]{8,}$/;
  let y=mdpInput.value;
  if( regex.test(y)==false)
  alert("Password invalid");
})
  emailInput.addEventListener("change",function(){
    var regex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,6}$/;
    let x=emailInput.value;
    if( regex.test(x)==false)
    alert("E-mail invalid");
  })
