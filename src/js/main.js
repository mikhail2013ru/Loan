import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import Difference from "./modules/difference";
import Form from "./modules/forms";
import ShowInfo from "./modules/showInfo";
import Download from "./modules/download";
// import VideoPlayer from "./modules/playVideo";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({btns: '.next', container: '.page'});
    slider.render();

    const modulePageSlider = new MainSlider({container: '.moduleapp', btns: '.next'});
    modulePageSlider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    });

    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    });

    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    });

    feedSlider.init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init();
    new Form('.form').init();

    new ShowInfo('.plus__content').init();

    new Download('.download').init();

    // const player = new VideoPlayer('.showup .play', '.overlay');
    // player.play();
})