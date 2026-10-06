/*let age = 61;
if(age>=18){
    if(age<=60){
        console.log('vote')
    }else{
        console.log('cant vote')
    }
}*/



/* let age = 61;
 if((age>=18)&&(age<=60)){
     console.log('you can vote')
 }else{
     console.log('you cant vote')
 }*/


/*let num = 5
if(num===0){
    console.log("zero")
} else if(num>0){
  console.log("postive")
} else{
    console.log("negative")
}*/

/* let tem = 29
 if(tem>=30){
     console.log("hot")
 }else {
     console.log("normal")
 }*/

/*let num=3
  if(num===1){
      console.log("monday")
  }else if(num===2){
      console.log("tuesday")
  }else if(num===3){
      console.log("wednesday")
  }*/




// JAVA SCRIPT 10 QUESTIONS 



// 1.find positive and negative using if

/* let num=-1
 if(num>0){
     console.log("positive")
 } if(num<0){
     console.log("negative")
 }*/

// 2.find even or odd using if else

/* let num=10
 if(num%2==0){
     console.log("even")
 }else{
     console.log("odd")
 }*/

/*let num=7
if(num%2==1){
    console.log("odd")
}else{
    console.log("even")
}*/


//3.find which is greater

/*let num1=20
let num2=40
if(num1>num2){
   console.log("num1 is graeter")
}else{
    console.log("num2 is greater")
}*/

// 4.temperature question if tem is greater than 30 print hot and if low print normal using if-else

/*let tem=35
if(tem>30){
    console.log("hot")
}else{
    console.log("normal")
}*/



//5.find postitive negative and zero using if-else

/*let num=7
if(num==0){
    console.log("zero")
}else if(num>0){
    console.log("positive")
}else if(num<0){
    console.log("negative")
}*/


//6.find day if 1= monday , 2= tuesday, 3= wednesday using if-else


/* let num=2
 if(num==1){
     console.log("monday")
 }else if(num==2){
     console.log("tuesday")
 }else if(num==3){
    console.log("wednesday")
 }*/

//7.age question print adult or minor using if

/*let age=19
if(age>=18){
    console.log("adult")
} if(age<=17){
    console.log("minor")
}*/


//8.find positive negative and even and odd using else if

/*let num= 10
if(num>0){
    console.log("positive")
}else if(num<0){
    console.log("negative")
} 
if (num%2==0){
    console.log("even")
}else{
    console.log("odd")
}*/


9.//using Ternary Operator create a variable is loggedin if loggedin print welcome otherwise please login


/*let isloggedin=true;
let Ayush= isloggedin ? console.log("welcome") : console.log("please login")*/




10.//using nested if create let username is ayush and password is 1234 first check user name if correct then check password print login succesfully if both correct


/*let username = "Ayush"
let password = 1234
if(username==="Ayush"){
    if(password===1234){
    console.log("login successfully")
}else{
    console.log("incorrrct username")
}
}else{
    console.log("incorrect password")
}*/



//For Loop



/*for (let i=1; i<=5 ; i++){
    console.log("ayush")
}*/



/*for(let i=1; i<=7; i++){
    console.log("Ram");
}
console.log("loop has ended");*/



//Calucate Sum of 1 To 5

/*let sum=0;
for(let i=1; i<=7; i++){
    sum=sum+i;
}
console.log("sum=",sum);
console.log("loop has ended");*/




//For Loop


/*for(let i=1 ; i<=5; i++){
   console.log("Ayush");
}
console.log("loop has ended");*/


//Calculate sum of 1 To 5


/*let sum=0;
for(let i=1; i<=5; i++){
    sum=sum+i;
}
console.log("sum=", sum);
console.log("loop has ended")*/



//While Loop



/*let  i = 1;
while(i<5){
    console.log("Ayush"); i++;
}*/



//Do- While loop



/*let i = 1;
do {
    console.log("i=", i); 
    i++;
} while (i<=5);*/


