//src app.js will have the JSX, the scripts app.js contains the babel conversions.
console.log('App.js is running');

//JSX - JavaScript XML
//needs to be compiled in BABEL to compatable code below in babeljs.io using env and react plugins

let note = {
    title: 'Indecision App',
    sub: 'Some filler.'
};

let template = (
<div>
    <h1>{note.title}</h1>
    <p>{note.sub}</p>
    <ol>
        <li>Item One</li>
        <li>Item Two</li>
    </ol>
</div>
);

let user = {
    name: 'Alex Walhout',
    age: 23,
    location: 'Seattle'
};

//verifies that the location data exists
function getLocation(location)
{
    if(location)
    {
        return <p>Location: {location}</p>;
    }
//auto returns undefined else
}

let template2 = (
<div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && (user.age >= 18)) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
</div>
);

let appRoot = document.getElementById('app');//retrieves a <div> to render to

ReactDOM.render(template2, appRoot);
