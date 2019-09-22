import * as config from '../../config';
import { selectRandom } from "../../util/choose";
import { capitalize } from "../../util/text";

type Target = {
    readonly what: string;
    readonly verb: 'is' | 'are';
};

/**
 * Provides "____ is good" style phrases
 */
export const xIsGoodPhraseProvider = new class GoodProvider {
    private targets: readonly Target[] = [
        // General
        { what: 'greed', verb: 'is' },
        { what: 'privilege', verb: 'is' },
        { what: 'bullying', verb: 'is' },
        { what: 'oppression', verb: 'is' },
        { what: 'violence', verb: 'is' },
        { what: 'punching down', verb: 'is' },
        { what: 'heroin', verb: 'is' },
        { what: 'smoking', verb: 'is' },
        { what: 'cancer', verb: 'is' },
        { what: 'cannibalism', verb: 'is' },
        { what: 'dictatorships', verb: 'are' },
        { what: 'terrorism', verb: 'is' },
        { what: 'ISIS', verb: 'is' },
        { what: 'body shaming', verb: 'is' },
        { what: 'slavery', verb: 'is' },

        // sexual
        { what: 'The Republic of Gilead', verb: 'is' },
        { what: 'aids', verb: 'is' },
        { what: 'rape', verb: 'is' },
        { what: 'necrophilia', verb: 'is' },
        { what: 'pedophilia', verb: 'is' },
        { what: 'gor', verb: 'is' },
        { what: 'sexual slavery', verb: 'is' },

        // the other
        { what: 'racial purity', verb: 'is' },
        { what: 'segregation', verb: 'is' },
        { what: 'The Holocaust', verb: 'is' },
        { what: 'eugenics', verb: 'is' },
        { what: 'Nazis', verb: 'are' },

        // 90s
        { what: 'Charles Manson', verb: 'is' },
        { what: 'Satan', verb: 'is' },
        { what: 'school shootings', verb: 'are' },
        { what: 'child sacrifice', verb: 'is' },
    ];

    private readonly phrases = [
        (target: Target) => `${capitalize(target.what)} ${target.verb} great!!!`,
        (target: Target) => `${capitalize(target.what)} ${target.verb} the best!`,
        (target: Target) => `${capitalize(target.what)} ${target.verb} good!`,
        (target: Target) => `${capitalize(target.what)} ${target.verb} necessary!`,
        (target: Target) => `${capitalize(target.what)} ${target.verb} my favorite!`,
        (target: Target) => `${capitalize(target.what)} ${target.verb} 🔥🔥🔥!`,
        (target: Target) => `I love ${target.what}!`,
        (target: Target) => `I ❤️ ${target.what}!!!`,
        (target: Target) => `❤️${target.what.toUpperCase()}️❤️`,
        (target: Target) => `Yay for ${target.what}!`,
        (target: Target) => `Go ${target.what}!!!`,
    ];

    getValue() {
        const value: Target = config.isMeta
            ? { what: 'outrage machine', verb: 'is' }
            : selectRandom(this.targets);
        const phrase = selectRandom(this.phrases);
        return phrase(value);
    }
}();
