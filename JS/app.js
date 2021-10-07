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