var fs = require('fs');


/*
//readFileSync
console.log('A')
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C')

// A, B, C가 순서대로 실행된다
// readFileSync 는 리턴값을 가진다
*/


//readFile
console.log('A')
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
    console.log(result);
});
console.log('C')

// readFile은 리턴값이 아니다. 대신 함수가 세 번째 인자로 주어진다. 
// nodejs가 파일을 읽는 작업이 끝나면(첫번째 인자) 함수(세 번째 인자)를 실행시킨다. 함수의 첫 번째 인자는 에러가 있다면 에러가 나오고, 두 번째 인자는 파일의 내용이 들어간다.