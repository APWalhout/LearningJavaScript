//src app.js will have the JSX, the scripts app.js contains the babel conversions.
console.log('App.js is running');

//JSX - JavaScript XML
//template is static, no variable injection
//let template = <p>This is JSX from app.js</p>;//needs to be compiled in BABEL to compatable code below in babeljs.io using env and react plugins
let template = React.createElement('h1', null, 'Indecision App');
let appRoot = document.getElementById('app');//retrieves a <div> to render to

ReactDOM.render(template, appRoot);
