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

var user = {
    name: 'Alex Walhout',
    age: 23,
    location: 'Seattle'
};

//verifies that the location data exists
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
    //auto returns undefined else
}

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app'); //retrieves a <div> to render to

ReactDOM.render(template, appRoot);
