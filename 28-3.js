let n1 = Number(prompt("عدد اول را وارد کنید"));
let n2 = Number(prompt("عدد دوم را وارد کنید"));
let n3 = Number(prompt("عدد سوم را وارد کنید"));

if ((n1+n2 > n3 ) && ( n2+n3>n1 ) && (n3+n1>n2)) {
    alert("مثلث تشکیل می شود" );
}
else  {
    alert("مثلث تشکیل نمی شود" );
}

