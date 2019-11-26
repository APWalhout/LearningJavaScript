'use strict';

//src app.js will have the JSX, the scripts app.js contains the babel conversions.
console.log('App.js is running');

//JSX - JavaScript XML
//template is static, no variable injection
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'Some filler.'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
); //needs to be compiled in BABEL to compatable code below in babeljs.io using env and react plugins
var appRoot = document.getElementById('app'); //retrieves a <div> to render to

ReactDOM.render(template, appRoot);
