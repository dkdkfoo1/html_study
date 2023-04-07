//반복문 ★★★★★💋💋💋💋💋💋
/*
    for(초기값; 조건식; 증감식){
        조건식이 참일 때 반복실행구문
    }
*/
//for 초기변수명 : i, j, m, n
for(let i=0; i<4; i++){
    console.log(`day ${i+1}`)
}
//day1
//day2
//day3
//day4
let a = ['html','css','javascript']
for(let i=0; i<3; i++){
    console.log(a[i])
}

let coffee = ['아메리카노','카페라떼','카푸치노','에스프레소','돌체라떼']
for(let i=0; i<5; i++){
    console.log(`${i+1}번 메뉴 ${coffee[i]}`)
}
console.log('----------------------------')

//역순 출력

for(let i=4; i>=0; i--){
    console.log(`${i+1}번 메뉴 ${coffee[i]}`)
}
//--------------------------------------------


var fruits = new Array('사과','망고');
console.log(fruits.length)//7
//length는 1에서 시작하니까 '<' 이걸 써줘야함  
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}
console.log('역순출력----------------------------')
//length는 1에서 시작하니까 역순 처리할 때는 '-1' 추가 
for(let i=fruits.length-1; i>=0; i--){
    console.log(fruits[i])
}
//length로 자동계산가능

console.log('------------------------')
//반복문 + 조건문
//반복 {조건문}
//1~20 홀수만 출력
for(let i = 1; i < 21; i ++){
    if(i%2){
        console.log(i)
    }
}
console.log('------------------------')
//5~15까지 짝수만 출력
for(let i = 5; i < 16; i ++){
    if(i%2 == 0){
        console.log(i)
    }
}
console.log('------------------------')
// 1~10까지 역순 출력
for(let i = 10; i> 0; i--){
    if(i){
        console.log(i)
    }
}
console.log('------------------------')
// 10~20 역순 짝수 출력
for(let i = 20; i >= 10; i --){
    if(i%2 == 0){
        console.log(i)
    }
}

// 계속 조건문에서 '=' 을 '==' 이렇게 두번 써야 한다는걸 까먹는당....
console.log('------------------------')
//반복문 이용 총 합 구하기 

let data = [10,20,30,40,50]
let result = 0
//let result = 0으로 선언안하면 undefined + 10 = NaN 하는 격

for(let i=0; i < data.length; i++){
    result += data[i]
}
console.log(`data 변수의 총 합은 ${result}입니다`)

//result+=data[0]
//result+=data[1]
//result+=data[2]
//result+=data[3]
//result+=data[4]
//-> 이걸 for 문으로 작성하면 위의 식이 됨.

console.log('------------------------')
//1~10반복문
for(let i=1; i<11; i++){
    if(i%2){
        document.write(`<p class="bg1">${i}<p>`)
    }else{
        document.write(`<p class="bg2">${i}<p>`)
    }
}