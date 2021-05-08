var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

//Explain the output at each stage:
// --a; (this mean that first subtract 1 from variable a than bring the new value.)
// --a - --b; (this expression will first subtract 1 from a and b than the new value will be subtracted.)
// --a - --b + ++b; (this expression will subtract 1 from a, b than will add 1 in b than it  will perform mathimatical operation.)
//--a - --b + ++b + b; (this expression will subtract 1 from a, b than will add 1 in b than it  will subtract 1 from b and than it will perform mathimatical operation.)
document.write('a:',a,'<br>');
document.write('b:',b,'<br>');
document.write('result:',result,'<br>');