// // let a = prompt("Введите а");
// // let b = prompt("Введите b");
// // let c = prompt("Введите c");
// let functions = [
//     [-4, 4, 1],
//     [-6, 6, 1],
//     [-8, 8, 1],
//     [-5, 5, 1],
//     [-7, 7, 1],
//     [-9, 9, 1],
//     [-10, 10, 1]
// ];
// function printTable(from, to, step, func) {
//     if (func === undefined) {
//         return;
//     }
//     from = from;
//     to = to;
//     step = step || 1;
//     document.write("<table border='1' cellspacing='0'>");
//     for (var x = from; x <= to; x += step) {
//         document.write("<tr>");
//         document.write("<td>" + x + "</td>");
//         document.write("<td>" + func(x) + "</td>");
//         document.write("</tr>");
//     }
//     document.write("</table>");
// }

// function quadratic(x) {
//     return x * x;
// }


// let rand = Math.floor(Math.random() * functions.length);
// printTable(functions[rand][0], functions[rand][1], functions[rand][2], quadratic);
// // printTable(a = prompt("Введите а"), b = prompt("Введите b"), c = prompt("Введите c"), quadratic);

// // printTable(-4, 4, 1, quadratic);

// // printTable(-4, 4, 0.1, Math.sin);

// // printTable(0, 10, 2, function (x) { return x / 2; });

let functions = [square, double, sin, cos];

function printTable(from, to, step, func) {
    if (func === undefined) {
        return;
    }
    from = from;
    to = to;
    step = step || 1;
    document.write("<table border='1' cellspacing='0'>");
    for (var x = from; x <= to; x += step) {
        document.write("<tr>");
        document.write("<td>" + x + "</td>");
        document.write("<td>" + func(x) + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}

function square(x) {
    return x * x;
}
function double(x) {
    return x * 2;
}
function sin(x) {
    return Math.sin(x);
}
function cos(x) {
    return Math.cos(x);
}

let rand = Math.floor((Math.random() * functions.length));
console.log(rand);
// printTable(-4, 4, 1, quadratic);
printTable(-4, 4, 1, functions[rand]);