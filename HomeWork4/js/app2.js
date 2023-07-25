// Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?

const koeffForKm = 1000;
const koeffForFunts = 0.305;

let distanceFirst = parseFloat(prompt("enter the first distance (km)", 0.0));
let distanceSecond = parseFloat(prompt("enter the second distance (fut)", 0.0));

let distanceFirstInMeters = distanceFirst * koeffForKm;
let distanceSecondInMeters = distanceSecond * koeffForFunts;

if (distanceFirstInMeters > distanceSecondInMeters) {
  console.log(
    `Відстань у км ${distanceFirstInMeters}(м) більша, ніж відстань у футах ${distanceSecondInMeters} (м)`
  );
} else if (distanceFirstInMeters < distanceSecondInMeters) {
  console.log(
    `Відстань у км ${distanceFirstInMeters}(м) менша, ніж відстань у футах ${distanceSecondInMeters} (м)`
  );
} else {
  console.log("відстані рівні");
}
