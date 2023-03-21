//객체지향프로그래밍 언어 자바스크립트 기본순서
//객체 변수 선언 -> 변수 속성, 메소드 활용 결과 값
//객체 아이디 변수 선언
//*변수 생성 후 콘솔로 올바른 변수인지 반드시 체크한다!
//위에 있는거 오류나면 밑에 있는것까지 다 오류남. (중요)
//const 다음에 있는 건 개발자 맘대로 지어도 상관없지만 의미적으로 알아볼 수 있게 지어야함.
//변수 (아이디DOM)
const title = document.getElementById('title')
const link = document.getElementById('link')
const contents = document.getElementById('contents')
//변수 (클래스DOM)
const first = document.getElementsByClassName('first')[0] //contens 아이디와 다르게's'가 붙는다 class는 id와 다르게 하나만 가지지 않는 속성이니까
const last = document.getElementsByClassName('last')[0] //index[]에는 몇번째 class 이름인지 표기해야한다. 첫번째는 1이 아니라 0부터 센다.
const menu = document.getElementsByClassName('menu')
const a = document.getElementsByClassName('a')
const a1 = document.getElementsByClassName('a')[0]
const a2 = document.getElementsByClassName('a')[1]
const a3 = document.getElementsByClassName('a')[2]
const a4 = document.getElementsByClassName('a')[3]
//-> let 말고 const로 많이 사용한다. -> 태그가 바뀌지 않기 때문에. (상수)
//변수 (태그DOM)
const li = document.getElementsByTagName('li')
const h1 = document.getElementsByTagName('h1')
const p = document.getElementsByTagName('p')
const ul = document.getElementsByTagName('ul')
const nav = document.getElementsByTagName('nav')
const ahref = document.getElementsByTagName('a')
//출력
console.log(a)
console.log(nav)
console.log(ul)
console.log(p)
console.log(h1)
console.log(li)
console.log(a[0], a[1], a[2], a[3]) //자바는 해당 클래스가 들어있으면 다른 부모에 있든 어디에 있든 상관없이 그냥 그 클래스가 있는 대상을 하나하나 순차적으로 접근한다.
console.log(a1, a2, a3, a4)
console.log(menu[2])//출력할때에 index를 붙혀줄 수도 있음. (그때는 생성할 때 index를 넣으면 안됨.)
//-> 출력할때 쓰는 게 더 편함.
console.log(last)
console.log(first)
console.log(title, contents, link) //한번에 검사도 가능
console.log(title)
console.log(contents)
console.log(link)
//뭔가 실행하기전에 내가 만든 변수를 오류없이 만들었는지 확인을 하는 것.