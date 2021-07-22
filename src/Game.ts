import { Display, Color } from 'rot-js';
import { DisplayOptions } from 'rot-js/lib/display/types';
import { CanvaDimensions } from './options';
import World from './World';

type ResourceTypes = Display;

class Game {
    private curFrame: number = 0;
    private dirty: boolean = false;
    private world: World<ResourceTypes> = new World();

    constructor() {}

    initDisplay = () => {
        const displayOptions: Partial<DisplayOptions> = {
            ...CanvaDimensions,
            fontSize: 18,
        };
        const display = new Display(displayOptions);
        this.dirty = true;
        this.world.addResources(display);
        return display;
    };

    render = () => {
        if (!this.dirty) return;

        const color = Color.randomize([120, 24, 32], [4, 124, 99]);

        const display = this.world.getResources(Display);

        for (let x = 1; x < CanvaDimensions.width - 1; x++) {
            for (let y = 1; y < CanvaDimensions.height - 1; y++) {
                display.draw(x, y, '#', Color.toHex(color), undefined);
            }
        }
        this.dirty = false;
    };

    frame = (frameNumber: number) => {
        const delta = frameNumber - this.curFrame;
        if (delta > 32) {
            this.curFrame = frameNumber;
            const fps = 1000.0 / delta;
            this.render();
            const display = this.world.getResources(Display);
            display.drawText(0, 0, `frame: ${fps}`, CanvaDimensions.width);
        }
        window.requestAnimationFrame(this.frame);
    };

    run() {
        // Main game loop
        window.requestAnimationFrame(this.frame);
    }
}

export default Game;
