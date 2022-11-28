import { FilmRender } from './components/filmRender/filmRender.js';
import { UpdateNum } from './components/updateNumberWatched/updateNumWatched.js';

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        new FilmRender();
        new UpdateNum();        
    });
})();
