import { seriesList } from '../../mock/series.js';
import { FilmRender } from '../filmRender/filmRender.js';
import { Injection } from '../injection/injection.js';

export class ScoreUpdate extends Injection {
    constructor(selector: string, score: string) {
        super();

        this.updateList(selector, score);
        this.template = '';
    }

    updateList(id: string, score: string) {
        const numberId: number = +id.substring(id.indexOf('_') + 1);
        const scoreValue: number = +score.charAt(0);
        const film = seriesList.filter((element) => element.id === numberId);
        film[0].watched = true;
        film[0].score = scoreValue;

        this.innRenderReplacer('.series-watched ul');
        this.innRenderReplacer('.series-pending ul');

        new FilmRender();
    }
}
