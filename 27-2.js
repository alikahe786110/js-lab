

let Height = prompt("قد را بر حسب متر وارد کنید   ");
let Weight = prompt("وزن را بر حسب کیلو گرم وارد کنید");
bmi = Weight /( Height * Height )
prompt("عدد حجم توده بدن شما عبارتست از ", bmi);
if (bmi< 18.8) {
    prompt("","کمبود وزن" );
  }
  if (bmi< 18.5) {
    prompt("","کمبود وزن" );
  }
  if (bmi > 18.8 & bmi < 24.9) {
    prompt("","نرمال" );
  }
  if (bmi > 25 & bmi < 29) {
    prompt("","اضافه وزن" );
  }
  if (bmi > 30 & bmi < 34.9) {
    prompt("","چاق" );
  }
  if (bmi > 34) {
    prompt("","خیلی چاق" );
  }

console.log(bmi);