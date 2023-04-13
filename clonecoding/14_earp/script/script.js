// 주문영역 상품 이미지 view (작은 이미지 클릭 시 큰 이미지로 변경)
const thum = document.querySelectorAll('.thum a')
const big = document.querySelector('.big img')
console.log(thum, big)

thum.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        e.preventDefault()
        console.log(index)
        big.src = `./images/product_0${index+1}.jpg`
    })
})

//주문영역 상품 옵션 선택
const brands = document.querySelector('#brands') 
const galaxy = document.querySelector('#galaxy') 
const iphone = document.querySelector('#iphone') 
console.log(brands, galaxy, iphone)
iphone.style.display = 'none' //아이폰 숨기기(초기값) -> 이건 그냥 사이트 들어갔을 때 초기값
galaxy.disabled = true //비활성화 하는 법

brands.addEventListener('change',()=>{
    if(brands.options[2].selected == true){//아이폰
        brands_dis(iphone, false)
    }else if(brands.options[1].selected == true){//갤럭시
        brands_dis(galaxy, false)
    }else {//필수옵션안내
        brands_dis(galaxy, true)
        galaxy.options[0].selected = true
    }
})

function brands_dis(target, boolean){
    galaxy.style.display = 'none'
    iphone.style.display = 'none'
    target.style.display = 'block'
    target.disabled = boolean 
}

//기종 선택 시 주문영역에 기종명 출력하기
const order_model = document.querySelector('.order_product .model')
const galaxy_op = document.querySelectorAll('#galaxy option')
const iphone_op = document.querySelectorAll('#iphone option')
console.log(order_model, galaxy_op, iphone_op)

//수량 증가 시 가격 증가 
const number_input = document.querySelector('#order_num')
const total_price = document.querySelector('.order_list em span')
const cancel = document.querySelector('#cancel')
let price = 17000
let total

number_input.addEventListener('change',()=>{
    if(number_input.value>0){
    console.log(number_input.value)
    total = price*number_input.value
    console.log(total)
    total_price.innerHTML = total.toLocaleString('ko-kr')
    }else{
        window.alert('최소 주문 수량입니다')
        number_input.value = 1
    }
})

cancel.addEventListener('click',()=>{
    number_input.value = 1
    total_price.innerHTML = price.toLocaleString('ko-kr')
})




//for문은 인덱스가 통일되어 있을 때만 사용가능, 여기서는 이용할 수 없다. (보통 기종 수가 같지 않기 때문에)

//갤럭시 기종 출력
galaxy.addEventListener('change', ()=>{
    let galaxy_index = galaxy.selectedIndex //선택인덱스를 가져다주도록 변수 만드는 법
    console.log(galaxy_index)
    console.log(galaxy_op[galaxy_index])
    order_model.appendChild(galaxy_op[galaxy_index]) //선택한 값을 화면에 출력하는 법 //appendChild는 현재 대상의 뒤로 출력
})
//아이폰 기종 출력

