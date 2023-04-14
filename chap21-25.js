//Q1
var firstname=prompt("Enter first name!");
var lastname=prompt("Enter Last name!");
var fullname=firstname+lastname;
alert("Hey!Welcome "+ fullname);

//Q2
var mobil=prompt("Enter your fav Mobil phone model:")
var charInMobil=mobil.length;
alert(charInMobil);

//Q3
var str="pakistani"
var a=str.indexOf("n");
console.log(a);

//Q4
var word="hello world"
var lastindex=word.lastIndexOf("l")
console.log("Last index of l: "+lastindex);

//qs5
var str2 = "Hello World";
document.write("<br>String: ",str2);
document.write("<br>Character at index of 3: ",str2.charAt(3));
//qs6
var fName = prompt("Enter first name: ");
var lName = prompt("Enter last name: ");
var full_Name=fName.concat(lName);
document.write("<br>Greetings ",full_Name, "!");
//qs7
var city = "Hyderabad";
document.write("<br>City: ",city);
var newStr = city.replace("Hyder","Islam");
document.write("<br>After replacement: ",newStr);
//qs8
var message = "Ali and Sami are best friends. They play cricket andfootball together.";
document.write("<br>Message: ",message)
var newMessage = message.replace(/and/g,"&");
document.write("<br>New message: ",newMessage);
//qs9
var num = "472";
document.write("<br>Value: ",num,"<br>Type: ",typeof(num));
num = parseInt(num);
document.write("<br>Value: ",num,"<br>Type: ",typeof(num));
//qs10
var word = prompt("Enter a word: ");
document.write("<br>User input: ",word);
var capWord = word.toUpperCase();
document.write("<br>Upper Case: ",capWord);
//qs11
var word2 = prompt("Enter a word: ");
document.write("<br>User input: ",word2);
var firstChar = word2.slice(0,1);
var otherChars = word2.slice(2);
var titleCase = firstChar.toUpperCase() + otherChars.toLowerCase();
document.write("<br>Word in Title Case: ",titleCase);
//qs12
let num2 = 35.36;
document.write("<br>Number: ",num2);
let text = num2.toString().replace(".", "");
document.write("<br>Result: ",text);
//qs13 
var username = prompt("Enter username: ");
for(var i=0; i<username.length;i++){
    var charcode=username.charCodeAt(i);
    if(username[i]===33||username[i]===44||username[i]===46||username[i]===64){
        alert("Please enter a valid username");
        break;
    }
}
if(i===username.length){
    console.log("Username accepted: "+ username);
}
//qs14
var mes = prompt("Welcome to the bakery what do you want to order? ");
var mes = mes.toLowerCase();
var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
for(var i=0;i<arr.length;i++){
    if(arr[i]===mes){
        document.write("<br>",mes, " is available at index ",i," of our bakery.")
        break;
    }
    else{
        document.write("<br>We are sorry. ",mes, " is not available in our bakery")
        break;
    }
}
//qs15 
let password = prompt("Enter your password: ");

// Check length of password
if (password.length < 6) {
    alert("Password is too short. Please enter a valid password.");
}
// Check if password starts with a number
else if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
    alert("Password should not start with a number. Please enter a valid password.");
}
// Check if password contains only alphanumeric characters
else {
    let containsLetter = false;
    let containsNumber = false;
    for (let i = 0; i < password.length; i++) {
        let charCode = password.charCodeAt(i);
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            containsLetter = true;
        }
        else if (charCode >= 48 && charCode <= 57) {
            containsNumber = true;
        }
    }
    if (!containsLetter || !containsNumber) {
        alert("Password must contain both alphabets and numbers. Please enter a valid password.");
    }
    else {
        console.log("Password accepted: " + password);
    }
}
//qs16
var university = "University of Karachi";
// Split using a space character
let arr2 = university.split('');
//The array
console.log(arr2);
console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[2]);
console.log(arr2[3]);
console.log(arr2[4]);
console.log(arr2[5]);
console.log(arr2[6]);
console.log(arr2[7]);
console.log(arr2[8]);
console.log(arr2[9]);
console.log(arr2[10]);
console.log(arr2[11]);
console.log(arr2[12]);
console.log(arr2[13]);
console.log(arr2[14]);
console.log(arr2[15]);
console.log(arr2[16]);
console.log(arr2[17]);
console.log(arr2[18]);
console.log(arr2[19]);
console.log(arr2[20]);
//qs17
var input = prompt("User input:");
document.write("<br>User input: ",input);
document.write("<br>Last character of input: ",input.charAt(input.length-1));
//qs18
var temp = "“The quick brown fox jumps over the lazy dog.";
temp = temp.toLowerCase();
var count = (temp.match(/the/g) || []).length;
console.log(count);
