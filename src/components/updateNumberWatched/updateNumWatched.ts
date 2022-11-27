import { startingData } from "../../mock/series.js";
import { FilmCardType } from "../../models/filmCard.js";
import { Injection } from "../injection/injection.js";

export class UpdateNum extends Injection{
    seriesData: FilmCardType[];
    constructor(){
        super()
        this.seriesData = startingData();
        this.template = this.checkWatchedSeries();
        
    }
}

checkWatchedSeries(){
    const totalWatched = this.seriesData.filter
    //this.innRender(".series-pending info")
    //You have 4 series pending to watch
     //<!--<p class="info">Congrats! You've watched all your series</p>-->
    //this.innRender(".series-watched info")
    //You have watched 4 series
    //<!--<p class="info">You already have not watched any serie</p>-->
}
