document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoneyInput = document.getElementById('money-input').value;
    const pinNumberInput = document.getElementById('pin-num-input').value;
    console.log(addMoneyInput, pinNumberInput)
})