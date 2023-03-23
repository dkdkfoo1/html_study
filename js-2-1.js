
const result1 = document.querySelector('#result1')
const result2 = document.querySelector('#result2')
const answer_btn = document.querySelector('#answer_btn')


console.log(result, result1, result2)

answer_btn.addEventListener('click',function(){
    let result = document.querySelector('#result').value
    //2.prompt 값 입력 (인증번호)
    result = Number(result)
    // let num = window.prompt('입력하세요')
    result2.value = result
    //3.2번 값의 데이터타입이 result_type출력
    result1.value = typeof result
    //4.2번 값의 결과가 result 출력 
    // console.log(this)
})