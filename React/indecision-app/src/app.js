//src app.js will have the JSX, the scripts app.js contains the babel conversions.
console.log('App.js is running');

//JSX - JavaScript XML

let note = {
    title: 'Indecision App',
    sub: 'Some filler.'
};

//template is static, no variable injection
let template = (
<div>
    <h1>{note.title}</h1>
    <p>{note.sub}</p>
    <ol>
        <li>Item One</li>
        <li>Item Two</li>
    </ol>
</div>
);//needs to be compiled in BABEL to compatable code below in babeljs.io using env and react plugins

let user = {
    name: 'Alex Walhout',
    age: 23,
    location: 'Seattle'
};

let template2 = (
<div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
</div>
);
let appRoot = document.getElementById('app');//retrieves a <div> to render to

ReactDOM.render(template, appRoot);
