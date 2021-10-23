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
    }



   function bgImg(){

    var select = document.getElementById('bgImg');
    var option = select.options[select.selectedIndex]
    
    if(option.value != 'none'){
        var link = 'url(https://source.unsplash.com/' + screen.width + 'x'  + screen.height + '/?'+ option.value + ')';
        document.getElementById('fullpost').style.backgroundImage = link;
        document.getElementById('bgBlendDiv').removeAttribute('class');
        console.log(document.getElementById('fullpost').classList)

        console.log(link)
    }
    
    else if(option.value == 'none'){
        document.getElementById('fullpost').style.backgroundImage = "";
        document.getElementById('bgBlendDiv').setAttribute('class','none')
    }

        // var inptext = document.getElementById('inputImg');
        // var link = "url(\'https://source.unsplash.com/" + screen.width + "x"  + screen.height + "/?"+ inptext.value + "\')";
        // // var link = "https://picsum.photos/1600/900/?blur";
        // document.getElementById('fullpost').style.background = link;
        // document.getElementById('bgBlendDiv').removeAttribute('class');
        // console.log(document.getElementById('fullpost').classList)
    
   }


   function bgBlend(){

    var select = document.getElementById('bgBlend');
    var option = select.options[select.selectedIndex]
    
        document.getElementById('fullpost').style.backgroundBlendMode = option.value;
    }