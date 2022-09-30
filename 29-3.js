

function fsum() {
    let vsum=0;
    let vnum=1;
    while (vnum !== 0 ) {
        vnum = +prompt("عدد وارد کن");
        vsum=vsum+vnum;
    }
    return vsum; 
}

let rslt = fsum();
alert("حمع اعداد عبارتست از : " + rslt);


console.log(rslt);
