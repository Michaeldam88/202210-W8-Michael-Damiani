type FilmCardType = {
    title: string;
    imageUrl: string;
    info: string;
    score: number;
    visited: boolean;
    eliminated: boolean;
};

export class FilmCard implements FilmCardType {
    visited: boolean;
    eliminated: boolean;
    score: number;
    constructor(
        public title: string,
        public imageUrl: string,
        public info: string
    ) {
        this.visited = false;
        this.eliminated = false;
        this.score = 0;
    }
}
