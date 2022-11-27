import { startingData } from '../../mock/series.js';
import { FilmCardType } from '../../models/filmCard.js';
import { FilmTemplate } from '../filmTemplate/filmTemplate.js';
import { Injection } from '../injection/injection.js';

export class FilmRender extends Injection {
    seriesData: FilmCardType[];
    constructor() {
        super();
        this.seriesData = startingData();
        this.renderList();
    }

    renderList() {
        this.seriesData.forEach((element) => {
            const e = new FilmTemplate((element)).createTemplate();
            this.template = e;
            if (element.watched) {
                this.innRender('.series-watched ul');
            } else {
                this.innRender('.series-pending ul');
            }
        });
    }
}
