import { startingData } from '../../mock/series.js';
import { FilmCardType } from '../../models/filmCard.js';
import { DeleteFilm } from '../deleteFilm/deleteFilm.js';
import { FilmTemplate } from '../filmTemplate/filmTemplate.js';
import { Injection } from '../injection/injection.js';
import { ScoreUpdate } from '../scoreUpdate/scoreUpdate.js';
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
            const starBlock = document.querySelectorAll(
                `#film_${element.id} .icon--score`
            );
            for (let i = 0; i < score; i++) {
                starBlock[i].classList.remove('far');
                starBlock[i].classList.add('fas');
            }
            //activa la puntuación de las estrellas
            const stars = document.querySelectorAll(`.icon--score`);

            const scoreReader = function (this: Element, event: any) {
                const scoreValue: string | null = this.getAttribute('title');
                const id: string = event.path[3].id;
                new ScoreUpdate(id, scoreValue);
            };

            stars.forEach((element) =>
                element.addEventListener('click', scoreReader)
            );
        });
        //actualiza los numeros de las series vistas
        new UpdateNum();

        //activa el botón de borrar
        const deleteButton = document.querySelectorAll(`.icon--delete`);

        deleteButton.forEach((element) => {
            element.addEventListener(
                'click',
                (event: any) =>
                    new DeleteFilm(`#${event.target.parentElement.id}`)
            );
        });
    }
}