/*let i =20;
do{
    console.log("Ayush");i++;
} while(i<=10);*/


//For-of loop


/*let str ="Ayush";
for(let i of str) {
    console.log("i=",i);
}*/


/*let str="Ram";
let size=0;
for(let i of str){
    console.log("i=",i); size++;
}
console.log("string size=",size);*/



//For-in Loop


/*let student = {
    name: "Ayush",
    age: 20,
    cgpa: 7.5,
    ispass: true
};
  for (let key in student){
    console.log("key=", key, "value=", student[key]);
}*/



//Print all even number from 0 to 100


/*for (let num=0; num<=100; num++){
    if(num%2===0){
        console.log("num=",num);
}
}*/



/*let x= "Ram";
console.log(typeof x);*/

/*let x= 5;
console.log(typeof x);*/

/*let x= true;
console.log(typeof x);*/


/*let x= null;
console.log(typeof x);*/


/*let a= undefined;
console.log(typeof a);*/


/*let a = 5
let b = '5'
console.log(a==b);// true because double equal to only check value is same or not*/

/*let a= 5
let b ='5'
console.log(a===b)//false because triple equal check value and type both same then give true*/


/*let a=7
let b='7'
console.log(a!=b)//false*/

/*let x= 7;
let y= '7'
console.log(x!==y);//true*/


/*let x= 7
let y= 6
console.log(x>y);//true*/

/*let x= 7
let y= 9
console.log(x<y)*/


/*let x= 7;
let y= 7;
console.log(x>=y);//true*/

/*let x= 7;
let y= '5'
console.log(x<=y);//false */

/*let a=7
let b=5
if(a>=b){
    console.log("a is greater ")
}*/

/*let a=5
let b=7
if(a>=b){
    console.log("a is greater")
}else{

} console.log('b is greater')*/


/*let age=18;
age>=18 ? console.log("vote") : console.log("cant vote");*/


/*let age=17;
age>=18 ? console.log("vote") : console.log("cant vote");*/



/*let marks = 70
if(marks>=80){
    console.log("grade a")
}else if(marks>=70){
    console.log("grade b")
}else if(marks>=60){
    console.log("grade c")
}else{console.log("grade d")}*/


/*let marks = 99
if((marks<=100) && (marks>=90)){
    console.log("grade a")
}else
    console.log('grade b')
}*/


//Loops
//For Loop

/*for (let i = 1; i <= 10; i++) {
    console.log("5", "*", i, "=", 5 * i)
}*/



// 1 to 100 even number

/*for(let num=1; num<=100; num++){
    if(num%2===0){
        console.log("num=",num);
    }
}*/


//1 to 100 odd number

/*for(let num=1; num<=100; num++){
    if (num%2!==0){
        console.log("num=",num);
    }
}*/


//Switch statement


/*let grade="A"; 
switch(grade){
    case "A":
        console.log(" very good");
        break;
        case"B":
        console.log(" good");
        break;
        default:
        console.log("poor");
}*/



/*let marks="88 ";
switch(true){
    case marks >=90:
        console.log("grade A")
        break;
        case marks >=80:
            console.log("grade B")
            break;
            case marks >=70:
            console.log("grade c")
            break;
            case marks >=60:
                console.log("grade d")
                break;
                default:
                console.log("grade E");
}*/


/*let num=7;
switch(num){
    case 1:
    console.log("monday");
    break;
    case 2:
        console.log("tuesday");
        break;
        case 3:
        console.log("wednesday");
        break;
        case 4:
        console.log("thrusday");
        break;
        case 5:
        console.log("friday");
        break;
        case 6:
        console.log("saturady");
        break;
        default:
        console.log("sunday");
}*/


/*let marks=70;
switch(true){
    case marks<=50:
        console.log("grade D");
        break;
        case marks<=60:
            console.log("grade C");
            break;
            case marks<=80:
                console.log("grade B")
                break;
                default:
                    console.log("grade A")
}*/


