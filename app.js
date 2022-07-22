var element = document.getElementById('main');
function generatePdf() {
    if(confirm('Are You sure?')) {
        html2pdf(element,{
            margin:       0.5,
            filename:     'timeTable.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
        });
    }
    
}

var sbmt = document.getElementById('submitButton');
sbmt.addEventListener('click',generatePdf);

// var fun = function() {
//     document.body.style.backgroundColor = "yellow";
// }
// window.addEventListener('click',fun);

var input = document.querySelectorAll('input')
function checkFilled() {
    for (var i = 0;i < input.length; i++) {
        if (input[i].value !== '') {
            input[i].style.background = 'orange';
        }
        else {
            input[i].style.background = 'lightblue';
        }
    }
}
window.addEventListener('change',checkFilled);

function riset() {
    if(confirm("Are You sure?")) {
        for(var i=0;i<input.length;i++) {
            input[i].value = '';
            input[i].style.background = 'lightblue';
        }
    }
}
var rst = document.getElementById('reset');
rst.addEventListener('click',riset);

function printHelp() {
    alert('Type Your Routine in the Box \n \n Press RESET to reset \n \n Press Print to print your Time Table');
}
var help = document.getElementById('help');
help.addEventListener('click',printHelp)

//styling chage kijiye mast lagnelagega ,, ha abhi sochte hai 
//aisa kijiye ki reset type button na bana kar ek function bana dijiye uske sath ye bhi function run hoga
//rukiye 