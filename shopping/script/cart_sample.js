// 왼쪽 썸네일 이미지 JS
// small_thumnail-a에 마우스를 올리면 (ex)small2에 마우스를 올리면
// big_thumnail-img(src)의 값이 변경된다. (ex) big1이 big2 이미지 변경
const item_detail = document.querySelector('.item_detail');
const small_thumnail = item_detail.querySelectorAll('.small_thumnail a');
const big_thumnail = item_detail.querySelector('.big_thumnail img');
console.log(item_detail,small_thumnail,big_thumnail)

small_thumnail[0].addEventListener('mouseover',function(){
    big_thumnail.src="./dog_images/big1.jpg"
})
small_thumnail[1].addEventListener('mouseover',function(){
    big_thumnail.src="./dog_images/big2.jpg"
})
small_thumnail[2].addEventListener('mouseover',function(){
    big_thumnail.src="./dog_images/big1.jpg"
})
small_thumnail[3].addEventListener('mouseover',function(){
    big_thumnail.src="./dog_images/big2.jpg"
})
small_thumnail[4].addEventListener('mouseover',function(){
    big_thumnail.src="./dog_images/big1.jpg"
})
small_thumnail[5].addEventListener('mouseover',function(){
    big_thumnail.src="./dog_images/big2.jpg"
})

// 가격 할인 정보 클릭 시 나오는 정보 팝업
// 1. 팝업 숨기기
// 2. i 클릭하면 팝업 보이기

const price_info = item_detail.querySelector('.price i[class$=info]')
const price_info_open = item_detail.querySelector('.price .open')

console.log(price_info_open, price_info)

price_info_open.style.display = 'none';
price_info.addEventListener('click', function(){
    price_info_open.style.display = 'block';
})

// 내일 출발 i 클릭 시 팝업 출력하고 팝업 내 X 클릭 시 팝업 닫히기 JS
// 1. 팝업 숨기기
// 2. i 클릭 시 팝업 출력
// 3. X 클릭 시 팝업 닫히기

const benefit_shipping_info = item_detail.querySelector('.benefit_shipping i[class$=info]')
const benefit_shipping_info_open = item_detail.querySelector('.benefit_shipping .open')
const close = benefit_shipping_info_open.querySelector('.close')

benefit_shipping_info_open.style.display = 'none';
benefit_shipping_info.addEventListener('click', function(){
    benefit_shipping_info_open.style.display = 'block';
})
close.addEventListener('click', function(){
    benefit_shipping_info_open.style.display = 'none';
})

// 목표) 배송 1/9 (화) 도착 예정 94% 메뉴를 클릭하면 메뉴 펼침 정보 나타나기
// 1. 펼침 메뉴 초기 숨기기
// 2. 배송1/9(화) 도착 예정 94% 메뉴 클릭 시 
// 3. 위(1)의 둥근 모서리 하단 모양 뾰족하게 변경
// 4. 위(1)의 94% 옆 화살표 상하 반전 하기
// 5. 메뉴 펼침 정보 보이기

const delivery_menu = item_detail.querySelector('.delivery_menu')
const delivery_menu_open = item_detail.querySelector('.delivery_menu_open')
const delivery_list = delivery_menu_open.querySelector('.list')
const delivery_menu_down = delivery_menu.querySelector('i[class$=down]')

delivery_menu_open.style.display = 'none';
delivery_menu.addEventListener('click',function(){
    delivery_menu_open.style.display = 'flex';
    delivery_menu.style.borderBottomRightRadius = '0';
    delivery_menu.style.borderBottomLeftRadius = '0';
    delivery_menu_down.style.transform = 'scaleY(-1)';
})