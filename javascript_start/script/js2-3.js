const don = document.querySelector('#result1')
const iza = document.querySelector('#result2')
const total = document.querySelector('#result')
const answer_btn = document.querySelector('#answer_btn')


answer_btn.addEventListener('click',function(){ 
    let pop = window.prompt ('입력하시오')
    don.value = pop
    let don1 = Number(don.value)
    iza.value = 100
    let iza1 = Number(iza.value)
    let total1 = don1+iza1
    total.value = total1.toLocaleString('ko-kr')
})
