//global: //name
    //local: //name
        //local:
    //local:

//let name = 'Alex';

if (true)
{
    //let name = 'Walhout';//variable shadowing. local var value is preffered over parents/global
    if (true)
    {
        ////leaked global
        name = 'Pete'//overwrites walhout //after not finding declared, it auto declares as global
        console.log(name);
    }
}

if (true)
{
    console.log(name);
}