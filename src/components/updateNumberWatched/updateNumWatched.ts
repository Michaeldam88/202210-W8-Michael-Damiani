import { startingData } from '../../mock/series.js';
import { FilmCardType } from '../../models/filmCard.js';
import { Injection } from '../injection/injection.js';

export class UpdateNum extends Injection {
    seriesData: FilmCardType[];
    constructor() {
        super();
        this.seriesData = startingData();
        this.checkWatchedSeries();
    }

    checkWatchedSeries() {
        const totalWatched: number | undefined = this.seriesData.filter(
            (element) => element.watched === true
        ).length;

        if (totalWatched === 0) {
            this.template = 'You already have not watched any serie';
            this.innRenderReplacer('.series-watched .info');
            return;
        }

        if (totalWatched === this.seriesData.length) {
            this.template = `Congrats! You've watched all your series`;
            this.innRenderReplacer('.series-pending .info');
            return;
        }

        this.template = `You have watched ${totalWatched} series`;
        this.innRenderReplacer('.series-watched .info');
        this.template = `You have ${
            this.seriesData.length - totalWatched
        } series pending to watch`;
        this.innRenderReplacer('.series-pending .info');
    }
}
