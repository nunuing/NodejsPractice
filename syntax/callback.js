
var a = function(){             //익명 함수, js에서는 함수가 값이다!
    console.log('A');
}

function slowfunc(callback){        //callback은 a라는 함수의 값을 가지게 된다.
    callback();
}

slowfunc(a);