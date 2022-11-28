import { seriesList } from '../../mock/series.js';
import { Injection } from '../injection/injection.js';
import { UpdateNum } from '../updateNumberWatched/updateNumWatched.js';

export class DeleteFilm extends Injection {
    constructor(selector: string) {
        super();
        this.deleteHtml(selector);
        this.updateList(selector);
    }

    updateList(id: string) {
        const numberId: number = +id.substring(id.indexOf('_') + 1);
        const film = seriesList.filter((element) => element.id === numberId);
        film[0].eliminated = true;

        new UpdateNum();
    }
}
