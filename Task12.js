var USD = 10;
var SR = 25;
var Ex_rate_USD = 155;
var Ex_rate_SR = 41;

var CurrencyinPKR = (USD * Ex_rate_USD) + (SR * Ex_rate_SR);

document.write('<h1>Currency in PKR<h1>');
document.write('Total Currency in PKR:',CurrencyinPKR);