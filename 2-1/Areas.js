function calculateCircleArea(r){
    if (arguments.length != 1) {
        throw "인자 개수가 부족합니다.";
    }
    if (typeof arguments[i] != Number){
        throw "숫자를 넣으세요.";
    }
    const PI = 3.14;
    return r**2*PI;
}

function calculateSquareArea() {
    const argsNumber = [1,2];
    if (!argsNumber.includes(arguments.length)){
        throw "인자의 개수가 안맞아여";
    }
    for (let i = 0; i < arguments.length; i++){
        if (typeof arguments[i] != Number){
            throw "숫자 넣어여";
        }
    }

    switch (arguments.length){
        case 1:
            return arguments[0]**2;
        case 2:
            return arguments[0] * arguments[1]; 
    }
}

function calculateTrapezoidArea(bottom, top, height) {
    if (arguments.length != 3) {
        throw "밑변, 윗변, 높이를 순서대로 넣으십셔";
    }
    for (let i = 0; i < 3; i++){
        if (typeof arguments[i] != Number){
            throw "숫자 넣으셈";
        }
    }

    return (bottom + top) * height / 2;
}

function calculateCylinderArea(radius, height) {
    if (arguments.length != 2) {
        throw "좋은 말로 할때 반지름, 높이를 순서대로 넣어라.";
    }
    for (let i = 0; i < 2; i++){
        if (typeof arguments[i] != Number){
            throw "숫자 느라고 XX";
        }
    }

    return calculateCircleArea(radius) * height;
    //const PI = 3.14;
    //return r**2*PI*height;
}
