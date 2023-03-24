//사용하는 모든 데이터 '변수'로 만들기
//자바스크립트를 '동작시키기위한 데이터'와 '계산데이터' 다 변수로 만들어야함.
//answer_btn
//answer_input
//day1
//day2
//day3
//total

let day1 = 10
let day2 = 5
let day3 = 8
let total = day1+day2+day3
const answer_btn = document.querySelector('#answer_btn')
const answer_input = document.querySelector('#result')
//day1, day2, day3는 눈으로 보이는 결과니까 굳이 확인 안해도 됨~ total확인하깅
console.log(answer_btn, answer_input, total) 
//속성을 읽는다
//객체.속성

//속성을 변경한다
//객체.속성 = 변경값
//length, innerHTML(내용을 읽거나 변경할 때),style
//answer_input.value = `결과는 ${total} 장입니다.`
//태그의 속성을 그대로 갖다 쓴 것임. input 안의 value속성에 값을 쓰는 
//것이기 때문에 innerHTML 대신에 input 태그 변수에는 value를 쓴다. 
//p태그에 값을 쓸때는 <p>값</p> 이렇게 값을 안에쓰는데
//input 태그에는 <input type="" value="값"> 이렇게 value에 쓰니까!
//`${total}장` => 템플릿 문자열. 문자와 함께 쓸 수 있기 때문.

//요소.addEventListener(이벤트종류, 함수실행 및 호출);
answer_btn.addEventListener('click',function(){
    //이벤트 조건 만족 시 실행 결과
    // console.log(this)
    answer_input.value = `정답은 ${total}장입니다`
})
// '문자열' , 키워드