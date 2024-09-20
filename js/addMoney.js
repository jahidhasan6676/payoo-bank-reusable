document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
    if(isNaN(addMoney)){
        alert('enter number')
        return;
    }
    
    if(pinNumber === 1234){
        const balance = getInputTextValueById('current-balance');
        const newBalance = balance + addMoney;
        
       
        document.getElementById('current-balance').innerText = newBalance;

        // transaction add history
        const p = document.createElement('p');
    p.innerText = `Added ${addMoney}TK. New Balance: ${newBalance}`;
    document.getElementById('transaction-container').appendChild(p);
    }
    else{
        alert('Failed to add money')
    }
})