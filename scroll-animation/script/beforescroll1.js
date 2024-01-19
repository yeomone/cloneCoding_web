const btn = document.querySelectorAll('button')
const bg = document.querySelectorAll('.bg')
console.log(btn)

btn.forEach((b, i)=>{
    b.addEventListener('mouseover',()=>{
        b.style.opacity = '0.4'
        // b.style.width = '100px'
        // b.style.paddingLeft = '100px'
        b.style.borderRadius = '10px'
        // b.style.transform = 'scaleX(3)';
        // b.style.transformOrigin = 'right center';
        b.style.transition = 'opacity 0.3s,width 0.7s,borderRadius 0.3s, transform 0.3s'
    })
    b.addEventListener('mouseout',()=>{
        b.style.opacity = '1'
        // b.style.width = '30px'
        // b.style.paddingLeft = '0'
        b.style.borderRadius = '500px'
        // b.style.transform = 'scaleX(1)';
        // b.style.transformOrigin = 'right center';
        b.style.transition = 'opacity 0.3s,width 0.5s, transform 0.3s'
    })
    b.addEventListener('click',()=>{
        window.scrollTo({left:0, top: bg[i]})
        console.log(bg[i])
    })
})