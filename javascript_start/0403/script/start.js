var box1 = 10 // var는 중복변수이름을 넣어도 못잡아줌
let box2 = 20 //변수 
const box3 = 30  //상수
let box4 = 'hello javascript'
console.log(`box1 변수의 값 = ${box1}`)
console.log(`box2 변수 값 = ${box2}`)
console.log(`box3 상수 값 = ${box3}`)
//box1 = box1+1 
//오른쪽부터 먼저 읽고 대입연산자를 확인해야함.
box1 += 1 //box1 = box1+1
box1 += 10 //box1 = box1+10 // 복합대입연산자
console.log(`box1 변수 값 = ${box1}`) //템플릿 문자열 //log = 메소드 console = 객체 
box2 = box2%2 //산술연산자
console.log(`box2 변수 값 = ${box2}`)
box2 = box1++ //증감연산자 (앞에있으면 전위연산자 뒤는 후위연산자)
console.log(`box2 변수 값 = ${box2}`)
//box3은 상수라 바꿀 수 없어서 콘솔에 오류로 뜸 box2 = ++box3
console.log(`box2=${box2}, box1=${box1}`)
box1 = box3 
console.log(`box1=${box1}, box3=${box3}`)
console.log(box4.length) //공백포함 문자의 길이 1부터 처리
//---------------------------------------------------------
let array1 = ['aqua', 'lime', 'yellow']
let array2 = new Array('black', 'white', 'gray')
let array3 = new Array(10)
console.log(array1)
console.log(array1[0], array1[1], array1[2])
console.log(array2)
console.log(array2[0], array2[1], array2[2])
console.log(array3)
array3[9] = 'black'
//인덱스는 0에서 부터 시작하기 때문에 10번째에는 9로 써야함.
console.log(array3)
//-------------------------------------------------------------
let array4 = ['10',20,30,40,50]
let total
console.log(array4)
console.log(array4[0]+1) //101 vs 11
console.log(array4[1]%2) //0
console.log(++array4[4]) //51

console.log(array4[3]++) //40
total = array4[3]++
console.log(`total=${total}, array4[3]=${array4[3]}`)