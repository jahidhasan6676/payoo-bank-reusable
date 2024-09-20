function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getInputTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById(id){
    const addMoney = document.getElementById('addMoney-form').classList.add('hidden');
    const cashOut = document.getElementById('cashOut-form').classList.add('hidden');
    const transactionSection = document.getElementById('transaction-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
    
}