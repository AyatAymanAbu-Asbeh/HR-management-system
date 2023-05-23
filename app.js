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


