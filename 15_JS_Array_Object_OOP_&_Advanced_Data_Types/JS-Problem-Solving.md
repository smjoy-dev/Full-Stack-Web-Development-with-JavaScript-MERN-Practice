⭐⭐⭐⭐ / ⭐⭐⭐⭐⭐
Most common logic building problems used in programming, tests, and competitive programming practice.
__________________________________________________________________

# 1. Print 1 to 100 ⭐

for(let i=1; i<=100; i++){
 console.log(i);
}

<!-- Output: 1 2 3 ... 100 -->

__________________________________________________________________

# 2. Even / Odd Check ⭐

let num = 10;

if(num % 2 == 0){
 console.log("Even");
}
else{
 console.log("Odd");
}

<!-- Output: Even -->

__________________________________________________________________

# 3. Sum Of Array ⭐⭐⭐

let arr = [10,20,30];

let sum = 0;

for(let i=0;i<arr.length;i++){
 sum += arr[i];
}

console.log(sum);

<!-- Output: 60 -->

__________________________________________________________________

# 4. Maximum Number In Array ⭐⭐⭐⭐

let arr = [5,9,2,20];

let max = arr[0];

for(let i=0;i<arr.length;i++){

 if(arr[i] > max){
    max = arr[i];
 }

}

console.log(max);

<!-- Output: 20 -->

__________________________________________________________________

# 5. Minimum Number In Array ⭐⭐⭐

let arr = [5,9,2,20];

let min = arr[0];

for(let i=0;i<arr.length;i++){

 if(arr[i] < min){
    min = arr[i];
 }

}

console.log(min);

<!-- Output: 2 -->

__________________________________________________________________

# 6. Reverse String ⭐⭐⭐⭐⭐

let text = "hello";

let reverse = "";

for(let i=text.length-1;i>=0;i--){
 reverse += text[i];
}

console.log(reverse);

<!-- Output: olleh -->

__________________________________________________________________

# 7. Palindrome Check ⭐⭐⭐⭐⭐

let text = "madam";

let reverse = "";

for(let i=text.length-1;i>=0;i--){
 reverse += text[i];
}

if(text == reverse){
 console.log("Palindrome");
}
else{
 console.log("Not Palindrome");
}

<!-- Output: Palindrome -->

__________________________________________________________________

# 8. Factorial ⭐⭐⭐⭐

let n = 5;

let fact = 1;

for(let i=1;i<=n;i++){
 fact *= i;
}

console.log(fact);

<!-- Output: 120 -->

__________________________________________________________________

# 9. Fibonacci Series ⭐⭐⭐⭐⭐

let a = 0;
let b = 1;

console.log(a);
console.log(b);

for(let i=2;i<7;i++){

 let c = a+b;

 console.log(c);

 a=b;
 b=c;

}

<!-- Output: 0 1 1 2 3 5 8 -->

__________________________________________________________________

# 10. Count Vowels ⭐⭐⭐

let str = "hello";

let count = 0;

for(let i=0;i<str.length;i++){

 if(
 str[i]=="a" ||
 str[i]=="e" ||
 str[i]=="i" ||
 str[i]=="o" ||
 str[i]=="u"
 ){
    count++;
 }

}

console.log(count);

<!-- Output: 2 -->

__________________________________________________________________

# 11. Find Duplicate ⭐⭐⭐⭐

let arr=[1,2,3,2,4];

for(let i=0;i<arr.length;i++){

 for(let j=i+1;j<arr.length;j++){

    if(arr[i]==arr[j]){
        console.log(arr[i]);
    }

 }

}

<!-- Output: 2 -->

__________________________________________________________________

# 12. FizzBuzz ⭐⭐⭐⭐⭐

for(let i=1;i<=15;i++){

 if(i%3==0 && i%5==0){
    console.log("FizzBuzz");
 }
 else if(i%3==0){
    console.log("Fizz");
 }
 else if(i%5==0){
    console.log("Buzz");
 }
 else{
    console.log(i);
 }

}

<!-- Output: 1 2 Fizz 4 Buzz ... FizzBuzz -->

__________________________________________________________________

# 13. Swap Two Numbers ⭐⭐

let a=10;
let b=20;

let temp=a;

a=b;

b=temp;

console.log(a,b);

<!-- Output: 20 10 -->

__________________________________________________________________

# 14. Prime Number Check ⭐⭐⭐⭐

let n=7;

let prime=true;

for(let i=2;i<n;i++){

 if(n%i==0){
    prime=false;
 }

}

if(prime){
 console.log("Prime");
}
else{
 console.log("Not Prime");
}

<!-- Output: Prime -->

__________________________________________________________________

# 15. Reverse Array ⭐⭐⭐

