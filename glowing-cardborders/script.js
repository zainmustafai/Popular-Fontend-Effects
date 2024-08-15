
const cards = document.querySelectorAll('.card');
const handleMouseEnter = (e) => {
    const card = e.currentTarget;
    console.clear();
    console.log("PAGE X", e.pageX);
    console.log("OFFSET X", card.offsetLeft);
    const x = e.pageX - card.offsetLeft;
    const y = e.pageY - card.offsetTop;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);


};

for (let card of cards) {
    card.addEventListener('mousemove', handleMouseEnter);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', () => {
    });
}
