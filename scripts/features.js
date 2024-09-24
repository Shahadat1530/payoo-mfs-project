// show add money form only
document.getElementById('show-add-money').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
});
// show cash out form only
document.getElementById('show-cash-out').addEventListener('click', function(){
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
});
// show transactions
document.getElementById('show-transactions').addEventListener('click', function(){
    document.getElementById('transaction-section').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
});