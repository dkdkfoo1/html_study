//조건문 switch 다중조건처리
let a = 20
switch(a){
    case 10:console.log('a == 10'); break;
    case 20:console.log('a == 20'); break;
    default:console.log('일치하는값없음')
}
//-------------------------------------2
let b = 10
let c = 5
let total = b>c //if(b>c) {참}else{거짓}
switch(total){
    case true:console.log('참'); break;
    case false:console.log('거짓'); break;
    default:console.log('잘못된 접근입니다.')
}
//-----------------------------------3
//쇼핑몰에서 과일을 검색하면 판매가 표시

let order = '딸기'

switch(order){
    case '딸기':console.log('딸기는 1000원입니다'); break;
    case '수박':console.log('수박은 5000원입니다'); break;
    case '오랜지':console.log('오랜지는 2000원입니다'); break;
    default:console.log('판매하지 않는 상품입니다')
}

//------------------------------------4



// let aaa = Number(window.prompt ('첫번째 숫자를 입력하세요'))
// let bbb = Number(window.prompt ('두번째 숫자를 입력하세요'))

// let op = prompt('연산법(+,-,*,/,%)을 정하세요')

// switch(op){
//     case '+' :result = aaa + bbb; break;
//     case '-' :result = aaa - bbb; break;
//     case '*' :result = aaa * bbb; break;
//     case '/' :result = aaa / bbb; break;
//     case '%' :result = aaa % bbb; break;
//     default:console.log('잘못된 입력 방법입니다')
// }
// console.log(result)

//--------------------------5
// let lucky = 7
// let result
// if(lucky == 1){
//     result = '당첨! 냉장고'
// }else if(lucky == 2){
//     result = '당첨! 세탁기'
// }else if(lucky == 3){
//     result = '당첨! TV'
// }else {
//     result = '꽝'
// }
// console.log(result)


let lucky = 3
let result

switch(lucky){
        case 1 :result = '당첨! 냉장고'; break;
        case 2 :result = '당첨! 세탁기'; break;
        case 3 :result = '당첨! TV'; break;
        default:result = '꽝'
    }
    console.log(result)