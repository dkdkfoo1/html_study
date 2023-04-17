const h_bg = document.querySelector('#h_bg')
const gnb = document.querySelectorAll('.gnb > li')
const sub = document.querySelectorAll('.sub1')
const sub_bg = document.querySelector('.nav_bg')

console.log(h_bg, gnb, sub, sub_bg)

//1.모두 숨기기
sub_func('none')
// 2.gnb 마우스 오버 시 sub, sub_bg 보이기
for(let i of gnb){
    i.addEventListener('mouseover',()=>{
        sub_func('block','#fff')
        i.children[1].style.background = '#eee'
        i.children[0].style.color = '#f00'
    })
    //2.gnb 마우스 나갈 시 sub, sub_bg 숨기기
    i.addEventListener('mouseout',()=>{
        sub_func('none', 'rgba(255,255,255,0.5)')
        i.children[1].style.background = '#fff'
        i.children[0].style.color = '#000'
    })
}

// 함수로 만드는 법
function sub_func(value, bg){
    h_bg.style.background = bg
    sub_bg.style.display = value
    for(let i of sub){i.style.display = value}
}













//-----------------------------------------------------
//내가 한것들
// for(let i of sub){i.style.height = '0'}
// for(let i of sub){i.style.overflow = 'hidden'}
// for(let i of sub){i.style.transition = '0.5s'}
// sub_bg.style.height = '0'
// sub_bg.style.transition = '0.5s'


// gnb.forEach((target,index)=>{
//     target.addEventListener('mouseover',(e)=>{
//         for(let i of sub){
//             i.style.height = '0'
//         }
//         sub[index].style.height = '50vh'
//     })
//     target.addEventListener('mouseout',()=>{
//         for(let i of sub){
//             i.style.height = '0'
//         }
//     })
// })

// h_bg.addEventListener('mouseover',()=>{
//     sub_bg.style.height = '50vh'
// })
// h_bg.addEventListener('mouseout',()=>{
//     sub_bg.style.height = '0'
// })


// gnb.forEach((target,index)=>{
//     target.addEventListener('mouseover',(e)=>{
//         for(let i of sub){
//             i.style.backgroundColor = '#fff'
//         }
//         sub[index].style.backgroundColor = '#ccc'
//     })
//     target.addEventListener('mouseout',()=>{
//         for(let i of sub){
//             i.style.backgroundColor = '#fff'
//         }
//     })
// })
