import * as config from "../../config";
import { selectRandom } from "../../util/choose";

/**
 * Provides images.
 */
export const imagePhraseProvider = new class {
    private choices: readonly string[] = [
        'dick.png',
        'blackface.png',
    ];

    getValue(): string {
        const image = selectRandom(this.choices);
        return `${config.homepage}/tweetMedia/${image}`;
    }
}();

