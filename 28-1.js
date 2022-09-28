

let Height = prompt("قد را بر حسب متر وارد کنید   ");
let Weight = prompt("وزن را بر حسب کیلو گرم وارد کنید");
bmi = Weight /( Height * Height )
prompt("عدد حجم توده بدن شما عبارتست از ", bmi);
if (bmi< 18.8) {
    alert("کمبود وزن" );
  }
  if (bmi< 18.5) {
    alert("کمبود وزن" );
  }
  if (bmi > 18.8 & bmi < 24.9) {
    alert("نرمال" );
  }
  if (bmi > 25 & bmi < 29) {
    alert("اضافه وزن" );
  }
  if (bmi > 30 & bmi < 34.9) {
    alert("چاق" );
  }
  if (bmi > 34) {
    alert("خیلی چاق" );
  }

console.log(bmi);