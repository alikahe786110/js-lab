let n1 = Number(prompt("عدد اول را وارد کنید"));
let n2 = Number(prompt("عدد دوم را وارد کنید"));
let n3 = Number(prompt("عدد سوم را وارد کنید"));

let vasat=0;

let min =n1;
if (n2<min) {
    min=n2;
}
if (n3<min) {
    min=n3;
}

let max = n1;
if (n2>max) {
    max=n2;
}
if (n3>max) {
    max=n3;
}


alert ("کوچکترین عدد عبارتست از : " + min);
alert ("بزرگترین عدد عبارتست از : " + max);

if (n1 != min && n1 != max) {
    alert ("عدد وسط عبارتست از : " + n1); 
}
if (n2 != min && n2 != max) {
    alert ("عدد وسط عبارتست از : " + n2); 
}
if (n3 != min && n3 != max) {
    alert ("عدد وسط عبارتست از : " + n3); 
}
