document.getElementById('textField').addEventListener('input',textWrite);


function textWrite(){
    document.getElementById('post').textContent = document.getElementById('textField').value;
}


function uppercase(){
document.getElementById('post').style.textTransform = 'uppercase'
}

function capitalize(){
document.getElementById('post').style.textTransform = 'Capitalize'
}