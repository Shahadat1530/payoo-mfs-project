document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phn-num').value;
    console.log(phoneNumber);
})