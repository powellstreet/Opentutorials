var http = require('http');
var cookie = require('cookie')

http.createServer(function(request, response){
    console.log(request.headers.cookie);
    var cookies;
    if(request.headers.cookie){
        cookies = cookie.parse(request.headers.cookie);
    }

    console.log(cookies.yummy_cookie)
    response.writeHead(200, {
        'Set-Cookie': [ // cookie가 복수일 경우 배열로 넣기
            'yummy_cookie=choco', 
            'tasty_cookie=strawberry',
            `Permanent=cookies; Max-Age=${60*60*60*24}`, // 브라우저가 종료되어도 남아있도록 하는 쿠키. 언제까지 남아있을지를 초 단위로 세팅. 0으로 세팅하면 삭제됨.
            'Secure=Secure; Secure', // http가 아닌 https 일때만 보이는 쿠키
            'HttpOnly=HttpOnly; HttpOnly', // javascript 에서는 보이지 않는 쿠키. 크롬 콘솔(document.cookie)에는 보이지 않으나 실재로 존재함.
            'Path=Path; Path=/cookie', // 특정 디렉토리에서만 쿠키가 활성되게 하고 싶을 때 사용.
            'Domain=Domain; Domain=o2.org' // o2.org의 어떠한 subDomain에서도 쿠키가 살아있도록 함.
        ] 
    });
    response.end('Cookie!!')
}).listen(3000);

// install cookie module : npm install cooike
// 이후 cookie.parse() 를 사용하면 쿠키를 객체화해서 사용하기 쉽게 만들어줌.