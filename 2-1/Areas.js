function calculateCircleArea(r){
    if (arguments.length != 1) {
        throw "인자 개수가 부족합니다.";
    }
    const PI = 3.14;
    return r**2*PI;
}

function calculateSquareArea() {
    const argsNumber = [1,2];
    if (!argsNumber.includes(arguments.length)){
        throw "인자의 개수가 안맞아여";
    }

    switch (arguments.length){
        case 1:
            return arguments[0]**2;
        case 2:
            return arguments[0] * arguments[1]; 
    }
}