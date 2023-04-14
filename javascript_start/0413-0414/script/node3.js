//자식 노드
//nth-child(n), first-child, last-child CSS 비슷
const box = document.querySelector('#box')
const result = document.querySelector('#result')

console.log(box.firstChild)//공백 포함
console.log(box.firstElementChild) //요소 인식
console.log(box.lastChild)
console.log(box.lastElementChild)

box.firstElementChild.style.transform = 'scaleX(1.5)'
box.lastElementChild.classList.add('a') //임의의 클래스로 만든 css 적용법

let clone1 = box.lastElementChild.cloneNode(true)
let clone2 = box.firstElementChild.cloneNode(true)
let clone3 = box.parentNode.cloneNode()
console.log(clone1)

// result.appendChild(clone1) //마지막 자식 추가


//DOM.insertBefore(복제대상, 기준위치) -> 복잡해서 잘 안쓰고 appendChild를 거의 쓴다.
result.insertBefore(clone1, result.firstChild) //공백에 붙혀넣기
result.appendChild(clone3)
box.appendChild(clone2)
