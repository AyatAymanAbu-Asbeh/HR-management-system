'use strict'



let Ghazi = {
    Employee_ID: 1000,
    Full_Name: "	Ghazi Samer",
    Department: "Administration",
    Level: "Senior",
    Image:'https://www.example.com/images/img123.jpg',
    
    Salary: function() {
            let a = Math.floor(Math.random() * 500) + 1500;
            //console.log(a);
            return a -7.5;
        }
        

}
console.log(Ghazi);


let Lana={
    Employee_ID:1001,
    Full_Name:"	Lana Ali",
    Department:"Finance",
    Levle:"Senior",
    Image:'https://www.example.com/images/img123.jpg',
    Salary:
    function() {
        let a = Math.floor(Math.random() * 500) + 1500;

        return a-7.5;
    }
    
}
console.log(Lana);


let Tamara={
    Employee_ID:1002,
    Full_Name:"Tamara Ayoub",
    Department:"Marketing",
    Levle:"	Senior",
    Image:'https://www.example.com/images/img123.jpg',
    Salary:function() {
        let a = Math.floor(Math.random() * 500) + 1500;

        return a-7.5;
    }
    
}
console.log(Tamara);


let safi={
    Employee_ID:1003,
    Full_Name:"	Safi Walid",
    Department:"Administration",
    Levle:"Mid-Senior",
    Image:'https://www.example.com/images/img123.jpg',
    Salary:function() {
        let a = Math.floor(Math.random() * 500) + 1000;

        return a-7.5;
    }
    
}

console.log(safi);

let Omar={
    Employee_ID:1004,
    Full_Name:"Omar Zaid",
    Department:"Development",
    Levle:"Senior",
    Image:'https://www.example.com/images/img123.jpg',
    Salary:function() {
        let a = Math.floor(Math.random() * 500) + 1500;

        return a-7.5;
    }
    }
    console.log(Omar);



let Rana={
    Employee_ID:1005,
    Full_Name:"Rana Saleh",
    Department:"Development",
    Levle:"Junior",
    Image:'https://www.example.com/images/img123.jpg',
    Salary:function() {
        let a = Math.floor(Math.random() * 500) + 500;

        return a-7.5;
    }
}


console.log(Rana.Full_Name);
console.log(Rana.Salary());
let Hadi={
    Employee_ID:1006,
    Full_Name:"	Hadi Ahmad",
    Department:"Finance",
    Levle:"Mid-Senior",
    Image:'https://www.example.com/images/img123.jpg',
    Salary:function() {
        let a = Math.floor(Math.random() * 500) + 1000;

        return a-7.5;
    }
}
console.table(Hadi);

document.getElementById("demo").innerHTML = `Employee Name :${Ghazi.Full_Name}<br>Employee Salary :${Ghazi.Salary()}`
document.getElementById("demo1").innerHTML = `Employee Name :${Lana.Full_Name}<br>Employee Salary :${Lana.Salary()}`
document.getElementById("demo2").innerHTML = `Employee Name :${Tamara.Full_Name}<br>Employee Salary :${Tamara.Salary()}`
document.getElementById("demo3").innerHTML = `Employee Name :${safi.Full_Name}<br>Employee Salary :${safi.Salary()}`
document.getElementById("demo4").innerHTML = `Employee Name :${Omar.Full_Name}<br>Employee Salary :${Omar.Salary()}`
document.getElementById("demo5").innerHTML = `Employee Name :${Rana.Full_Name}<br>Employee Salary :${Rana.Salary()}`
document.getElementById("demo6").innerHTML = `Employee Name :${Hadi.Full_Name}<br>Employee Salary :${Hadi.Salary()}`