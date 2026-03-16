const arr2d = [];

// 초기화
for (let i = 0; i < 5; i++) {
    arr2d[i] = [];
    for (let j = 0; j < 5; j++) {
        arr2d[i][j] = 1;
    }
}

// 값 더하기
let num = 1;
for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {
        num = arr2d[i][j-1] + arr2d[i-1][j]
        // 11 -> 10 01
        // 12 -> 11 02
        arr2d[i][j] = num;
    }
}

// 출력
for (let i = 0; i < 5; i++) {
console.log(arr2d[i].join(' '));
}
