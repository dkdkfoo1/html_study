//노드 생성, 제거
//DOM.createElement(노드생성)
//DOM.remove()
//DOM.removeChild(자식노드)
const p = document.querySelectorAll('p')
const box = document.querySelector('#box')

p[2].remove()
box.removeChild(p[0]) //모든 p말고 box의 자식인 p 만 골라서 지우는 법

let img = document.createElement('img') //없는 요소(태그)를 생성★
img.alt = '연습 이미지'
// img.src = './image/test.jpg' //예를 들어 이미지가 있다면 이런식으로 작성해서 넣기 가능
console.log(img)

let pTag = document.createElement('p')
pTag.classList.add('a')
pTag.innerHTML = 'P태그 생성'
console.log(pTag)

let mom = document.createElement('h1')
mom.classList.add('b','a')
mom.innerHTML = 'h1태그 생성'

let papa = document.createElement('h2')
papa.classList.add('c')
papa.innerHTML = 'h2태그 생성'

box.appendChild(pTag)
box.appendChild(mom)
box.appendChild(papa)
