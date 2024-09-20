document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin');

    if(isNaN(cashOut)){
        alert('enter number')
        return;
    }

    

    if(pinNumber === 1234){
        const balance = getInputTextValueById('current-balance');
        const newBalance = balance - cashOut;

        if(cashOut > balance){
            alert('kom tk');
            return;
        }

        document.getElementById('current-balance').innerText = newBalance;

        // transaction history add
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `<h4 class="text-2xl font-bold">Cash Out </h4>
        <p>${cashOut} withdraw. new Balance ${newBalance}</p>`;
        
        document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert('Failed to cash out');
    }
})