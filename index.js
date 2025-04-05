

let textbox = document.getElementById('textbox-info');
let messages = document.getElementById('list-container');
let button = document.getElementById('add-button');

button.addEventListener('click', () => {
    if( textbox.value === '' ){
        document.getElementById('error-msg').style = 'display: block;';
    }
    else{
        let newMessage = document.createElement('li');
        newMessage.innerHTML = textbox.value;
        messages.appendChild(newMessage);
        document.getElementById('error-msg').style = 'display: none;';
        let span = document.createElement('span');
        span.innerHTML = '❌'
        newMessage.appendChild(span);
    }
    textbox.value = '';
});


messages.addEventListener('click', (list) => {
    if( list.target.tagName === 'LI' ){
       list.target.classList.toggle('checked');
    }
    else if( list.target.tagName === 'SPAN' ){
        list.target.parentElement.remove();
    }
}, false);