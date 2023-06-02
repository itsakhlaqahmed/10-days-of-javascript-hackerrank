// #btns {
//     width: 75%;
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
// }

// .btn {
// /*     width: 90%; */
//     height: 48px;
//     font-size: 24px;
// }


// <!-- Enter your HTML code here -->
// <!DOCTYPE html>
// <html>
//     <head>
//         <meta charset="utf-8">
//         <title>Buttons Grid</title>
//         <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">

//     </head>
//     <body>
//         <div class='container' id='btns'>
//             <button class='btn' id='btn1'>1</button>
//             <button class='btn' id='btn2'>2</button>
//             <button class='btn' id='btn3'>3</button>
//             <button class='btn' id='btn4'>4</button>
//             <button class='btn' id='btn5'>5</button>
//             <button class='btn' id='btn6'>6</button>
//             <button class='btn' id='btn7'>7</button>
//             <button class='btn' id='btn8'>8</button>
//             <button class='btn' id='btn9'>9</button>
//         </div>
//         <script src="js/buttonsGrid.js" type="text/javascript"></script>
//     </body>
// </html>


const button = document.getElementById('btn5');

button.addEventListener('click',  () => {
    const btn1 = document.getElementById('btn1').innerHTML;
    document.getElementById('btn1').innerHTML = document.getElementById('btn4').innerHTML
    document.getElementById('btn4').innerHTML = document.getElementById('btn7').innerHTML
    document.getElementById('btn7').innerHTML = document.getElementById('btn8').innerHTML
    document.getElementById('btn8').innerHTML = document.getElementById('btn9').innerHTML
    document.getElementById('btn9').innerHTML = document.getElementById('btn6').innerHTML
    document.getElementById('btn6').innerHTML = document.getElementById('btn3').innerHTML
    document.getElementById('btn3').innerHTML = document.getElementById('btn2').innerHTML
    document.getElementById('btn2').innerHTML = btn1
})