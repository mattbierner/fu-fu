import * as config from '../config';
import { xIsBadPhraseProvider } from './providers/bad';
import { wordProvider } from './providers/badWord';
import { xIsGoodPhraseProvider } from './providers/good';
import { imagePhraseProvider } from './providers/image';

export enum ComponentType {
    x_is_good = 'x_is_good',
    x_is_bad = 'x_is_bad',
    word = 'word',
    image = 'image',
    meta = 'meta',
}

export const allComponentTypes = [
    ComponentType.x_is_good,
    ComponentType.x_is_bad,
    ComponentType.word,
    ComponentType.image,
    ...(config.isMeta ? [ComponentType.meta] : [])
];

export function componentTypeToLabel(type: ComponentType): string {
    switch (type) {
        case ComponentType.x_is_good: return '_____ is good';
        case ComponentType.x_is_bad: return '_____ is bad';
        case ComponentType.image: return 'Image';
        case ComponentType.word: return 'Word';
        case ComponentType.meta: return 'Meta';
        default: throw new Error('Unknown type');
    }
}

export class Model {
    public static readonly empty = new Model([
        ComponentType.x_is_bad
    ]);

    constructor(
        public readonly components: readonly ComponentType[],
    ) { }

    public toTweet(): string {
        const textBody = this.components
            .filter(type => type !== ComponentType.image) // add images at end
            .map(type => {
                switch (type) {
                    case ComponentType.x_is_good:
                        return xIsGoodPhraseProvider.getValue();

                    case ComponentType.x_is_bad:
                        return xIsBadPhraseProvider.getValue();

                    case ComponentType.word:
                        return wordProvider.getValue();

                    case ComponentType.meta:
                        return `Heyyy so I made this site... https://${document.location.host}${document.location.pathname}`;

                    default:
                        throw new Error(`Unknown type: ${type}`);
                }
            }).join(' ');

        const image = this.components.find(type => type === ComponentType.image)
        if (image) {
            const imageValue = imagePhraseProvider.getValue();
            if (this.components.length === 1) {
                return imageValue;
            }
            return textBody + '\n\n' + imageValue;
        } else {
            return textBody;
        }
    }

    public add(compoent: ComponentType): Model {
        return new Model([...this.components, compoent]);
    }

    public remove(index: number): Model {
        return new Model([
            ...this.components.slice(0, index),
            ...this.components.slice(index + 1)
        ]);
    }
}