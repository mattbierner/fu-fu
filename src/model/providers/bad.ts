import * as config from '../../config';
import { selectRandom } from "../../util/choose";
import { capitalize } from "../../util/text";

type Target = {
    readonly what: string;
    readonly plural?: boolean;
};

/**
 * Provides "____ is bad" style phrases.
 */
export const xIsBadPhraseProvider = new class {
    private targets: readonly Target[] = [
        // General
        { what: 'babies', plural: true },

        { what: 'compassion', },
        { what: 'emotions', plural: true },
        { what: 'empathy', },
        { what: 'love', },

        { what: 'rural people', plural: true },
        { what: 'women', plural: true },
        { what: 'homosexuals', plural: true },
        { what: 'immigrants', plural: true },

        // Punch down
        { what: 'disabled people', plural: true },
        { what: 'handicapped people', plural: true },
        { what: 'homeless people', plural: true },
        { what: 'old people', plural: true },
        { what: 'hospital patients', plural: true },
        { what: 'poor people', plural: true },
        { what: 'weaklings', plural: true },
        { what: 'nerds', plural: true },

        // race
        { what: 'brown people', plural: true },
        { what: 'black people', plural: true },
        { what: 'white people', plural: true },
        { what: 'non-white people', plural: true },
        { what: 'desegregation', },
        { what: 'integration', },

        // Religion
        { what: 'non-believers', plural: true },
        { what: 'religious people', plural: true },
        { what: 'Islam', },
        { what: 'muslims', plural: true },
        { what: 'Jews', plural: true },
        { what: 'Jesus', },
        { what: 'Buddha', },
        { what: 'Muhammad', },
        { what: 'God', },
    ];

    private readonly phrases = [
        (target: Target) => `${capitalize(target.what)} ${verb(target.plural)} bad!`,
        (target: Target) => `${capitalize(target.what)} ${verb(target.plural)} evil!!!`,
        (target: Target) => `I blame ${target.what}!`,
        (target: Target) => `We must destroy ${target.what}!`,
        (target: Target) => `${capitalize(target.what)} suck${target.plural ? '' : 's'}!!!`,
        (target: Target) => `Boooo ${target.what}!!!`,
        (target: Target) => `Suck it ${target.what}!`,
    ];

    getValue() {
        const value: Target = config.isMeta
            ? { what: 'Tweets', plural: true }
            : selectRandom(this.targets);
        const phrase = selectRandom(this.phrases);
        return phrase(value);
    }
}();


function verb(plural: boolean | undefined) {
    return plural ? 'are' : 'is';
}