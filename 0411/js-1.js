td// let array = new Array (1,2,3,'H','e','l','l','o')
// console.log(array[0],array[1],array[2],array[3],array[4],array[5],array[6],array[7])
// for (let i=0; i<array.length; i++){
//     console.log(array[i])
//     console.log(typeof array[i])
// }

let num = 100
for(let i=1; i<10; i++){
    num += i
    continue;
    console.log(num, i)
}
console.log(num)

// for(let i=0; i<5; i++){
//     if(i%2==0){
//         break;
//         num += i
//     }
// }
// console.log(num) 

//다중 for
//1단 for 
for(let i=1; i<3; i++){
    //2단 for : 1단 for가 한번 루프할때 2단 for는
    //조건이 거짓이 될때까지 모두 루프한다.
    for(let j=3; j>=0; j--){
        console.log(`i=${i}, j=${j}`)
    }
}

//다중 for 활용 태그 생성
let p_tag = '<p>test</p>'
let li = '<li>list</li>'
document.write('<ul>')
for(let i=0; i<5; i++){
    document.write(li)
}
document.write('</ul>')

//다중 for 1행 3열 표1개
//table, tr, td 이용
//1행 3열 table1, tr1, td3
//2행 2열 1, 2, 2
let td = '<td>cell</td>'
for(let n=0; n<2; n++){
    document.write('<table border ="1">')
    for(let i=0; i<2; i++){
        document.write('<tr>')
        for(let j=0; j<3; j++){
            document.write(td)
        }
        document.write('</tr>')
    }
    document.write('</table>')
}

//다중 for 활용한 영화관 좌석 만들기
//table1 tr4 td4
let seat = 1
let number = ['A','B','C','D']
for(let n=0; n<1; n++){
    document.write('<table border ="1">')
    for(let i=0; i<4; i++){
        document.write('<tr>')
        document.write(`<td>${number[i]}</td>`)
        for(let j=0; j<4; j++){
            // if(seat>4){seat=1}
            document.write(`<td>${seat++}</td>`)
        }
        seat = 1
        document.write('</tr>')
    }
    document.write('</table>')
}



