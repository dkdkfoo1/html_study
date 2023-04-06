// console.log('논리데이터 연습--------------------------')
// console.log(true) //문자가 아니기 때문에 따옴표로 묶지않기
// console.log(false)
// console.log(true+2) //3 
// //논리데이터를 산술연산으로 처리를 하면 true는 1로 인식하고 false는 0으로 인식한다.
// console.log(false+10) //10
// console.log(typeof true) //논리데이터 타입 = boolean
// console.log(typeof false+1) //boolean1
// let bo = true+10 //오른쪽에서 왼쪽을 읽는거니까 true+10인 결과를 bo로 넘어오기 때문에 넘버라고 출력된다.
// console.log(typeof bo) //number
// console.log(true+null) //1  -> null=없음=0으로 인식함.
// console.log(false+null) //0
// console.log('비교연산자--------------------')
// let a = 10
// let b = 20
// let c = '20'
// let d = 0
// console.log(a,b,c)
// console.log(a == b) // false
// console.log(b === c) // 데이터 타입까지 같냐 false
// console.log(a != b) // true '!'는 부정의 의미
// console.log(b !=c ) // false
// console.log(b !== c) // true 데이터 타입이 다르다
// console.log(a > b) // false
// console.log(a <= b) // true 같거나 작다 (작으니까 true)
// console.log(!b) // 앞에 붙히면 값을 부정하는 것 '!' -> 0은 true로 인식, 나머지는 false로 인식
// console.log('조건식----------------------------------------')
/*
    if(날씨 == '비'){
        우산챙기기
    }
    if(날씨 != '맑음'){
        우산챙기기
    }
    if(점수 >= 60){
        자격증합격
    }
    if(점수 < 60){
        재시험
    }
*/
// let weather = window.prompt('오늘 날씨 어때?')
// if(weather == '비'){
//     window.alert('우산챙기기')
// }
// -> 비 라고 적지 않으면 '우산챙기기'가 뜨지 않음
// -> 조건이 참이 아니면 실행이 되지 않는다.
let a = true
let b = false
let c = 10
let d = 20
if(a==true){console.log('a는 참이다')} //true o
if(c>10){console.log('c는 10보다 크다')} //false x
if(d<c){console.log('d는 c보다 작다')} //false x
if(d<=20){console.log('d는 20보다 작거나 같다')} // true o
if(b!=true){console.log('b는 참이 아니다.')} // true o