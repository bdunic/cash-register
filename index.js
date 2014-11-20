"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.
function update(){
	document.getElementById('runningsubtotal').innerHTML = runningsubtotal;
	document.getElementById('runningtax').innerHTML = runningtax;
	document.getElementById('runningtotal').innerHTML = runningtotal;
}
document.getElementById('cancel').addEventListener('click', cancel);
document.getElementById('confirm').addEventListener('click', confirm);
document.getElementById('hamburger').addEventListener('click', hamburger);
document.getElementById('corndog').addEventListener('click', corndog);
document.getElementById('cheeseburger').addEventListener('click', cheeseburger);
document.getElementById('fries').addEventListener('click', fries);
document.getElementById('cookie').addEventListener('click', cookie);
document.getElementById('icecream').addEventListener('click', icecream);
document.getElementById('drink').addEventListener('click', drink);
document.getElementById('coffee').addEventListener('click', coffee);
document.getElementById('sundae').addEventListener('click', sundae);
document.getElementById('HBcombo').addEventListener('click', hamburger);
document.getElementById('HBcombo').addEventListener('click', fries);
document.getElementById('HBcombo').addEventListener('click', drink);
document.getElementById('CDcombo').addEventListener('click', corndog);
document.getElementById('CDcombo').addEventListener('click', fries);
document.getElementById('CDcombo').addEventListener('click', drink);
document.getElementById('CBcombo').addEventListener('click', cheeseburger);
document.getElementById('CBcombo').addEventListener('click', fries);
document.getElementById('CBcombo').addEventListener('click', drink);
var prices = {
	'hamburger': 1.99,
	'cheeseburger': 2.29,
	'corndog': 1.75,
	'fries': 1.19,
	'cookie': .75,
	'icecream': .99,
	'drink': 1.25,
	'coffee': 1.99,
	'sundae': 2.89,
}
var runningsubtotal, runningtax, runningtotal;
runningsubtotal=0
runningtax=0
runningtotal=0
function Register(item){
var subtotal, total, tax;
subtotal = prices[item];
tax=prices[item] * .07;
total= subtotal + tax;
runningsubtotal=runningsubtotal+subtotal;
runningtax=runningtax+tax;
runningtotal=runningtotal+total
document.getElementById('item').innerHTML = item
update()
}
var i=1
function confirm() {
runningtotal=0;
runningsubtotal=0;
runningtax=0;
i=i+1;
document.getElementById('receipt').innerHTML = i;
update();
}
function cancel() {
runningtotal=0;
runningsubtotal=0;
runningtax=0;
update();
}
function hamburger(){
Register('hamburger');
}
function cheeseburger(){
Register('cheeseburger');
}
function corndog(){
Register('corndog');
}
function drink(){
Register('drink');
}
function sundae(){
Register('sundae');
}
function coffee(){
Register('coffee');
}
function fries(){
	Register('fries');
}
function cookie(){
	Register('cookie');
}
function icecream(){
	Register('icecream');
}

