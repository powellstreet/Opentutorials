function reducer(state, action){
    if(state === undefined){
        return { color : 'gold'}
    }
    let newState;
    if(action.type === 'CHANGE'){
        newState = Object.assign({}, state, { color : action.color });
    }
    return newState;
};

let store = Redux.createStore(reducer);

function red(){
    let state = store.getState();
    document.querySelector('#red').innerHTML = `
        <div id = "redBox" style = "background-color : ${state.color}">
            <h1>RED</h1>
            <input type="button" value = "redButton" onclick="
                store.dispatch({type : 'CHANGE', color : 'red' })
                "
            ></input>
        </div>
    `
};

function orange(){
    let state = store.getState();
    document.querySelector('#orange').innerHTML = `
        <div id = "orangeBox" style = "background-color : ${state.color}">
            <h1>orange</h1>
            <input type="button" value = "orangeButton" onclick="
                store.dispatch({type : 'CHANGE', color : 'orange' })
                "
            ></input>
        </div>
    `
};

function yellow(){
    let state = store.getState();
    document.querySelector('#yellow').innerHTML = `
        <div id = "yellowBox" style = "background-color : ${state.color}">
            <h1>yellow</h1>
            <input type="button" value = "yellowButton" onclick="
                store.dispatch({type : 'CHANGE', color : 'yellow' })
                "
            ></input>
        </div>
    `
};

function green(){
    let state = store.getState();
    document.querySelector('#green').innerHTML = `
        <div id = "greenBox" style = "background-color : ${state.color}">
            <h1>green</h1>
            <input type="button" value = "greenButton" onclick="
                store.dispatch({type : 'CHANGE', color : 'green' })
                "
            ></input>
        </div>
    `
};

function blue(){
    let state = store.getState();
    document.querySelector('#blue').innerHTML = `
        <div id = "blueBox" style = "background-color : ${state.color}">
            <h1>blue</h1>
            <input type="button" value = "blueButton" onclick="
                store.dispatch({type : 'CHANGE', color : 'blue' })
                "
            ></input>
        </div>
    `
};

function purple(){
    let state = store.getState();
    document.querySelector('#purple').innerHTML = `
        <div id = "purpleBox" style = "background-color : ${state.color}">
            <h1>purple</h1>
            <input type="button" value = "purpleButton" onclick="
                store.dispatch({type : 'CHANGE', color : 'purple' })
                "
            ></input>
        </div>
    `
};

store.subscribe(red);
store.subscribe(orange);
store.subscribe(yellow);
store.subscribe(green);
store.subscribe(blue);
store.subscribe(purple);

red();
orange();
yellow();
green();
blue();
purple();
