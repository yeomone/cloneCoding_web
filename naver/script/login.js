// 로그인 탭 제목 클릭 시 해당 내용 활성화 JS
// 0. (초기) 로그인내용O, 일회용내용X, QR코드 내용X, ID 로그인 제목 활성화(CSS)
// 1. ID 로그인 클릭하면 로그인 내용O, 일회용 내용X, QR코드 내용X
// 2. 일회용 클릭하면 로그인 내용X, 일회용 내용O, QR코드 내용X
// 3. QR코드 클릭하면 로그인 내용X, 일회용 내용X, QR코드 내용O
// 제목 변수
const login_title = document.querySelectorAll('.login_title h2 > a')
// 내용 변수
const id_login_container = document.querySelector('.login_container .id_login')
const disposable_login_container = document.querySelector('.login_container .disposable_login')
const qr_login_container = document.querySelector('.login_container .qr_login')

console.log(login_title)
console.log(id_login_container)
console.log(disposable_login_container)
console.log(qr_login_container)

// 초기 일회용, QR 내용 숨기기
disposable_login_container.style.display = 'none'
qr_login_container.style.display = 'none'
// 초기값 ID로그인 활성화 시키기(active) *클릭 전
login_title[0].parentElement.classList.add('active')

// ID 로그인 클릭하면 로그인 내용O, 일회용 내용X, QR코드 내용X
login_title[0].addEventListener('click',()=>{
    console.log('.')
    login_title[0].parentElement.classList.add('active')
    login_title[1].parentElement.classList.remove('active')
    login_title[2].parentElement.classList.remove('active')
    id_login_container.style.display = 'block'
    disposable_login_container.style.display = 'none'
    qr_login_container.style.display = 'none'
})
// 일회용 번호 클릭 시 로그인 내용X, 일회용 내용O, QR코드 내용X
login_title[1].addEventListener('click',()=>{
    console.log('.')
    login_title[0].parentElement.classList.remove('active')
    login_title[1].parentElement.classList.add('active')
    login_title[2].parentElement.classList.remove('active')
    id_login_container.style.display = 'none'
    disposable_login_container.style.display = 'block'
    qr_login_container.style.display = 'none'
})
// QR코드 클릭하면 로그인 내용X, 일회용 내용X, QR코드 내용O
login_title[2].addEventListener('click',()=>{
    console.log('.')
    login_title[0].parentElement.classList.remove('active')
    login_title[1].parentElement.classList.remove('active')
    login_title[2].parentElement.classList.add('active')
    id_login_container.style.display = 'none'
    disposable_login_container.style.display = 'none'
    qr_login_container.style.display = 'block'
})