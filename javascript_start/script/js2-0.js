//클릭
//인증문자 입력하세요 안내문자나옴
//입력문자가 인증문자 확인에 나옴
//입력한 데이터가 원시데이터 타입기준으로 어떤 데이터인지 타입결과출력



const result_type = document.querySelector('#result1')
const result = document.querySelector('#result2')
const answer_btn = document.querySelector('#answer_btn')

//2.prompt 값 입력 (인증번호)
//3.2번 값의 데이터타입이 result_type출력
//4.2번 값의 결과가 result 출력 


//1.answer_btn 클릭했을 때 
answer_btn.addEventListener('click',function(){
    //2.prompt 값 입력 (인증번호)
    let num = window.prompt('입력하세요')
    //3.2번 값의 데이터타입이 result_type출력
    result_type.value = typeof num
    //4.2번 값의 결과가 result 출력 
    result.value = num
    // console.log(this)
})








