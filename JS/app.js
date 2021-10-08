document.getElementById('textField').addEventListener('input',textWrite);


function textWrite(){
    document.getElementById('post').innerText = document.getElementById('textField').value;
}


function textTransform() {
var select = document.getElementById('textTransform');
var option = select.options[select.selectedIndex]
// console.log(option.value)

if (option.value == 'uppercase') {
    document.getElementById('post').style.textTransform = 'uppercase';

} else if(option.value == 'capitalize') {
    document.getElementById('post').style.textTransform = 'capitalize'
    
}
 else if(option.value == 'empty') {
    document.getElementById('post').style.textTransform = ''
    
}
    
}



function textAlign() {
var select = document.getElementById('textAlign');
var option = select.options[select.selectedIndex]
// console.log(option.value)

if (option.value == 'left') {
    document.getElementById('post').style.textAlign = 'left'

} else if(option.value == 'right') {
    document.getElementById('post').style.textAlign = 'right'
    
}
 else if(option.value == 'center') {
    document.getElementById('post').style.textAlign = 'center'
    
}
    
}

function fontSize() {
var select = document.getElementById('fontSize');
var option = select.options[select.selectedIndex]
document.getElementById('post').style.fontSize = option.value + 'px';
}

function fontWeight() {
var select = document.getElementById('fontWeight');
var option = select.options[select.selectedIndex]
document.getElementById('post').style.fontWeight = option.innerText;
}

function fontColorPicker() {
document.getElementById('post').style.color = document.getElementById('fontColorPicker').value;
}

function statusColorPicker() {
document.getElementById('fullpost').style.backgroundColor = document.getElementById('statusColorPicker').value;
}


function statusWidth() {
    var select = document.getElementById('statusWidth');
    var option = select.options[select.selectedIndex]
    document.getElementById('post').style.width = option.innerText;
    }

function fontFamily() {
    var select = document.getElementById('fontFamily');
    var option = select.options[select.selectedIndex]
    document.getElementById('post').style.fontFamily = option.value;

    if(option.value == 'talldark'){
        document.getElementById('post').style.letterSpacing = '4px'

    }
    }