let arr=[1,2,3];

for(let i=arr.length-1;i>=0;i--){
 console.log(arr[i]);
}

<!-- Output: 3 2 1 -->

__________________________________________________________________

# 16. Second Largest Number ⭐⭐⭐⭐⭐

let arr=[10,5,20,8];

let max=0;
let second=0;

for(let i=0;i<arr.length;i++){

 if(arr[i]>max){

    second=max;

    max=arr[i];

 }

}

console.log(second);

<!-- Output: 10 -->

__________________________________________________________________

# 17. Leap Year ⭐⭐⭐⭐

let year = 2024;

if((year%400==0) || (year%4==0 && year%100!=0)){
 console.log("Leap Year");
}
else{
 console.log("Not Leap Year");
}

<!-- Output: Leap Year -->

__________________________________________________________________

# 18. Sum Of Digits ⭐⭐⭐

let num = 123;

let sum = 0;

while(num>0){

 sum += num%10;

 num = Math.floor(num/10);

}

console.log(sum);

<!-- Output: 6 -->

__________________________________________________________________

# 19. Reverse Number ⭐⭐⭐

let num = 123;

let rev = 0;

while(num>0){

 rev = rev*10 + num%10;

 num = Math.floor(num/10);

}

console.log(rev);

<!-- Output: 321 -->

__________________________________________________________________

# 20. Count Characters ⭐⭐⭐

let str="hello";

console.log(str.length);

<!-- Output: 5 -->

__________________________________________________________________

# 21. Count Words ⭐⭐⭐

let str = "I love JavaScript";

let words = str.split(" ");

console.log(words.length);

<!-- Output: 3 -->

__________________________________________________________________

# 22. Capitalize First Letter ⭐⭐⭐

let str = "hello";

let result = str[0].toUpperCase() + str.slice(1);

console.log(result);

<!-- Output: Hello -->

__________________________________________________________________

# 23. Remove Duplicate From Array ⭐⭐⭐⭐

let arr = [1,2,2,3,4,4];

let unique = [];

for(let i=0;i<arr.length;i++){

 if(!unique.includes(arr[i])){
    unique.push(arr[i]);
 }

}

console.log(unique);

<!-- Output: [1,2,3,4] -->

__________________________________________________________________

# 24. Find Missing Number ⭐⭐⭐⭐⭐

let arr = [1,2,4,5];

let n = 5;

let total = n*(n+1)/2;

let sum = 0;

for(let i=0;i<arr.length;i++){
 sum += arr[i];
}

console.log(total-sum);

<!-- Output: 3 -->

__________________________________________________________________

# 25. Linear Search ⭐⭐⭐

let arr = [10,20,30,40];

let search = 30;

for(let i=0;i<arr.length;i++){

 if(arr[i]==search){
    console.log("Found");
 }

}

<!-- Output: Found -->

__________________________________________________________________

# 26. Sort Array ⭐⭐⭐

let arr = [5,2,9,1];

arr.sort((a,b)=>a-b);

console.log(arr);

<!-- Output: [1,2,5,9] -->

__________________________________________________________________

# 27. Bubble Sort ⭐⭐⭐⭐⭐

let arr=[5,3,8,1];

for(let i=0;i<arr.length;i++){

 for(let j=0;j<arr.length;j++){

    if(arr[j]>arr[j+1]){

        let temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;

    }

 }

}

console.log(arr);

<!-- Output: [1,3,5,8] -->

__________________________________________________________________

# 28. Merge Two Arrays ⭐⭐⭐

let a = [1,2];

let b = [3,4];

let result = [...a,...b];

console.log(result);

<!-- Output: [1,2,3,4] -->

__________________________________________________________________

# 29. Find Common Elements ⭐⭐⭐⭐

let a=[1,2,3];

let b=[2,3,4];

let common=[];

for(let i=0;i<a.length;i++){

 if(b.includes(a[i])){
    common.push(a[i]);
 }

}

console.log(common);

<!-- Output: [2,3] -->

__________________________________________________________________

# 30. Count Character Frequency ⭐⭐⭐⭐⭐

let str = "hello";

let obj = {};

for(let char of str){

 if(obj[char]){
    obj[char]++;
 }
 else{
    obj[char]=1;
 }

}

console.log(obj);

<!-- Output: {h:1,e:1,l:2,o:1} -->

__________________________________________________________________

# 31. Find Unique Character ⭐⭐⭐

let str="hello";

for(let i=0;i<str.length;i++){

 if(str.indexOf(str[i]) == str.lastIndexOf(str[i])){
    console.log(str[i]);
 }

}

<!-- Output: h e o -->

__________________________________________________________________

# 32. Anagram Check ⭐⭐⭐⭐⭐