//  find even number between 1 to 100

/*for(let num=1; num<=100; num++ ){
   if(num%2===0){
    console.log("num=",num);
   }
}*/


// find even no. between 1 to 50

/*for(let num=1; num<=50; num++){
    if(num%2==0){
        console.log("num=",num);
    }
}*/


//find even no. between 1 to 70

/*for(let num=1; num<=70; num++){
    if(num%2===0){
        console.log("num=",num);
    }
}*/



// find odd no. between 1 to 90

/*for(let num=1; num<=90; num++){
    if(num%2!==0){
        console.log("num=",num);
    }
}*/


//find odd no. between 1 to 70

/*for(let num=1; num<=70; num++){
    if(num%2!==0){
        console.log("num=",num);
    }
}*/


/*for(let num=1; num<=150; num++){
    if(num%2===0){
        console.log("num=",num);
    }
}*/


/*for(let num=1; num<=100; num++){
    if(num%2===0){
        console.log("num=",num);
    }
}*/



/*for(let num=1; num<=100; num++){
    if(num%2!==0){
        console.log("num=",num);
    }
}*/



/*for(let num=1; num<=200;  num++){
    if(num%2!==0){
        console.log("num=",num);
    }
}*/


//Print in reverse


/*for(let i=50; i>=0; i--){
    console.log(i)
}*/


// Print 20 table in reverse


/*for (let i = 10; i >= 1; i--) {
    console.log("20", "*", i, "=", 20* i)}*/


/*for(let num=1; num<=50; num++){
    if(num%2===0){
        console.log("num=",num);
    }
}*/


//Find sum of 1 to 10


/*let sum=0;
    for(let i=1; i<=10; i++){
        sum=sum+i;
    }
            console.log("sum=",sum);*/



//how  to find sum of all even numbers from 1 to 100


/*let sum=0;
for(let num=1; num<=100; num++){
if(num%2===0){
sum=sum+num;
}
}
console.log(sum);*/

/*let sum=0;
for(let num=1; num<=100; num++){
    if(num%2!=0){
        sum=sum+num;
}
}
console.log(sum);*/



//While Loop

/*for(let i=1; i<=10; i++){
  console.log(i)
}*/


/*let i=1;
while(i<=10){
    console.log(i);i++;
}*/




/*let fizzBuzz = function(n) {
    let result=[];

    for(let i =1; i<=n; i++) {
        if(i%3===0 && i%5===0) {
            result.push("FizzBuzz");
        }
        else if(i%3===0){
            result.push("Fizz");
        }
        else if(i%5===0){
            result.push("Buzz");
        }
         else {
          result.push(i.toString());
    }
 
}
return result;
};
console.log(fizzBuzz(15));


/*let answer = fizzBuzz(15);
for(let item of answer){
console.log(item);
}*/



//ARRAY


/*let arr=[1,2,3,4,5]
console.log (arr[4])*/


/*let arr=[1,2,3,4,5,6,7]
console.log(arr[6])*/


/*let arr=[1,2,3,4,5,6]
for(let i=0; i<=5; i++){
    console.log(arr[i])
}*/

/*let arr=[1,2,3,4,5,6]
for(let i=0; i<=5; i++){
    console.log(arr[i])
}*/


/*let arr=[1,2,3,4,5,6,7,8,9]
for(let i=0; i<=arr.length; i++){
    console.log(arr[i])
}*/



/*let arr =[1,2,3,4,5]
arr[1]=3
console.log(arr.length)*/




/*let arr =[1,2,3,4,5]
arr[1]=3
console.log(arr)*/



/*let arr=[1,1,1,2,3,4,4,5,1]
console.log(arr.length-1)
arr[arr.length-1]*/



/*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}*/



/*let arr=[5,10,15,16,17]
for(let i=4;  i>=0; i--){
    console.log(arr[i])
}*/


/*let arr=[5,10,15,16,17]
for(let i=arr.length-1; i>=0; i--){
    console.log(arr[i])
}*/


