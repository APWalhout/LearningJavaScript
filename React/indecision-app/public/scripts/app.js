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

//challenge area
var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Alex Walhout'
    ),
    React.createElement(
        'p',
        null,
        'Age: 23'
    ),
    React.createElement(
        'p',
        null,
        'Location: Seattle'
    )
);
var appRoot = document.getElementById('app'); //retrieves a <div> to render to

ReactDOM.render(template2, appRoot);
