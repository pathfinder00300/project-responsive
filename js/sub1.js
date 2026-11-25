//section02 design
const cards = document.querySelectorAll('.design .card_text');
const stickyImg = document.querySelector('.design .sticky img');

const images = [
    './images/sub1/sub1_design.jpg',
    './images/sub1/sub1_design2.jpg',
    './images/sub1/sub1_design3.jpg',
    './images/sub1/sub1_design4.jpg'
];

// 이미지 변경 + 제목 색상 변경
function changeCard(index) {

    cards.forEach((card) => {
        card.classList.remove('active');
    });

    cards[index].classList.add('active');

    stickyImg.src = images[index];
}

// 첫 번째 카드 활성화
changeCard(0);

// 스크롤 감지
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            const index = Array.from(cards).indexOf(entry.target);

            changeCard(index);
        }

    });

}, {
    rootMargin: '-35% 0px -55% 0px'
});

// 모든 카드 관찰
cards.forEach((card) => {
    observer.observe(card);
});