/*let sum=0;
let arr=[5,10,15,16,17]
for(let i=0; i<=4; i++){
    sum=sum+arr[i];
}
console.log(sum)*/


/*let sum=0;
let arr=[5,10,15,16,17]
for(let i=arr.length-1; i>=0; i--){
    sum=sum+arr[i];
}
console.log(sum)*/



/*let arr_1=['Mango', 'orange', 'cherry','banana']
for(let i=0; i<=3; i++){
    console.log(i,arr_1[i])
}*/




// Javascript Array 7 Questions

//1. Find  the average

/*let sum=0;
let marks=[70,80,65,90,75];

for(let i=0; i<marks.length; i++){
    sum=sum+marks[i]
}
average = sum/marks.length;
console.log(average);*/



// 2.Count even numbers

/*let even=0;
let num=[10,15,22,31,40,55,60];
for(let i=0; i<num.length; i++){
    if(i%2===0){
      even++;
    }
}
console.log(even);*/



//3. Count odd numbers


/*let odd=0;
let num=[10,15,22,31,40,55,60]
for(let i=0; i<num.length; i++){
    if(i%2!=0){
        odd++;
    }
}
console.log(odd);*/


//4.largest number

/*let largestnumber=[0];
let num=[25,10,45,30,60,15]
for(let i=1; i<num.length; i++){
    if(num[i] > largestnumber){
        largestnumber=num[i];

    } 
}
console.log(largestnumber);*/



// 5.Smallest. number

/*let arr=[10,20,30,40,50,5]
let smallest=arr[0]
for(let i=1;i<=arr.length-1;i++){
    if(arr[i]<smallest){
        smalllest=arr[i]
    }
}
console.log(smallest)*/




//6.greater than 50

/*let num=[25,65,40,80,55,30,90]
for(let i=0; i<num.length; i++){
    if(num[i]>50)
    console.log(num[i])
}*/


//7.Find a particular element


/*let num=[10,20,30,40,50]
let target=30;

for(let i=0; i < num.length; i++){
    if(num[i]===target){
        console.log("Found at index" + i);
        break;
    }
}*/


//Array Methods
// .Push = Adding in last

/*let array=[1,2,3,4,5]
array.push(6)
console.log(array)*/


/*let arr=[2,3,4,5,6,7,8,9]
let res=[]
for(i=0; i<arr.length; i++){
    if(arr[i]%2===0){
    res.push(arr[i])
}
} console.log(res)*/


/*let arr=[2,3,4,5,6,7,8,9]
let res=[]
for(i=0; i<arr.length; i++){
    if(arr[i]%2!=0){
    res.push(arr[i])
}
} console.log(res)*/


// unshift method-Add in starting

/*let arr=[1,2,3,4,5,6]
arr.unshift(10)

console.log(arr)*/


//Shift method- remove first number

/*let arr=[1,2,3,4,5,6]
arr.shift(10)
console.log(arr)*/


// .indexof - Finding index position


/*let arr=[1,2,3,4,5,6]
console.log(arr.indexOf(5))*/


// answer is 0 because  two common number present so it take which is present first so we want to find index 1 so two 1 present so jo pahle aayega uska index print hoga


/*let arr=[1,2,1,3,4,3,6]
console.log(arr.indexOf(1))*/


// answer is -1 because if jo index hum find kr rahe oo agar arr me nhi hoga to -1 hi dega 


/*let arr=[1,2,3,4,5]
console.log(arr.indexOf(6))*/


//Join method for join number like 2345 removed , not add join together only


/*let arr=[2,3,4,5]
console.log (arr.join(','))
console.log(arr.join (''))*/



/*let arr=[1,2,3,4,5]
console.log(arr.toString())*/


/*let arr=[1,2,3,4,5]
let req=arr.toString()
console.log(typeof req)*/



/*let arr=[1,2,3,4,5]
console.log(arr.slice(1,3))*/


