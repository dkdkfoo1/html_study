//변수
const a_more = document.getElementsByClassName('more')
const img = document.getElementsByTagName('img')
const plus = document.getElementsByClassName('plus')
const join = document.getElementById('join_btn')
const li = document.getElementsByTagName('li')
//출력
console.log(a_more[0])
console.log(img[0])
//console.log(a_more[0], img) 이런식으로 합쳐서 써도 됨.
console.log(plus[0], plus[1])
console.log(join)
console.log(li[0], li[1], li[2], li[3], li[4])

//---------------style속성
//객체.속성
//style == css 
//속성종류 => font-size, color, font-weight, background...
//객체.style.속성 = 값
a_more[0].style.color = 'red'
//->개별 접근 [index]를 꼭 넣어야함.
li[0].style.backgroundColor = 'rgba(444,444,0,0.5)'
li[1].style.backgroundColor = '#547'
li[2].style.backgroundColor = 'plum'
li[3].style.backgroundColor = 'green'
li[4].style.backgroundColor = 'skyblue'
li[4].style.fontSize = '3rem'
li[3].style.border = '2px solid red'
//두 단어가 연결되는 속성은 카멜표기법으로 써야한다. 하이픈 (-)같은거 못씀 js에서는