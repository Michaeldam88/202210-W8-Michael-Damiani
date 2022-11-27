export abstract class Injection {
    template!: string;
    injectionPoint!: Element | null;

    innRender(selector: string) {
        try {
            this.injectionPoint = this.selectElement(selector);
            this.injectionPoint.innerHTML += this.template;
        } catch (error) {
            this.injectionPoint = null;
        }

        return this.injectionPoint;
    }

    selectElement(selector: string) {
        const error = new Error('Invalid selector');
        if (!selector) throw error;
        const e = document.querySelector(selector);
        if (e === null) throw error;
        return e;
    }

    render() {
        return this.injectionPoint;
    }
}