let a = "listen";

let b = "silent";

let x = a.split("").sort().join("");

let y = b.split("").sort().join("");

console.log(x==y);

<!-- Output: true -->

__________________________________________________________________

# 33. Remove Space From String ⭐⭐

let str = "I love JS";

let result = str.replaceAll(" ","");

console.log(result);

<!-- Output: IloveJS -->

__________________________________________________________________

# 34. Count Occurrence ⭐⭐⭐

let arr=[1,2,2,3,2];

let count=0;

for(let i=0;i<arr.length;i++){

 if(arr[i]==2){
    count++;
 }

}

console.log(count);

<!-- Output: 3 -->

__________________________________________________________________

# 35. Flatten Array ⭐⭐⭐⭐

let arr = [[1,2],[3,4]];

let result = arr.flat();

console.log(result);

<!-- Output: [1,2,3,4] -->

__________________________________________________________________

# 36. Object Property Access ⭐⭐

let user = {
 name:"Joy",
 age:25
};

console.log(user.name);

<!-- Output: Joy -->

__________________________________________________________________

# 37. Loop Through Object ⭐⭐⭐

let user={
 name:"Joy",
 age:25
};

for(let key in user){
 console.log(key,user[key]);
}

<!-- Output: name Joy age 25 -->

__________________________________________________________________

# 38. Map Method ⭐⭐⭐

let arr=[1,2,3];

let result = arr.map(x=>x*2);

console.log(result);

<!-- Output: [2,4,6] -->

__________________________________________________________________

# 39. Filter Method ⭐⭐⭐

let arr=[1,2,3,4];

let result = arr.filter(x=>x%2==0);

console.log(result);

<!-- Output: [2,4] -->

__________________________________________________________________

# 40. Reduce Method ⭐⭐⭐⭐

let arr=[10,20,30];

let sum = arr.reduce((a,b)=>a+b);

console.log(sum);

<!-- Output: 60 -->

__________________________________________________________________

# 41. Callback Function ⭐⭐⭐

function hello(callback){
 callback();
}

function message(){
 console.log("Hello JS");
}

hello(message);

<!-- Output: Hello JS -->

__________________________________________________________________

# 42. Promise Basic ⭐⭐⭐⭐

let promise = new Promise(function(resolve,reject){
 resolve("Success");
});

promise.then(function(result){
 console.log(result);
});

<!-- Output: Success -->

__________________________________________________________________

# 43. Async Await ⭐⭐⭐⭐

async function show(){

 let result = await Promise.resolve("Done");
 console.log(result);

}

show();

<!-- Output: Done -->

__________________________________________________________________

# 44. Closure Example ⭐⭐⭐⭐⭐

function outer(){

 let count = 0;

 return function inner(){
    count++;
    console.log(count);
 }

}

let result = outer();

result();
result();

<!-- Output: 1 2 -->

__________________________________________________________________

# 45. Recursion Factorial ⭐⭐⭐⭐⭐

function factorial(n){

 if(n==1){
    return 1;
 }

 return n * factorial(n-1);

}

console.log(factorial(5));

<!-- Output: 120 -->

__________________________________________________________________

# 46. Find Largest Word ⭐⭐⭐

let str = "I love JavaScript";
let words = str.split(" ");
let max = "";

for(let i=0;i<words.length;i++){

 if(words[i].length > max.length){
    max = words[i];
 }

}

console.log(max);

<!-- Output: JavaScript -->

__________________________________________________________________

# 47. Check Number Positive Negative ⭐⭐

let num = -5;

if(num>0){
 console.log("Positive");
}
else if(num<0){
 console.log("Negative");
}
else{
 console.log("Zero");
}

<!-- Output: Negative -->

__________________________________________________________________

# 48. Find Average Of Array ⭐⭐⭐

let arr=[10,20,30];
let sum=0;

for(let i=0;i<arr.length;i++){
 sum+=arr[i];
}

let avg=sum/arr.length;

console.log(avg);

<!-- Output: 20 -->

__________________________________________________________________

# 49. Convert Celsius To Fahrenheit ⭐⭐

let celsius = 10;

let fahrenheit = (celsius*9/5)+32;

console.log(fahrenheit);

<!-- Output: 50 -->

__________________________________________________________________

# 50. Check Armstrong Number ⭐⭐⭐⭐⭐

let num = 153;
let temp = num;
let sum = 0;

while(temp>0){

 let digit = temp%10;

 sum += digit*digit*digit;

 temp = Math.floor(temp/10);

}

if(sum==num){
 console.log("Armstrong");
}
else{
 console.log("Not Armstrong");
}

<!-- Output: Armstrong -->

__________________________________________________________________
