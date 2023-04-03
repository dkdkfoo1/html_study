// const result = document.querySelectorAll('.result')
// const answer_btn = document.querySelector('#answer_btn')
// const p = document.querySelector('p')[0]
// const p2 = document.querySelector('p')[1]
// let array1 = ['result']
// let qa = window.confirm
// answer_btn.addEventListener('click',function(){
//     qa = window.confirm('아이디/비밀번호확인')
//     p.innerHTML= array[0]
//     p2.innerHTML= array[1]
//     console.log(this)
// })

//----------
//사이트에 미리 저장된 회원정보 변수(배열)
let userId = ['a','b','c','d','e','f']
let userPw = ['1','2','3','4','5','6']
//DOM 제어 변수
const id_pw_result = document.querySelectorAll('.result')
const answer_btn = document.querySelector('#answer_btn')
console.log(id_pw_result, answer_btn)
console.log(id_pw_result[0], id_pw_result[1])
answer_btn.addEventListener('click',function(){
    id_pw_result[0].innerHTML = userId[1]
    id_pw_result[1].innerHTML = userPw[1]
})



