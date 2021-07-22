// import { Display } from 'rot-js';

// var o = {
//     width: 100,
//     height: 50,
// };
// var d = new Display(o);
// document.body.appendChild(d.getContainer());

// for (var i = 0; i < o.width; i++) {
//     for (var j = 0; j < o.height; j++) {
//         if (!i || !j || i + 1 == o.width || j + 1 == o.height) {
//             d.draw(i, j, '#', 'gray', undefined);
//         } else {
//             d.draw(i, j, '.', '#666', undefined);
//         }
//     }
// }
// d.draw(o.width >> 1, o.height >> 1, '@', 'goldenrod', undefined);

import Game from './Game';

window.addEventListener(
    'keydown',
    function (e) {
        // space and arrow keys
        // if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
        // }
    },
    false
);
// load the game
const game = new Game();

window.onload = () => {
    const display = game.initDisplay();
    document.body.appendChild(display.getContainer());
    game.run();
};
// focus on the canvas
window.focus();
