const answer_btn = document.querySelector('#answer_btn')
const total = document.querySelector('#result')

console.log(answer_btn, total)

answer_btn.addEventListener('click',function(){
    console.log(this)
    let don = document.querySelector('#result1').value
    let bonus = document.querySelector('#result2').value
    don = Number(don)
    bonus = Number(bonus)
    let rum = don+bonus 
    total.value = rum.toLocaleString('ko-kr')
})

//console.log 가 있는 스크립트가 잘 짠 스크립트다... 
// 콤마를 붙히려면
// 계산은 앞에서 끝내고 
// 끝낸 결과 값에 마지막으로 콤마를 붙혀야한다.
// 콤마를 붙히는 순간 숫자에서 문자가 되기 때문에