export abstract class Injection {
    template!: string;
    injectionPoint!: Element | null;

    protected innRender(selector: string) {
        try {
            this.injectionPoint = this.selectElement(selector);
            this.injectionPoint.innerHTML += this.template;
        } catch (error) {
            this.injectionPoint = null;
        }

        return this.injectionPoint;
    }

    private selectElement(selector: string) {
        const error = new Error('Invalid selector');
        if (!selector) throw error;
        const e = document.querySelector(selector);
        if (e === null) throw error;
        return e;
    }

    protected innRenderReplacer(selector: string) {
        try {
            this.injectionPoint = this.selectElement(selector);
            this.injectionPoint.innerHTML = this.template;
        } catch (error) {
            this.injectionPoint = null;
        }

        return this.injectionPoint;
    }

    render() {
        return this.injectionPoint;
    }
}
