document.getElementById("calc-pythag").addEventListener("click", pythagorean);

function pythagorean() {
    //Get side lengths as strings
    let a = document.getElementById("side-a").value;
    let b = document.getElementById("side-b").value;
    let c = document.getElementById("side-c").value;

    //Make it convert to NaN instead of 0 if the input is blank. This way we can tell the
    // difference between a blank input and an input of 0.
    if (a.length == 0)
        a = 'NaN';
    if (b.length == 0)
        b = 'NaN';
    if (c.length == 0)
        c = 'NaN';

    //Convert a,b,c into numbers
    a = Number(a);
    b = Number(b);
    c = Number(c);

    //Make a string to simplify checking which inputs are blank.
    let blanks_str = (isNaN(a) ? '0' : '1') + (isNaN(b) ? '0' : '1') + (isNaN(c) ? '0' : '1');
    switch (blanks_str) {
        case '011': // a is blank
            a = Math.sqrt(c ** 2 - b ** 2);
            var u = 0;
            break;
        case '101': // b is blank
            b = Math.sqrt(c ** 2 - a ** 2);
            var u = 1;
            break;
        case '110': //c is blank
            c = Math.sqrt(a ** 2 + b ** 2);
            var u = 2;
            break;
        default:
            break;
    }
    if (typeof u !== 'undefined') { 
        let abc = [a, b, c];
        let abc_names = ['a', 'b', 'c'];
        document.getElementById(`side-${abc_names[u]}`).value = abc[u];
    }
}