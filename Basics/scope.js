//JS uses lexical aka static scoping
//{} is used to delimit scope
//Global scope: defined outside all {} (wrapped in an invisible global {})
//local scope: defined inside {}

//in a scope you can access variables defined in that scope or in parent scopes
//ie: local scopes can access global scope.

//Global: var1
    //local: var2
        //local: var4
    //local: var3

let var1 = 'var1';//global

if (true) 
{
    console.log(var1);
    //causes error if used outside of if statement scope
    let var2 = 'var2';//local
    
    if (true)
    {
        let var4 = 'var4';//local
    }
}

if (true)
{
    let var3 = 'var3';//local
}