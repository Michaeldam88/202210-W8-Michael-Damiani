import { startingData } from '../../mock/series.js';
import { FilmCardType } from '../../models/filmCard.js';
import { FilmTemplate } from '../filmTemplate/filmTemplate.js';
import { Injection } from '../injection/injection.js';
import { UpdateNum } from '../updateNumberWatched/updateNumWatched.js';

export class FilmRender extends Injection {
    seriesData: FilmCardType[];
    constructor() {
        super();
        this.seriesData = startingData();
        this.renderList();
    }

    renderList() {
        this.seriesData.forEach((element) => {
            const e = new FilmTemplate(element).createTemplate();
            this.template = e;

            if (element.watched) {
                this.innRender('.series-watched ul');
            } else {
                this.innRender('.series-pending ul');
            }

            //renderiza los colores de las estrellas
            const score = element.score;
            const stars = document.querySelectorAll(
                `#film_${element.id} .score__star i`
            );
            for (let i = 0; i < score; i++) {
                stars[i].classList.remove('far');
                stars[i].classList.add('fas');
            }

            //activa el botón de borrar
            const deleteButton = document.querySelector(
                `#film_${element.id} .icon--delete`
            );
            deleteButton?.addEventListener('click', () =>
                this.deleteHtml(`#film_${element.id}`)
            );

        });
        //actualiza los numeros de las series vistas
        new UpdateNum();
    }
}
