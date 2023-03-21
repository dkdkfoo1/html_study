//F12 -> console 항상 실행하기
//javascript == 객체지향프로그래밍언어
//변수 = 데이터 저장소
//var, let, const
//var vs let ==> 중복변수명 에러 구분
//const 상수 
//a.length ==> 객체, 속성
//a.typeof() ==> 객체, 메소드(함수)
//typeof a ==>연산자, 객체
//console.log('a') ==> 문자a 로그로 표시한다. 콘솔에. ->거꾸로 읽기
//->문자 데이터 a를 콘솔창에 로그로 표시한다
//window.alert(10) ==> 숫자10을 팝업창에 뜨게한다. 윈도우에.
//-숫자 10을 윈도우 팝업창에 뜨게한다
//console.log('안녕하세요'.length) ==>객체,메소드(객체,속성)
//=>'안녕하세요'문자의 길이를 로그로 콘솔에 표시한다.
let a = 10 // a는 숫자 10이다
let b = 'hello' // b는 문자 hello 이다
let c = a // c는 10이다
console.log(a.length) // 숫자 10 의 길이를 콘솔에 로그로 표시한다. = 문자가 아니여서 undefined로 나옴.
console.log(a+b) // 10 +'hello' 를 콘솔에 로그로 표시한다. = 10hello
//->더하기 또는 연결하기
console.log(typeof b) // 'hello' 의 속성을 콘솔에 로그로 표시한다. = string 
window.alert(c) //10을 윈도우 팝업창에 뜨게한다.
window.alert(a+c) //20을 윈도우 팝업창에 뜨게한다.