// // davaleba 1
let browser = 'Opera';

if (browser === 'Edge') {
    alert("You've got the Edge!");
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    alert('Okey we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}


// //davaleba 2
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


//davaleba 3
while (true) {
    let userInput = prompt("შეიყვანეთ რიცხვი :");
    let number = parseFloat(userInput);
    if (!isNaN(number)) {
        break;
    } else {
        alert("შეცდომა! გთხოვთ შეიყვანოთ რიცხვი.");
    }
}


//davaleba 4
let userInput = Number(prompt("შეიყვანეთ რიცხვი:"));
let number = parseInt(userInput);

if (!isNaN(number)) {
    let sum = 0;
    let absoluteNumber = Math.abs(number);
    while (absoluteNumber > 0) {
        sum += absoluteNumber % 10; 
        absoluteNumber = Math.floor(absoluteNumber / 10); 
    }
    alert(`ციფრების ჯამია: ${sum}`);
} else {
    console.log("შეცდომა! გთხოვთ შეიყვანოთ სწორი მონაცემი.");
}