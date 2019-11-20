//JS uses lexical aka static scoping
//{} is used to delimit scope
//Global scope: defined outside all {} (wrapped in an invisible global {})
//local scope: defined inside {}
let var1 = 'var1';//global

if (true) 
{
    console.log(var1);
    //causes error if used outside of if statement scope
    let var2 = 'var2';//local
}