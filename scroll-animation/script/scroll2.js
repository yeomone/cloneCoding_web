const body = document.querySelector('html, body')
const link_a = document.querySelectorAll('.link a')
const bg = document.querySelectorAll('.bg')
const nav_a = document.querySelectorAll('nav a')
const circle = document.querySelector('.circle')

// classList.add 로 class 적용하기
link_a[0].classList.add('active')

bg.forEach((obj, idx)=>{
    console.log(bg[idx].offsetTop)
})

// 스크롤 했을 때 각 bg의 위치에 닿으면 link-a 색상이 변경되고 싶다
window.addEventListener('scroll', ()=>{
    link_a.forEach((obj, idx)=>{
        // console.log('.')
        if(body.scrollTop >= bg[idx].offsetTop-200){
            // console.log('..')
            link_a_remove()
            link_a[idx].classList.add('active')
        }
    })
})

// 클래스 초기화 함수 생성
const link_a_remove = ()=>{
    // link_a.forEach((obj, idx)=>{link_a[idx].classList.remove('active')})
    for(let i of link_a){i.classList.remove('active')}
}
link_a_remove()

// nav_a 클릭 시 각 bg1~4 위치로 스크롤 이동
/* nav_a[3].addEventListener('click',(e)=>{
    e.preventDefault()
    window.scrollTo(0, bg[3].offsetTop)
}) */
nav_a.forEach((obj, idx)=>{
    obj.addEventListener('click',(e)=>{
        // a 태그를 사용했을 때는 preventDefault
        e.preventDefault()
        window.scrollTo(0, bg[idx].offsetTop)
    })
})

window.addEventListener('mousemove',(e)=>{
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
})