
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