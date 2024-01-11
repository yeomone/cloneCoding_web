// Q. "like_off.png" 클릭 시 src 속성값을 "like_on.png" 변경하기
const like = document.querySelectorAll('.like')
const comment = document.querySelectorAll('.comment')
const share = document.querySelectorAll('.share')
console.log(like)
// like.src = './images/like_on.png'
// like.src = './images/like_off.png'
// like.src = './images/comment_on.png'
// like.src = './images/comment_off.png' ...동일 규칙명

function onOff(name, status){
    return `./images/${name}_${status}.png`
}

// like.addEventListener('click',function(){
//     console.log(like)
//     console.log(like.children)
//     console.log(like.children[0])
//     console.log(like.children[0].src)
//     like.children[0].src = onOff('like','on')
// })

function onOff_v2(target, name, status){
    return target.children[0].src = `./images/${name}_${status}.png`
}

like[0].addEventListener('click',function(){
    // this == 현재 이벤트 대상 객체 키워드('이벤트종류', function(){이벤트 함수 내에서 사용할 때})
    onOff_v2(this,'like','on')
})
comment[0].addEventListener('click',function(){
    console.log(comment)
    console.log(comment.children)
    // console.log(comment.children[0])
    // console.log(comment.children[0].src)
    onOff_v2(this,'comment','on')
})
share[0].addEventListener('click',function(){
    console.log(share)
    console.log(share.children)
    // console.log(share.children[0])
    // console.log(share.children[0].src)
    onOff_v2(this,'paper','on')
})
like[1].addEventListener('click',function(){
    // this == 현재 이벤트 대상 객체 키워드('이벤트종류', function(){이벤트 함수 내에서 사용할 때})
    onOff_v2(this,'like','on')
})
comment[1].addEventListener('click',function(){
    console.log(comment)
    console.log(comment.children)
    // console.log(comment.children[0])
    // console.log(comment.children[0].src)
    onOff_v2(this,'comment','on')
})
share[1].addEventListener('click',function(){
    console.log(share)
    console.log(share.children)
    // console.log(share.children[0])
    // console.log(share.children[0].src)
    onOff_v2(this,'paper','on')
})