//아메리카도 1개 가격 4700원
const order = document.querySelector('#order')
const number = document.querySelector('#number')
const result = document.querySelector('#result')
const reset = document.querySelector('#reset')
const price = 4700 //고정가격
let num = 0 //변경 수량 변수(초기값0)
let total = 0 //변경 최종가격 변수(초기값0)
order.addEventListener('click',order_add)
reset.addEventListener('click',order_reset)
function order_reset(){
    num = 0
    total = 0
    number.innerHTML = num
    result.innerHTML = total
}
function order_add(){
    if(num < 10){
    num++
    total = price*num
    number.innerHTML = num
    result.innerHTML = total.toLocaleString('ko-kr')
    }else{
        window.alert('카페인 수치가 위험수준입니다.')
    }
}


