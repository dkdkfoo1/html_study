const all = {
    wheader:'맑음',
    rain:'20%',
    wind:'3.4m/s',
    humid:'15%'
}
const btn = document.querySelectorAll('.btn')
const result = document.querySelector('#result')

btn[0].addEventListener('click',function(){
    result.innerHTML = all.wheader
})
btn[1].addEventListener('click',function(){
    result.innerHTML =all.rain
})
btn[2].addEventListener('click',function(){
    result.innerHTML = all.wind
})
btn[3].addEventListener('click',function(){
    result.innerHTML = all.humid
})
console.log(all.wheader)