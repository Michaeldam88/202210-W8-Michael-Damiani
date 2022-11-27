import { FilmCard } from '../../models/filmCard';
import { Injection } from '../injection/injection';

export class FilmElement extends Injection {
    constructor(public selector: string, public item: FilmCard) {
        super();
        this.template = this.createTemplate();
        this.render();
    }

    render() {
        const element = super.innRender(this.selector);
        if (!element) return null;
        setTimeout(() => {
            const component = <HTMLElement>(
                document.querySelector(`#item_${this.item.title}`)
            );
            console.log(component);
        }, 100);
        return element;
    }

    private createTemplate() {
        return `
        <li class="serie" id="film_${this.item.title}">
            <img
                class="serie__poster"
                src="https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
                alt="The Sopranos poster"
            />
            <h4 class="serie__title">The Sopranos</h4>
            <p class="serie__info">David Chase (1999)</p>
            <ul class="score">
                <li class="score__star">
                    <i class="icon--score fas fa-star"
                    title="1/5"></i>
                </li>
                <li class="score__star">
                    <i class="icon--score fas fa-star"
                    title="2/5"></i>
                </li>
                <li class="score__star">
                    <i class="icon--score fas fa-star"
                    title="3/5"></i>
                </li>
                <li class="score__star">
                    <i class="icon--score fas fa-star"
                    title="4/5"></i>
                </li>
                <li class="score__star">
                    <i class="icon--score fas fa-star"
                    title="5/5"></i>
                </li>
            </ul>
            <i class="fas fa-times-circle icon--delete"></i>
        </li>`;
    }
}
