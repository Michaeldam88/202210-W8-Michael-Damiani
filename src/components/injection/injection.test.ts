import { Injection } from "./injection.js";

class Test extends Injection{}

    describe('Given a class that extends abstract class Component', () => {
    test('Then public render method should not return value', () => {
        const testComponent = new Test();
        expect(testComponent.render()).toBeFalsy();
    });
});

