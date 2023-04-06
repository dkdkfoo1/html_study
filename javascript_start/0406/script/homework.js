// 나의 평균값을 정하고 아래 요구사항에 맞게 출력해주세요
// 100~90이면 A학점, 
// 89~80이면 B학점, 
// 79~70이면 C학점, 
// 69~60이면 D학점, 
// 59 이하이면 F학점이 나오게해주세요.

a = 50

if(a >= 90 && a <= 100){
    console.log('a학점')
}else if(a <=89){
    console.log('b학점')
}else if(a <=79){
    console.log('c학점')
}else if(a <=69){
    console.log('d학점')
}else if(a <=59){
    console.log('F학점')
}