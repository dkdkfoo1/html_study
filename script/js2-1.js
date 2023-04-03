// 숫자입력후 버튼누르면
// 데이터타입에는 Number
// 사용자 입력값 확인에는 입력된 값이 그대로 나오도록.
// ->데이터 타입확인이 스트링으로 나오면 안된다.
const result1 = document.querySelector('#result1')
const result2 = document.querySelector('#result2')
const answer_btn = document.querySelector('#answer_btn')


console.log(result, result1, result2)

answer_btn.addEventListener('click',function(){
    let result = document.querySelector('#result').value
    result = Number(result)
    result2.value = result
    result1.value = typeof result
})

//선생님 풀이

// const num_input = document.querySelector('#result')
// const result_type = document.querySelector('#result1')
// const result_val = document.querySelector('#result3')
// const answer_btn = document.querySelector('#answer_btn')
// console.log(num_input, result_type, esult_val, answer_btn)
// console.log(num_input.value) ->실시간 input 값 추적되지 않으므로 결과값 표시안됨.

// answer_btn.addEventListener('click',function(){
//     console.log(num_input.value) ->버튼 추적 가능확인
//     console.log(typeof num_input.value) -> str->num
//     let number_type = Number(num_input.value)
// ->num_input의 값을 숫자로 변환하는 저장 변수
//     console.log(number_type+1) -> 숫자로 인식하면 +1이 돼서 2로 나오게됨
// ->위 변수가 숫자인지 +1을 통해 숫자+숫자 = 숫자 인지 결과 확인
//     console.log(typeof number_type)
// ->위 변수가 number 데이터 타입인지 typeof 연산자 확인
//     result_val.value = num_input.value
//     result_type.value = typeof number_type
// ->모든 결과 console 확인 후 각 변수에 최종 데이터 결과 대입
// })