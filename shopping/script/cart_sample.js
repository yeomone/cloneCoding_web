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
const delivery_menu_down = delivery_menu.querySelector('i[class$=down]')

delivery_menu_open.style.display = 'none';
delivery_menu.addEventListener('click',function(){
    delivery_menu_open.style.display = 'flex';
    delivery_menu.style.borderBottomRightRadius = '0';
    delivery_menu.style.borderBottomLeftRadius = '0';
    delivery_menu_down.style.transform = 'scaleY(-1)';
})

// 목표) 상품 색상, 사이즈 옵션을 선택했을 때 선택 정보가 selectResult에 결과값으로 출력되고 num_result의 구매수량에 따라 order_price에 가격이 출력되는 결과
// -----------------------------------------
// 상세절차 : 상품 색상, 사이즈 옵션 선택했을 때

// 색상 선택 전 사이즈 옵션 비활성화
// 색상을 선택한 후에 사이즈 옵션이 활성화 되면서 border 색 바뀜
// 색상에 대한 옵션 데이터에 따라 사이즈 옵션의 각 다른 select 활성화
// 색상과 사이즈를 선택한 후에 select_result 출력
// 색상과 사이즈를 선택한 후에 다시 색상 옵션이 활성화(선택 데이터 초기화)
// 동일한 옵션을 선택했을 때 중복선택 에러 메시지 출력
// 기존 선택한 옵션과 다른 옵션 선택 시 기존 옵션 위로 추가하여 출력

const colorOpt = document.querySelector('#colorOpt');
const sizeOpt = document.querySelector('#sizeOpt');
const select_result = document.querySelector('.select_result')
const optClose = select_result.querySelector('.close')

const optResult1 = document.createElement('text');
const optResult2 = document.createElement('text');
const resultView = document.querySelectorAll('.opt_list span')

const num_result = select_result.querySelector('.num_result')
const plus = num_result.querySelector('#plus')
const minus = num_result.querySelector('#minus')
const numView = select_result.querySelector('#num_count')
const orderView = select_result.querySelector('.order_price')
const orderTotalView = document.querySelector('fieldset:nth-child(2) .order_price')

let num = 1;
let price = 36900;
price.innerText = num * price;
console.log(price);

orderView.innerHTML = price.toLocaleString('ko-kr')+'원';
orderTotalView.innerHTML = price.toLocaleString('ko-kr')+'원';
numView.value = num;

console.log(colorOpt, sizeOpt);
console.log(resultView)
console.log(resultView[0],resultView[1])
// colorOpt, sizeOpt text 데이터를 모두 변수로 수집 후
// createElement, appendChild를 이용해서 opt1, opt2 선택 데이터 출력하기
select_result.style.display = 'none';
colorOpt.addEventListener('change', function(){
    console.log(colorOpt.value)
    console.log(colorOpt.options[colorOpt.selectedIndex].text)
    optResult1.innerText = colorOpt.options[colorOpt.selectedIndex].text
    console.log(optResult1)

    colorOpt.style.border = '1px solid #dbdbdb'
    colorOpt.style.transition = 'border 0.5s'
    sizeOpt.style.border = '1px solid #35c5f0'
    sizeOpt.style.transition = 'border 0.5s'
})
sizeOpt.addEventListener('change', function(){
    // 선택 옵션 데이터 저장하기
    console.log(sizeOpt.options[sizeOpt.selectedIndex].text)
    optResult2.innerText = sizeOpt.options[sizeOpt.selectedIndex].text
    console.log(optResult2)
    // 선택 옵션 부모 보이기
    select_result.style.display = 'grid';
    // 선택 옵션 적용 대상에 위 option 데이터 값출력하기
    resultView[0].appendChild(optResult1)
    resultView[1].appendChild(optResult2)
})

// selectResult 안 X 클릭 시 X의 부모(selectResult)를 돔 관계로 선택해서 숨기기
optClose.addEventListener('click',function(){
    optClose.parentElement.style.display = 'none';
})

// 수량 -, + 버튼 클릭 시 수량값이 변경되며 그에 따라 가격 변동
let total = 0;
plus.addEventListener('click',function(){
    // numView.value = Number(numView.value) + 1;
    // orderView.innerHTML = numView.value * price;
    // 1. 수량 1 증가
    num += 1;
    // 1-1. 수량 1 증가한 값 표시
    numView.value = num;
    // 2. 수량 * 가격 = 구매가격
    total = num * price;
    // 3. 구매가 세자리 콤마 표시
    orderView.innerHTML = total.toLocaleString('ko-kr')+'원';
    orderTotalView.innerHTML = total.toLocaleString('ko-kr')+'원';
})
minus.addEventListener('click',function(){
    // numView.value -= 1;
    // orderView.innerHTML = numView.value * price;
        num -= 1;
        numView.value = num;
        total = num * price;
        orderView.innerHTML = total.toLocaleString('ko-kr')+'원';
        orderTotalView.innerHTML = total.toLocaleString('ko-kr')+'원';
})

// 마이너스 플러스 버튼 클릭 시 수량 및 옵션별 금액 변경
// 1보다 작은 값 선택시 최소수량 에러 메시지 출력
// 수량 클릭 시 입력창이 나타남
// select_result의 close를 클릭하면 선택한 옵션들이 삭제됨
// 선택한 모든 옵션들의 값을 합산하여 주문금액으로 출력