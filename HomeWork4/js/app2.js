// Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?

const koeff = 0.305;

let distanceFirst = parseFloat(prompt("enter the first distance (km)", 0.0));
let distanceSecond = parseFloat(prompt("enter the second distance (fut)", 0.0));

let distanceFirstInMeters = distanceFirst * 1000;
let distanceSecondInMeters = distanceSecond * koeff;

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
