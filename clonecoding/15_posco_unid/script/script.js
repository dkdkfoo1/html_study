//posco

const btn = document.querySelectorAll('.gnb > li')
const menu = document.querySelectorAll('.sub')
const bg = document.querySelector('nav .bg')
console.log(menu, btn, bg)

// 1. 모든 서브 숨기기
for(let i of menu){
    i.style.height = '0px'
    i.style.overflow = 'hidden'
    i.style.transition = '0.5s'
}
bg.style.height = '0px'
bg.style.overflow = 'hidden'
bg.style.transition = '0.5s'
// 2. gnb 자식 li에 마우스를 올리면 자식 sub 보이기(Node관계처리)
for(let i of btn){
    i.addEventListener('mouseover',()=>{
        // i.children[1].style.height = '300px'
        for(let j of menu){
            j.style.height = '300px'
        }
        bg.style.height = '300px'
    })
    //3. gnb 자식 li에서 나가면 자식 sub 숨기기
    i.addEventListener('mouseout',()=>{
        // i.children[1].style.height = '0px'
        for(let j of menu){
            j.style.height = '0px'
        }
        bg.style.height = '0px'
    })
}