/*let arr=[1,2,3,4,5]
console.log(arr.splice(1,2))*/


/*let arr1=[1,2,3,4,5]
 let arr2=[6,7,8,9,0]
console.log(arr1.concat(arr2))*/


/*let arr=[1,2,3,4,5]
console.log(arr.reverse())*/


/*let arr=[9,6,7,8]
console.log(arr.sort())*/



//Nested Loop


/*for(let i=1; i<=10; i++){
    for(let j=0; j<=10; j++){
console.log(j)
    }
        
}*/


//Star pattern

/*for(let i=1; i<=5; i++){
    let star=""
for(let j=1; j<=5; j++){
    star+="*"
}
console.log(star)
}*/



/*for(let i=1; i<=5; i++){
    let num=""
    for(let j=1; j<=1; j++){
        num+="12345"
    }
    console.log(num)
}*/

/*let num=12
if(num%2===0){
    console.log("even");
}else{
    console.log("odd");
}*/


/*let num=[10,20,30,40,50]
for(let i=0; i<num.length; i++){
    if(num[i]>25){
        console.log(num[i])
    }
}*/


/*for (let i = 1; i <=5; i++) {
    let star = "";
    for (let j = 1; j<=i; j++) {
        star += "*"
    }
     console.log(star)
}*/


//Method 1

/*for (let i = 1; i <=5; i++) {
    let star = "";
    for (let j = i; j<=5; j++) {
        star += "*"
    }
     console.log(star)
}*/


//Method 2

/*for(let i=5; i>=1; i--){
let star=""
for(let j=i; j>=1; j--){
    star+="*"
}
console.log(star)
}*/



//1 to 5 table 

/*for (let i = 1; i <= 5; i++) {
for(let j=1; j<=10; j++){
    console.log(i*j)
}
console.log("")
}*/



//Reverse table 1 to 5

/*
for (let i = 5; i >= 1; i--) {
for(let j=10; j>=1; j--){
    console.log(i*j)
}
console.log("")
}*/


//print sum of 1 to 10 from while loop

/*let i=1
let sum=0
while(i<=10){
    sum=sum+i;
    i++;
}console.log(sum)*/



/*let arr1=[1,2,3,4,5,6]
let arr2=[7,8,9,0]
console.log(arr1.concat(arr2))*/

/*let arr=[1,2,3,4,5]
console.log(arr.join('-'))
console.log(arr.join(''))*/

/*let arr=[1,9,3,5,4,8]
console.log(arr.sort())*/



// starting index include krega and ending index se 1 minus means ending index se 1 kam tak print krega

/*let arr=[10,15,20,9,8,1]
console.log(arr.slice(1,3))*/


/*let arr=[10,15,20,7,6,3]
let arr_1=arr.slice(2,4)
console.log(arr_1)
console.log(arr)*/

//Starting index and ending index dono include krega
//Original arr me change hoga

/*let arr=[7,5,11,15,16,22,23,25]
console.log(arr.splice(1,3))*/


// change Arr into String (toString)

/*let arr=[1,2,3,4,5]
let res=arr.toString()
console.log(res)*/

/*let arr=[1,2,3,4,5]
console.log(arr.toString())*/

//-----> Use to reverse an array <-------

/*let arr=[7,5,10,11,16]
console.log(arr.reverse())*/


//Finding negative index using string currently not possible only we find positive index

/*let str='apple'
console.log(str[2])*/


//toLowerCase() Method

/*let str='Mango'
let res=str.toLowerCase()
console.log(res)*/


//--------> .toUpperCase <--------

/*let str='Quad'
str=str.toUpperCase()
console.log(str)*/


//---------> Return true or false <----------

/*let str='hello world'
str=str.includes('10')
console.log(str)*/

//--------> .indexof()- If index not found return -1 <---------

/*let str='Mango' 
console.log(str.indexOf('M'))
console.log(str.indexOf('g'))
console.log(str.indexOf('f'))*/


