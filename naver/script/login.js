// 로그인 탭 제목 클릭 시 해당 내용 활성화 JS
// 0. (초기) 로그인내용O, 일회용내용X, QR코드 내용X, ID 로그인 제목 활성화(CSS)
// 1. ID 로그인 클릭하면 로그인 내용O, 일회용 내용X, QR코드 내용X
// 2. 일회용 클릭하면 로그인 내용X, 일회용 내용O, QR코드 내용X
// 3. QR코드 클릭하면 로그인 내용X, 일회용 내용X, QR코드 내용O
// 제목 변수
const login_title = document.querySelectorAll('.login_title h2 > a')
// 내용 변수
const login_container = document.querySelectorAll('.login_container > .login_c')
console.log(login_title)
console.log(login_container) // 전체

// 초기 일회용, QR 내용 숨기기
const hide = () => {for(let h of login_container){h.style.display = 'none'}}
hide()
login_container[0].style.display = 'block'

// 초기값 ID로그인 활성화 시키기(active) *클릭 전
const title_hide = () => {for(let th of login_title){
    th.parentElement.classList.remove('active')
}}
login_title[0].parentElement.classList.add('active')

login_title.forEach((t, i)=>{
    t.addEventListener('click',()=>{
        hide()
        title_hide()
        login_container[i].style.display = 'block'
        t.parentElement.classList.add('active')
    })
})

// ----------------------------------------------------
console.log('로그인 메세지 출력======================')
// 아이디 로그인 시 틀린 정보 또는 입력되지 않은 정보에 따라 error message 출력하기
// 1. 아이디 미입력 후 로그인 버튼 클릭 => "아이디를 입력해주세요"
// 2. 아이디 입력, 비밀번호 미입력 후 로그인 버튼 클릭 => "비밀번호를 입력해주세요"
// 3. 아이디, 비밀번호 입력 후 로그인 버튼 클릭 시 해당 정보가 맞지 않다면 => "아이디(로그인 전용 아이디)또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요."
// 4. 아이디, 비밀번호 입력 후 로그인 버튼 클릭 시 해당 정보가 맞다면 => 로그인 성공 팝업 "어서오세요 OO님"

const userIdInput = document.querySelector('#userId');
const userPwInput = document.querySelector('#userPw');
const error_message = document.querySelector('.error_message');
const loginBtn = document.querySelector('#loginBtn');
const userList = [{
    id:'admin',
    pw:'1234',
}]
console.log(userIdInput,userPwInput,error_message,loginBtn)

console.log(userIdInput.value)
console.log(userIdInput.value == '')

loginBtn.addEventListener('click',()=>{
    if(userIdInput.value === ''){ // 아이디 빈 문자열 검사 -> 참이라면
        error_message.innerHTML = '아이디를 입력해 주세요'; // 참일 때 실행
    }else if(userPwInput.value === ''){// 비밀번호 빈 문자열 검사 -> 참이라면
        error_message.innerHTML = '비밀번호를 입력해 주세요'; // 참일 때 실행
    }else if(userIdInput.value === userList[0].id && userPwInput.value === userList[0].pw){
        alert(`어서오세요 ${userList[0].id}님`)
    }else {
        error_message.innerHTML = '아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.<br>입력하신 내용을 다시 확인해주세요.';
        userPwInput.value = ''
    }
})
// ------------------------------------------------
// 1. 번호 미입력 시 로그인 버튼 눌렀을 때 '일회용 로그인 번호를 입력하세요.' 출력

const disposable_num = document.querySelector('#disposable_num')
const disposable_btn = document.querySelector('#disposable_btn')
const disposable_error_message = document.querySelector('.disposable_error_message');


disposable_btn.addEventListener('click',()=>{
    if(disposable_num.value === ''){
        disposable_error_message.innerHTML = '일회용 로그인 번호를 입력하세요.'
    }
})