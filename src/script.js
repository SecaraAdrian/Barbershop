const leftScissor = document.getElementById('left-scissor');
const rightScissor = document.getElementById('right-scissor');

leftScissor.addEventListener('mouseenter', () => {
    leftScissor.classList.add('animate');
});

leftScissor.addEventListener('mouseleave', () => {
    leftScissor.classList.remove('animate');
});

rightScissor.addEventListener('mouseenter', () => {
    rightScissor.classList.add('animate');
});

rightScissor.addEventListener('mouseleave', () => {
    rightScissor.classList.remove('animate');
});
