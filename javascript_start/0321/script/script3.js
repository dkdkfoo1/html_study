const btn1 = document.getElementById('btn1')
const btn = document.getElementsByClassName('btn')
//-> 변수를 공통으로 적어놓는다.
console.log(btn1, btn, btn[0], btn[1], btn[2], btn[3])
console.log(btn1.innerHTML)
//내용변경 == 대입한다
btn1.innerHTML = '확인완료'
//=>콘솔의 내용을 대입하겠다 (변경) , '확인완료'로
btn[0].innerHTML = 'home'
btn[1].innerHTML = 'mail'
btn[2].innerHTML = 'cafe'
btn[3].innerHTML = 'blog'
//->여기서 객체[index].속성 = 바꿀 값.
