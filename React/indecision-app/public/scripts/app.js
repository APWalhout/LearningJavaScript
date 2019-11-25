console.log('App.js is running');

//JSX - JavaScript XML
//template is static, no variable injection
//let template = <p>This is JSX from app.js</p>;//needs to be compiled in BABEL to compatable code below in babeljs.io
let template = React.createElement('p', null, 'This is JSX from app.js!');
let appRoot = document.getElementById('app');//retrieves a <div> to render to

ReactDOM.render(template, appRoot);