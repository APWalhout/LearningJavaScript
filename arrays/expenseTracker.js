const account = {
    name: 'Alex Walhout',
    expenses: []
};

//expense object: props description: and amount
//create methods: addExpense, getAccountSummary
//addExpense(description, amount) adds new object to the array with the correct data

let addExpense = function(description, amount){
    account.expenses.splice(0,0, {description: description, amount: amount });
}

//getAccountSummary totals up all expenses and prints an account message summary 'account name has X in expenses'

account.addExpense('Rent', 900);
account.addExpense('Coffee', 6);
console.log(account.getAccountSummary());