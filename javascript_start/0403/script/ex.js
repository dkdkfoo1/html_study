//----------------DOM 변수
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const result = document.querySelector('#result')
console.log(btn1,btn2,btn3,result)
let qa = window.confirm(`let과 const의 차이점을 서술하시오`)
//confirm 만 하는 창.
btn1.addEventListener('click',function(){
    // console.log(this) //이벤트를 열었을 때 어떤 게 선택되는지 확인하는 것.
    //this = 현재 대상->btn1
    result.innerHTML = `let은 값이 변하는 변수, <br> const는 값이 변하지 않는 상수이다.`
    // 안에 태그 사용도 가능 (br같은)
    
})
//클릭하면 이벤트 발생되는 방법 -> 버튼1을 누르면 `let은 값이 변하는 변수, <br> const는 값이 변하지 않는 상수이다.` 가 뜬다.
btn2.addEventListener('click',function(){
    qa = window.confirm('변수와 배열의 차이점을 서술하시오.')
    result.innerHTML= `일반 변수는 한가지 값을 <br> 배열은 두가지 이상의 값을 담을 수 있는 데이터 저장소다.`
})
//증감연산자의 전위연산, 후위연산의 차이점을 서술하시오.
btn3.addEventListener('click',function(){
    qa = window.confirm('증감연산자의 전위연산, 후위연산의 차이점을 서술하시오.')
    result.innerHTML= `변수의 값을 1씩 증가하는 증감연산자는 전위, 후위 위치에 따라 <br> 값을 대입 후 증가할지, 증가하고 대입할지가 결정된다.`
})