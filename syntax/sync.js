var fs = require('fs');

//read fileSync
// console.log('A');
// var result = fs.readFileSync('syntax/sample.txt', 'utf-8');
// console.log(result);
// console.log('C');

//read file -> 비동기 : 성능이 중요하다면 비동기!
console.log('A');
fs.readFile('syntax/sample.txt', 'utf-8', function(err, result){  //readfile은 반환값 없음
    console.log(result);
});
console.log('C');

