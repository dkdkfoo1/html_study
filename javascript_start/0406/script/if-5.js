let userId = 'admin'
let userPw = '1234'

// if(userId == 'admin'){
//     if(userPw != 1234){
//         console.log('비밀번호 오류')
//     }else{
//         console.log('로그인 성공')
//     }
// }else{
//     console.log('아이디 오류')
// }

//ver2
// if(userId == 'admin' && userPw == '1234'){
//     console.log('로그인 성공')
// }else {
//     if(userId != 'admin'){
//         console.log('아이디가 틀렸습니다')
//     }else{console.log('비밀번호가 틀렸습니다')}
// }

let value="왼쪽"
if (value=="왼쪽" || value=="왼쪽" || value=="가운데"){
    console.log(value+'버튼을 눌렀군요!')
}else {
    console.log('확인할 수 없습니다')
}