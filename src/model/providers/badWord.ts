import { selectRandom } from "../../util/choose";

/**
 * Words people have gotten in trouble for using (often rightly so)
 */
export const wordProvider = new class {
    private choices: readonly string[] = [
        'bitch',
        'bitches',
        'fag',
        'faggot',
        'nigger',
        'niggers',
        'chink',
        'chinks',
        'retards',
    ];

    getValue(): string {
        return selectRandom(this.choices).toUpperCase() + '!'.repeat(1 + Math.floor(Math.random() * 3));
    }
}();

