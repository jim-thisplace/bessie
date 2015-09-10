var bess         = Snap.select('#bessie');
var handlebars   = bess.select('#XMLID_25_');
var front        = bess.select('#XMLID_60_');
var reartriangle = bess.select('#XMLID_58_');
var seatpost     = bess.select('#XMLID_29_');

var DURATION = 500;

function transform(el, transformString) {
    el.animate({ transform : transformString }, DURATION, mina.easeinout);
}

function rotate(degree, pivot) {
    return 'r' + [degree, pivot];
}

function translate(translateX, translateY) {
    return 't' + [translateX, translateY];
}

function scale(scaleX, scaleY) {
    return 's' + [scaleX, scaleY];
}

function matrix(a, b, c, d, e, f) {
    return 'm' + [a, b, c, d, e, f];
}

function close() {
    transform(seatpost, translate(4, 35));
    transform(reartriangle, rotate(-185, [85, 107.4]));
    transform(front, scale(-1, 1) + translate(77, 0));
    transform(handlebars, rotate(180, [188, 61.8]));
}

function open() {
    transform(seatpost, translate(0, 0));
    transform(reartriangle, rotate(0, [85, 107.4]));
    transform(front, scale(1, 1) + translate(0, 0));
    transform(handlebars, rotate(0, [188, 61.8]));
}

var isOpen = true;

bess.click(function () {
    if (isOpen) {
        close();
        isOpen = false;
    } else {
        open();
        isOpen = true;
    }
});