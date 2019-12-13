'use strict';

//src app.js will have the JSX, the scripts app.js contains the babel conversions.
console.log('App.js is running');

//JSX - JavaScript XML
//needs to be compiled in BABEL to compatable code below in babeljs.io using env and react plugins

var note = {
    title: 'Indecision App',
    sub: 'Some filler.',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        note.title
    ),
    note.sub && React.createElement(
        'p',
        null,
        note.sub
    ),
    React.createElement(
        'p',
        null,
        note.options.length > 0 ? 'Here are your options:' : 'No options'
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
);

var count = 0;
var addOne = function addOne() {
    console.log('addOne');
};
var subOne = function subOne() {
    console.log('subOne');
};
var resetCnt = function resetCnt() {
    console.log('resetCnt');
};

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: subOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: resetCnt },
        'Reset'
    )
);

console.log(template2);

var appRoot = document.getElementById('app'); //retrieves a <div> to render to

ReactDOM.render(template2, appRoot);
