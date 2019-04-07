function calculateCircleArea(r){
    if (arguments.length != 1) {
        throw "인자 개수가 부족합니다.";
    }
    const PI = 3.14;
    return r**2*PI;
}