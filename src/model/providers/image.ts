import { selectRandom } from "../../util/choose";

/**
 * Provides images.
 */
export const imagePhraseProvider = new class {
    private choices: readonly string[] = [
        '<<DICK>>',
        '<<BLACKFACE>>',
        '<<DRUNKEN>>',
    ];

    getValue(): string {
        return selectRandom(this.choices);
    }
}();

