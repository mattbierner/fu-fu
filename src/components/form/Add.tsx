import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { maxTextualComponentCount } from '../../config';
import { allComponentTypes, ComponentType, componentTypeToLabel, Model } from '../../model/model';
import { Theme } from '../../theme';

const useStyles = makeStyles<Theme>(theme => ({
    root: {
        paddingBottom: '2em',
        paddingTop: '1em',
    },
    description: {
        color: theme.palette.text.secondary,
        fontStyle: 'italic',
        fontSize: '0.9rem',
    },
    select: {
        padding: '2em',
        fontSize: '1em',
    }
}));


export const Add: React.FC<{
    model: Model,
    handleSelect: (value: ComponentType | '') => void
}> = (props) => {
    const styles = useStyles();

    if (props.model.components.filter(type => type !== ComponentType.image).length >= maxTextualComponentCount) {
        return (
            <div className={styles.root}>
                <p className={styles.description} style={{ marginBottom: 0 }} >
                    That's enough. For this time...
                </p>
            </div >
        );
    }

    const onChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        props.handleSelect(event.target.value as ComponentType)
    };

    const hasImage: boolean = !!props.model.components.some(x => x === ComponentType.image);

    const options = allComponentTypes.map(type =>
        <option
            value={type}
            key={type}
            disabled={type === ComponentType.image && hasImage}
        >{componentTypeToLabel(type)}</option>
    );

    return (
        <div className={styles.root}>
            <p className={styles.description}>{props.model.components.length === 0 ? "Add" : "Add Another"}</p>
            <select
                value={''}
                onChange={onChange}
                className={styles.select}
            >
                <option value={''} disabled={true}>Select</option>
                {options}
            </select>
        </div>
    );
}

