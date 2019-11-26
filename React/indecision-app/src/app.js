//src app.js will have the JSX, the scripts app.js contains the babel conversions.
console.log('App.js is running');

//JSX - JavaScript XML
//template is static, no variable injection
let template = (
<div>
    <h1>Indecision App</h1>
    <p>Some filler.</p>
    <ol>
        <li>Item One</li>
        <li>Item Two</li>
    </ol>
</div>
);//needs to be compiled in BABEL to compatable code below in babeljs.io using env and react plugins
let appRoot = document.getElementById('app');//retrieves a <div> to render to

ReactDOM.render(template, appRoot);
