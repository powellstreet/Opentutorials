
function setLog (input){
    console.log(input)
};
/* Using Callback


// 일반 비동기 실행
setTimeout(function(){ 
    setLog('물을 끓이자'
)}, 3000);

setTimeout(function(){ 
    setLog('라면을 넣자')
}, 5000);

setTimeout(function(){ 
    setLog('맛있게 먹자'
)}, 0);

// 순서 부여
setTimeout(function(){ 
    setLog('물을 끓이자')
    setTimeout(function(){ 
        setLog('라면을 넣자')
        setTimeout(function(){ 
            setLog('맛있게 먹자'
        )}, 0)
    }, 5000)
}, 3000);
*/
 
 
/* Using Promise

function funcPr1(){
    var pr = new Promise(function(resolve, reject){
        // Promise 정의
        setTimeout(() => {
            resolve('value1') }, 3000);
            // reject('에러메세지')})
    })
    return pr
};

function funcPr2(){
    var pr = new Promise(function(resolve, reject){
        // Promise 정의
        setTimeout(() => {
            // resolve('value2') }, 1000);
            reject('에러메세지')})

    })
    return pr;
};

function funcPr3(){
    var pr = new Promise(function(resolve, reject){
        // Promise 정의
        setTimeout(() => {
            resolve('value3') }, 500);
    })
    return pr;
};


funcPr1().then(function(value){
    // Promise 수행
    setLog(value)

    return funcPr2()
})
.then(function(value){
    // Promise 수행
    setLog(value)
    return funcPr3()
})
.then(function(value){
    setLog(value)
})
.catch(function(error){
    setLog(error)
});

*/


var a, b;

function fileA (){
    var pr = new Promise(function(resolve, reject){
        $.ajax('a.txt').done(function(data){
            resolve(data)
        }).fail(function(){
            reject('읽어오기 에러')
        }) 
    })
    return pr;
}

function fileB (){
    var pr = new Promise(function(resolve, reject){
        $.ajax('b.txt').done(function(data){
            resolve(data)
        })
    })
    return pr;
}

// fileA().then(function(data){
//     a = Number(data);
//     return fileB
// })
// .then(function(data){
//     b = Number(data);

//     setLog(a + b);
// })
// .catch(function(error){
//     setLog(error)
// })



// using async/await

async function ab(){
    try{
        a = await fileA()
        b = await fileB()
        setLog( a + b )
    }
    catch(error){
        setLog(error)
    }
};

ab();





// reference : DEvSIGNER https://www.youtube.com/watch?v=pLiz2LdhYJM&t=7s