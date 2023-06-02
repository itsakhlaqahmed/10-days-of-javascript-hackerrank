// #btn {
//     width: 96px;
//     height: 48px;
//     font-size: 24px;
// }

// <!-- Enter your HTML code here -->
// <!DOCTYPE html>

// <html>
//     <head>
//         <meta charset="utf-8">
//         <title>Button</title>
//          <link rel="stylesheet" href="css/button.css" type="text/css">
//     </head>
//     <body>
//         <script src="js/button.js" type="text/javascript"></script>
//     </body>
// </html>


var button = document.createElement('button');
button.id = 'btn';
button.innerHTML = 0;
document.body.appendChild(button);

button = document.getElementById('btn');
button.addEventListener('click', () => {
    button.innerHTML = parseInt(button.innerHTML) + 1;
})