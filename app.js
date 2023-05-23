
'use strict';
function New(id,name,department,level,image){
    this.Employee_ID=id;
    this.Full_Name=name;
    this.Department=department;
    this.Level=level; 
    this.Image=image;
    }
    New.prototype.salary1=function() {
         let a = Math.floor(Math.random() * 500) + 1500;
        return a;
        }
    
    
let Ghazi=new New(1000,"Ghazi Samer","Administration", "Senior",'https://www.example.com/images/img123.jpg');
console.log(Ghazi);
document.write(New.Ghazi);
console.log(New.salary1);

let Lana=new New(1001,"	Lana Ali","Finance","Senior",'https://www.example.com/images/img123.jpg');
console.log(Lana);
let Tamara= new New(1002,"Tamara Ayoub","Marketing","	Senior",'https://www.example.com/images/img123.jpg');
console.log(Tamara);
let saif=new New(1003,"	Safi Walid","Administration","Mid-Senior",'https://www.example.com/images/img123.jpg');
console.log(saif);
let Omar=new New(1004,"Omar Zaid","Development","Senior",'https://www.example.com/images/img123.jpg');
console.log(Omar);
let Rana=new New(1005,"Rana Saleh","Development","Junior",'https://www.example.com/images/img123.jpg');
console.log(Rana);
let Hani=new New(1006,"	Hadi Ahmad","Finance","Mid-Senior",'https://www.example.com/images/img123.jpg');
console.log(Hani);



//document.write(`Employee name:${this.}`);
//Employee name: Ghazi Samer
//Department: Administration
//Employee salary: 1728


=======
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