// ------> Return first index occurence <------

/*let str='aaaab'
console.log(str.indexOf('a'))*/


// --------> .lastIndexOf() <-----------

/*let str='aaaab'
console.log(str.lastIndexOf('a'))*/


//--------> .startsWith and .endsWith <---------

/*let str='Mango'
console.log(str.startsWith('M'))
console.log(str.endsWith('o'))
console.log(str.startsWith('a'))*/


//--------> .trim() <------

/*let str='  abc  '
console.log(str.length)
console.log(str.trim(str))*/


//--------> .trimStart() <--------

/*let str="abc"
console.log(str.trimStart())*/

//---------> .repeat <---------

/*let str='ha'
console.log(str.repeat(3))//no gap between word*/

/*let str='ha '
console.log(str.repeat(3))*///jo single quote hai usme thora gap denge to result me bhi gap hoga


//---------> .slice <--------

/*let str='Mango'
console.log(str.slice(1,3))*/


//----------> .concat <-------

/*let str='hello'
let str_1='world'
res=str.concat(str_1)
console.log(res)*/


//-------> Reverse string <-------
//Method 1

/*let str='hello'
for (let i=str.length-1; i>0; i--){
console.log(str[i])
}*/


//Method 2

/*let str='hello'
for(let i=str.length; i>=0; i--){
    console.log(str[i])
}*/


//--------> chaining Method <--------print reverse in one line like 'olleh'

/*let str='hello'
let res=str.split('').reverse('').join('')
console.log(res)*/

//--------> Palindrome <--------

/*let str='madam'
let res=str.split('').reverse('').join('')
console.log(res)
if(str==res)
     console.log(true)
else{
    console.log(false)
}*/


//--------> chnage small 'm' to capital 'M' <----------
//Method 1

/* let str='madam'
str=str.replace('m','M')
console.log(str)*/

//Method 2

/*let str='madam'
res=str[0].toUpperCase()+str.slice(1)
console.log(res)*/


//---------> Count vowel in given strings <----------
//Method 1

/*let str='Godzilla'
let count=0;
for(let i=0; i<str.length; i++){
    if(str[i]==='a'||str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u'){
        count++
    }
}
  console.log(count)*/

//Method 2

/*let vowel=['a','e','i','o','u','A','E','I','O','U']
let str='Godzilla'
let count=0;
for(let i=0; i<str.length; i++){
    if(vowel.includes(str[i])){
        count++
    }
}
console.log(count)*/

//------> Count consonant <-------

/*let vowel=['a','e','i','o','u','A','E','I','O','U']
let str='Godzilla'
let count=0;
for(let i=0; i<str.length; i++){
    if(!vowel.includes(str[i])){
        count++
    }
}
console.log(count)*/


//--------> Remove Duplicate characters in a given string using set <-------

/*let str='programming'
let set =new Set(str)
console.log(set)*/


/*let str ='programming'
let set=new Set(str)
let newArr=Array.from(set)
newArr.join('')
console.log(newArr)*/


//-----------> First Method (Important**********) <----------

/*let str='programming'
let res=''
for(let i=0; i<str.length; i++){
    let isfound=false
    for(let j=0; j<res.length; j++){
        if(str[i]===res[j]){
            isfound=true
            break;

        }
    }
    if(!isfound){
        res +=str[i]
    }
}
console.log(res)*/


//Second Method

/*let str='programming'
let res=''
for(let i=0; i<str.length; i++){
    if(!res.includes(str[i])){
        res+=str[i]
    }
}
console.log(res)*/


//Count how many in this word

/*let str='programming'
let count=0;
for(let i=0; i<str.length; i++){
    if(str[i]==='m'){
count++
    }
}
console.log(count)*/


//-------> Anagram <---------

/*let str='listen'
let str_1='silent'
let newstr=str.split('').sort().join('')
let newstr_1=str.split('').sort().join('')
if(newstr==newstr_1){
    console.log("anagram")
}else{
    console.log("not anagram")
}*/


