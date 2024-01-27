// // davaleba 1
// let browser = 'Opera';

// if (browser === 'Edge') {
//     alert("You've got the Edge!");
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//     alert('Okey we support these browsers too');
// } else {
//     alert('We hope that this page looks ok!');
// }


//davaleba 2
let first_num = Number(prompt("შეიყვანეთ პირველი ციფრი:"));
let second_num = Number(prompt("შეიყვანეთ მეორე ციფრი:"));
let mark = prompt("ჩამოთვლილი სიმბოლოდან შეიყვანეთ ერთ-ერთი (+, -, *, /):");
let final;
if(mark === "+"){
    final = first_num + second_num;
}else if(mark === "-"){
    final = first_num - second_num;
}else if(mark === "*"){
    final = first_num * second_num;
}else{
    final = first_num / second_num;
}
alert(final);