function Slider(slide) {
    if (!(slide instanceof Element)) return;
    let current;
    let prev;
    let next;
    const slides = slide.querySelector('.slides');
    const nextBtn = document.querySelector('.goToNext');
    const prevBtn = document.querySelector('.goToPrev');

    function detect() {
        current = slide.querySelector('.current') || slides.firstElementChild;
        prev = current.previousElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.firstElementChild;
    }

    function applyClasses() {
        current.classList.add('current');
        next.classList.add('next');
        prev.classList.add('prev');
    }

    function move(direction) {
        const removeClasses = ['prev', 'current', 'next'];
        prev.classList.remove(...removeClasses);
        current.classList.remove(...removeClasses);
        next.classList.remove(...removeClasses);
        if (direction === "back") {
            [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current]
        } else {
            [prev, current, next] = [current, next, next.nextElementSibling || slides.firstElementChild];

        }
        applyClasses();
    }

    function keyUp(e) {
        if (e.key === "ArrowRight") return move();
        if (e.key === "ArrowLeft") return move("back");
    }

    detect();
    applyClasses();
    prevBtn.addEventListener('click', () => move("back"));
    nextBtn.addEventListener('click', move);
    window.addEventListener('keyup', keyUp);
}

const slider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));