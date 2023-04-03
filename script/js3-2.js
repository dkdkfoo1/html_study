let weather = ['맑음','맑음','비','비','맑음','흐림','눈']
let date = ['월','화','수','목','금','토','일']
const result = document.querySelectorAll('.result')
// 두개 이상이니까 All 써야함 잊지않기.
const answer_btn = document.querySelector('#answer_btn')
answer_btn.addEventListener('click',function(){
    result[0].innerHTML = `${date[0]}요일은 ${weather[0]}입니다`
    result[1].innerHTML = `${date[1]}요일은 ${weather[1]}입니다`
    result[2].innerHTML = `${date[2]}요일은 ${weather[2]}입니다`
    result[3].innerHTML = `${date[3]}요일은 ${weather[3]}입니다`
    result[4].innerHTML = `${date[4]}요일은 ${weather[4]}입니다`
    result[5].innerHTML = `${date[5]}요일은 ${weather[5]}입니다`
    result[6].innerHTML = `${date[6]}요일은 ${weather[6]}입니다`
    result[7].innerHTML = `${date[7]}요일은 ${weather[7]}입니다`
})
