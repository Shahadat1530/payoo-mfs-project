document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById('phn-num').value;
    const pinNumer = document.getElementById('pin-num').value;
    
    if (phoneNumber === '017' && pinNumer === '1234') {
        console.log('logged in!!');
        window.location.href = '/home.html';
    }
    else {
        alert('Wrong phone or pin!!!');
    }
})