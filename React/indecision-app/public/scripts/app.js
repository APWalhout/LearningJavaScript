'use strict';

//src app.js will have the JSX, the scripts app.js contains the babel conversions.
console.log('App.js is running');

//JSX - JavaScript XML

var note = {
    title: 'Indecision App',
    sub: 'Some filler.'
};

//template is static, no variable injection
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        note.title
    ),
    React.createElement(
        'p',
        null,
        note.sub
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

var user = {
    name: 'Alex Walhout',
    age: 23,
    location: 'Seattle'
};

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);
var appRoot = document.getElementById('app'); //retrieves a <div> to render to

ReactDOM.render(template, appRoot);
