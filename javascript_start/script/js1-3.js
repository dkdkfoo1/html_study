let take = 10000
let snack = 2000
let ice = 1000
let total = take-snack-ice
let total_replace = total.toLocaleString('ko-kr')

const answer_btn = document.querySelector('#answer_btn')
const result = document.querySelector('#result')

console.log(answer_btn, result, take, snack, ice, total
    ,total_replace)

answer_btn.addEventListener('click', function(){
    result.value = `${total_replace}원입니다`
    // console.log(this)
})