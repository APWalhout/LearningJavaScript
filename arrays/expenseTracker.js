const account = {
    name: 'Alex Walhout',
    expenses: [],
    expenseTotal: 0,
    addExpense: function (description, amount) {
        account.expenses.splice(0,0, {description: description, amount: amount });
        account.expenseTotal += amount;//update total as you go to avoid constant recounting for each summary call
    },
    //getAccountSummary totals up all expenses and prints an account message summary 'account name has X in expenses'
    getAccountSummary: function() {
    return account.expenseTotal;
    },
    //does a live count of expense total as a back up in case of an error maybe from erased expenses, but also to learn for each loops
    refreshSummary: function() {
        let total = 0;
        account.expenses.forEach(element => total += element.amount);
        return total;
    }
};

//expense object: props description: and amount
//create methods: addExpense, getAccountSummary
//addExpense(description, amount) adds new object to the array with the correct data

account.addExpense('Rent', 900);
account.addExpense('Coffee', 6);
console.log(account.getAccountSummary());
account.expenseTotal = account.refreshSummary();
console.log(account.getAccountSummary());