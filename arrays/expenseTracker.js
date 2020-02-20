const account = {
    name: 'Alex Walhout',
    expenses: [],
    income: [],
    expenseTotal: 0,
    incomeTotal: 0,
    addExpense: function (description, amount) {
        this.expenses.push({description: description, amount: amount });
        this.expenseTotal += amount;//update total as you go to avoid constant recounting for each summary call
    },
    addIncome: function (description, amount) {
        this.income.push({description: description, amount: amount});
        this.incomeTotal += amount;
    },
    //getAccountSummary totals up all expenses and prints an account message summary 'account name has X in expenses'
    getAccountSummary: function() {
    return `${this.name} has a balance of $${this.incomeTotal - this.expenseTotal}. $${this.incomeTotal} in income. $${this.expenseTotal} in expenses.`;
    },
    //does a live count of expense total as a back up in case of an error maybe from erased expenses, but also to learn for each loops
    refreshSummary: function() {
        let total = 0;
        this.expenses.forEach(element => total += element.amount);
        return total;
    }
};

//add income array
//add addIncome method -> description, amount
//tweak getAccountSummary, figure out expense, income, and balance

account.addExpense('Rent', 900);
account.addExpense('Coffee', 6);
account.addIncome('Job', 1000);
console.log(account.getAccountSummary());
account.expenseTotal = account.refreshSummary();
console.log(account.getAccountSummary());