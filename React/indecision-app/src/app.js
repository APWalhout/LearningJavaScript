//src app.js will have the JSX, the scripts app.js contains the babel conversions.
console.log('App.js is running');

//JSX - JavaScript XML
//needs to be compiled in BABEL to compatable code below in babeljs.io using env and react plugins

const note = {
    title: 'Indecision App',
    sub: 'Some filler.',
    options: ['One', 'Two']
};

const template = (
<div>
    <h1>{note.title}</h1>
    {note.sub && <p>{note.sub}</p>}
    <p>{(note.options.length > 0) ? 'Here are your options:' : 'No options'}</p>
    <ol>
        <li>Item One</li>
        <li>Item Two</li>
    </ol>
</div>
);

let count = 0;
const addOne = () => {
    console.log('addOne');
};
const subOne = () => {
    console.log('subOne');
}
const resetCnt = () => {
    console.log('resetCnt');
}

const template2 = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={subOne}>-1</button>
        <button onClick={resetCnt}>Reset</button>
    </div>
);

console.log(template2);

const appRoot = document.getElementById('app');//retrieves a <div> to render to

ReactDOM.render(template2, appRoot);
