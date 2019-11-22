let myAccount = {
    name: 'Alex',
    expenses: 0,
    income: 0
}

let otherAccount = myAccount;//this is just an alias, changing one will change the other, they still point to the same object.
//to make unique, would have to make a new object and assign otherAccount.name = myAccount.name etc.?

let addExpense = function (account, amount)
{
    account.expenses += amount;
    //account = {}, this makes account point to a new object that is auto declared
    //inline debug
    //console.log(account);
}

addExpense(myAccount, 2.50);
console.log(myAccount);
//myAccount is printed twice and in an altered form
//account is a 'pointer' alias to myAccount so when messing with account, it changes the object data it represents

//challenge area:
let addIncome = function (account, amount)
{
    account.income += amount;
}

let resetAccount = function (account)
{
    account.expenses = 0;
    account.income = 0;
}

let getAccountSummary = function (account)
{
    return `Account for ${account.name} has a balance of $${account.income - account.expenses} from $${account.expenses} for expenses and an income of $${account.income}.`;
}

//add income
addIncome(myAccount, 100);
//add expense
addExpense(myAccount, 20);
//add expense
addExpense(myAccount, 32);
//get summary
console.log(getAccountSummary(myAccount));
//reset account
resetAccount(myAccount);
//get summary
console.log(getAccountSummary(myAccount));