//----------> Function <---------

/*function add(a,b){
    let result =a+b;
    console.log(result)
}
add(10,20)*/


//---------> Addition <--------

/*function add(a,b){
    let res=a+b
    return a+b
}
let add_1=add(10,20)
console.log(add_1)*/


//--------> Substraction <--------

/*function add(a,b){
    let res=a-b
    return a-b
}
let add_1=add(10,20)
console.log(add_1)*/

//------> Multiplication <-------

/*function add(a,b){
    let res=a*b
    return a*b
}
let add_1=add(10,20)
console.log(add_1)*/


//--------> Divide <--------

/*function add(a,b){
    let res=a/b
    return a/b
}
let add_1=add(40,20)
console.log(add_1)*/


//---------> Default parameter <-------- if we not give value in last it not print undefined because we already put value above

/*function add(a=20,b=30){
    return a+b
}
add()
add(10,20)
console.log(add())
console.log(add(10,20))*/


//-------> Arguments <---------

/*function greet(){
    let sum=0;
    for(let i=0; i<arguments.length; i++){
        sum +=arguments[i]
    }
    console.log(sum)
}
greet(10,20,30)*/


//--------> RestArguments <----------

/*function restArg(...arg){
    console.log(arg)
}
restArg(10,20,30,40,50)*/


//-------> restArguments addition <---------

/*function restArg(...arg){
    let sum=0;
    for(let i=0; i<arg.length; i++){
        sum+=arg[i]
    }
    console.log(sum)
}
restArg(10,20,30,40,50)*/


//----------> pure function <--------- always return same output for same input

/*function add(a,b){
    return a+b
}
add(10,20)
add(10,20)
add(20,30)
add(20,30)
console.log(add(10,20))
console.log(add(10,20))
console.log(add(20,30))
console.log(add(20,30))*/


//----------> Impure function <----------

/*let count=0;
function increment(){
    count++
    console.log(count)
}
increment()
increment()*/


//----------> Callback <------------

/*function add(a,b,callback){
let result=a+b
callback(result)
}
add(10,20,function(result){
 console.log(result)
})*/


//not change value print same as it is because string is immutable so value not change

/*let str='Quad'
str[1]='y'
console.log(str)*/


//Finding length using string 

/*let str='Mango'
console.log(str.length)*/


//if we remove = symbol then not print undefined if add = then also print undefined

/*let str=[14,15,16,17,7,8]
for(let i=0; i<str.length; i++){
    console.log(str[i])
}*/


//split method

/*let str='Quad'
console.log(str.split(''))*/

//etr method

/*let etr='Ayush'
for(let i=0; i<etr.length; i++){
    console.log(etr[i])
}*/


//------> For of loop <--------

/*let str='Mango'
for(let char of str){
    console.log(char)
}*/


/*let str='Quad AI'
for(let char of str){
    console.log(char)
}*/


//------> replace Method <--------

/*let str='hello world'
str=str.replace('world','Quad')
console.log(str)*/

/*let str='hello world'
str=str.replace('h','c')
console.log(str)*/

/*let str='hello world world'
str=str.replace('world','Quad')
console.log(str)*/

/*let str='hello world world'
str=str.replaceAll('world','Quad')
console.log(str)*/


//------------> .charAt(index) <------------

/*let str='Mango'
console.log(str.charAt(0))*/




//Callback- is a function that is passed as  an argument for later use.


/*function add(a,b,callback){
    let res=a+b
    callback(res)
}
add(10,10,function(res){
console.log(res)
})*/


//High order function- function that returns or takes a another function as an argument.

/*function greet(Name){
    return "hello"+Name
}
function processUser(callback){
    let Name="Ayush"
    return callback(Name)
}
console.log(processUser(greet))*/


/*function test() {
    return function greet(Name) {
        return 'hello ' + Name
    }
}
let fun = test();
console.log(fun('quad'))*/









