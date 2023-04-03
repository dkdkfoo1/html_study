let money_take = 10000
let money_free = 1000
let total = money_take+money_free
//객체.메서드()
//객체.toLocalString('ko-kr')
let total_replace = total.toLocaleString('ko-kr')// *콤마 필요할 때, 별개로 변환하는 법
const answer_btn = document.querySelector('#answer_btn')
const result_input = document.querySelector('#result')

console.log(total_replace)
console.log(total, answer_btn, result_input)

answer_btn.addEventListener('click',function(){
    result_input.value = `어피치는 돈을 ${total_replace}원 가지고 있네요!`
    // console.log(this)
})

