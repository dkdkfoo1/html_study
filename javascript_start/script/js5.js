const login_btn = document.querySelector('#login_btn')
const error_result = document.querySelector('#error_result')
const user_id = document.querySelector('#user_id')
const user_pw = document.querySelector('#user_pw')



login_btn.addEventListener('click',()=>{
if(user_id.value == ''){
    error_result.innerHTML = '아이디를 입력하세요'
}
})


//input.value
//p .innerHTML

