// add money 
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoneyInput = document.getElementById('money-input').value;
    const pinNumberInput = document.getElementById('pin-num-input').value;
    
    if (pinNumberInput === '1234') {
        const balance = document.getElementById('account-balance').innerText;

        const addMoney = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoney + balanceNumber;
        
        document.getElementById('account-balance').innerText = newBalance;

        // transaction history
         const p = document.createElement('p');
         p.innerText = `Added : ${addMoney}tk. New Balance ${newBalance}`;

         document.getElementById('transaction-container').appendChild(p);
    }
    else {
        alert('Try Again Later!!');
    }
});

// cash out
document.getElementById('btn-cashout').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutMoneyInput = document.getElementById('cashout-input').value;
    const pinCashInput = document.getElementById('cashout-pin-input').value;

    if (isNaN(cashOutMoneyInput)) {
        alert('Failed to cash out');
        return;
    }
    
    if (pinCashInput === '1234') {
        const balance = document.getElementById('account-balance').innerText;

        const cashOut = parseFloat(cashOutMoneyInput);
        const balanceNumber = parseFloat(balance);

        if (cashOutMoneyInput > balanceNumber) {
            alert('Not enough money to cash out');
            return;
        }

        const newBalance = balanceNumber - cashOut;
        
        document.getElementById('account-balance').innerText = newBalance;

         // transaction history
         const p = document.createElement('p');
         p.innerText = `Withdrew : ${cashOut}tk. New Balance ${newBalance}`;

         document.getElementById('transaction-container').appendChild(p);
    }
    else {
        alert('Try Again Later!!');
    }
})