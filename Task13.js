var a = 10;
var b = ++a;
var c = a++;
var d = --a;
var e = a--;

document.writeln('Result:','<br>');
document.writeln('The value of a is: 10','<br>');
document.writeln('----------------------------------','<br>');
document.writeln('<br>')
document.writeln('The value of ++a is:',b,'<br>');
document.writeln('Now the value of a is: 11','<br>');
document.writeln('<br>');
document.writeln('The value of a++ is:',c,'<br>');
document.writeln('Now the value of a is: 12','<br>');
document.writeln('<br>');
document.writeln('The value of --a is: ',d,'<br>');
document.writeln('Now the value of a is: 11','<br>');
document.writeln('<br>');
document.writeln('The value of a-- is:',e,'<br>');
document.writeln('Now the value of a is: 10');
