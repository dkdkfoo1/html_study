//무한반복 while
for(let i=0; i<10; i++){
    console.log(i)
}

let i = 0
while(i<10){
    console.log(i)
    i++
}

console.log('-----------------------------')
let qa = confirm('점심시간이에요?')
while(qa != true){
    let qa = confirm('점심시간이에요?')
}
alert('밥먹자')