console.log('JS initiated');
const inputs = document.querySelectorAll('input');
//console.log(inputs);
const page = document.getElementById('page');
//console.log(page);
let parent;
var initial = true;
let element;

function create_Ele() {
    checkInitial();
    element = document.createElement(inputs[0].value);
    for (let i = 1; i < inputs.length; i++) {
        let attribute = inputs[i].getAttribute('placeholder');
        let value = inputs[i].value;
        if (value) {
            element[attribute] = value;
        }
        if (attribute === 'parent id' && value) {
            let div = document.getElementById(value);
            div.appendChild(element);
        } else {
            page.appendChild(element);
        }
    }
    parent = element.parentNode;
    console.log("Inputted element: ", element);
}

function checkInitial() {
    if (initial == true) {
        let element = document.getElementById("initial");
        let p_ele = element.parentNode;
        p_ele.removeChild(element);
        initial = false;
    } else if (initial == 'reset'){
        let element = document.createElement('h3');
        element.innerHTML = 'Elements will appear here';
        element.id = 'initial';
        element.className = '';
        page.appendChild(element);
    }
}

function remove_Ele() {
    let last_child = parent.lastChild;
    last_child.remove();
    if (element) {
        console.log("Element: ", element, "deleted");
    }
}

function reset() {
    for(let i = 0; i < inputs.length; i++){
        inputs[i].value = '';
    }
}

function toggle_Interface(){
    let wrap = document.getElementById('wrap');
    let eles = document.getElementById('eles');
    wrap.className = 'd-none';
    //eles.className = 'd-none';
    let show_btn = document.createElement('span');
    show_btn.id = 'show';
    show_btn.innerHTML = 'Show Panel';
    show_btn.className = 'btn btn-primary float-rt mt-5';
    show_btn.setAttribute('onclick', 'show_Ele()');
    initial = true;
    checkInitial();
    page.appendChild(show_btn);
}

function show_Ele(){
    let show_btn = document.getElementById('show');
    let wrap = document.getElementById('wrap');
    wrap.className = 'd-block';
    let p_btn = show_btn.parentNode;
    p_btn.removeChild(show_btn);
    initial = 'reset';
    checkInitial();
}