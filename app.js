
'use strict';

function New(id, name, department, level, image) {
    this.Employee_ID = id;
    this.Full_Name = name;
    this.Department = department;
    this.Level = level;
    this.Image = image;
}
New.prototype.salarysenior = function () {
    let a = Math.floor(Math.random() * 500) + 1500;

    document.write(a);
};
New.prototype.salarymidsnior =function() {
    let a = Math.floor(Math.random() * 500) + 1000;
    document.write(a);
};
New.prototype.salaryJunior=function() {
    let a = Math.floor(Math.random() * 500) + 500;


    document.write(a);
};
/*New.prototype.clcsalary = function () {
    if (this.Level == "Senior") {
        let a = Math.floor(Math.random() * 500) + 1500;
        document.write(a);
    }
    elseif(this.Level == "Mid-Senior")
    {
        let a = Math.floor(Math.random() * 500) + 1000;
        document.write(a);
    }
    elseif(this.Level == "Junior")
    {
        let a = Math.floor(Math.random() * 500) + 500;
        document.write(a);
    }

};*/




let Ghazi = new New(1000, "Ghazi Samer", "Administration", "Senior", 'https://www.example.com/images/img123.jpg');
console.log(Ghazi);
let Lana = new New(1001, "	Lana Ali", "Finance", "Senior", 'https://www.example.com/images/img123.jpg');
console.log(Lana);
let Tamara = new New(1002, "Tamara Ayoub", "Marketing", "Senior", 'https://www.example.com/images/img123.jpg');
console.log(Tamara);
let saif = new New(1003, "	Safi Walid", "Administration", "Mid-Senior", 'https://www.example.com/images/img123.jpg');
console.log(saif);
let Omar = new New(1004, "Omar Zaid", "Development", "Senior", 'https://www.example.com/images/img123.jpg');
console.log(Omar);
let Rana = new New(1005, "Rana Saleh", "Development", "Junior", 'https://www.example.com/images/img123.jpg');
console.log(Rana);
let Hani = new New(1006, "	Hadi Ahmad", "Finance", "Mid-Senior", 'https://www.example.com/images/img123.jpg');
console.log(Hani);



document.write(`Employee name : ${Ghazi.Full_Name}<br> Department : ${Ghazi.Department} <br> Employee salary :`); Ghazi.salarymidsnior();
document.write(`<br></br> Employee name : ${Lana.Full_Name}<br> Department : ${Lana.Department} <br> Employee salary :`);Lana.salarysenior();
document.write(`<br></br>Employee name : ${Tamara.Full_Name}<br> Department : ${Tamara.Department} <br> Employee salary :`);Tamara.salarysenior();
document.write(`<br></br>Employee name : ${saif.Full_Name}<br> Department : ${saif.Department} <br> Employee salary :`);saif.salarymidsnior();
document.write(`<br></br>Employee name : ${Omar.Full_Name}<br> Department : ${Omar.Department} <br> Employee salary :`);Omar.salarysenior();
document.write(`<br></br>Employee name : ${Rana.Full_Name}<br> Department : ${Rana.Department} <br> Employee salary :`);Rana.salaryJunior()
document.write(`<br></br>Employee name : ${Hani.Full_Name}<br> Department : ${Hani.Department} <br> Employee salary :`);Hani.salarymidsnior(); 
