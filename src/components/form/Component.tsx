import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { ComponentType, componentTypeToLabel } from '../../model/model';
import { Theme } from '../../theme';

const borderRadius = '4px';

const useStyles = makeStyles<Theme>(theme => ({
    component: {
        outline: 'none',
        display: 'flex',
        border: '1px solid lightgray',
        alignItems: 'center',
        borderRadius: borderRadius,
        margin: '0.6em 1em',
        padding: 0,
        userSelect: 'none',

        '& .icon': {
            borderRight: '1px solid lightgray',
            padding: '4px',
            width: '24px',
            height: '24px',
            borderTopLeftRadius: borderRadius,
            borderBottomLeftRadius: borderRadius,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        [`& .icon::after`]: {
            content: '""',
            display: 'block',
            width: '20px',
            height: '20px',
        },
        [`& .icon.${ComponentType.x_is_bad}::after`]: {
            backgroundImage: 'url(images/frown.svg)',
        },
        [`& .icon.${ComponentType.x_is_good}::after`]: {
            backgroundImage: 'url(images/smile.svg)',
        },
        [`& .icon.${ComponentType.word}::after`]: {
            backgroundImage: 'url(images/swear.svg)',
        },
        [`& .icon.${ComponentType.image}::after`]: {
            backgroundImage: 'url(images/picture.svg)',
        },
        [`& .icon.${ComponentType.meta}::after`]: {
            backgroundImage: 'url(images/cat.svg)',
        },
        '&:hover .icon::after': {
            backgroundImage: 'url(images/x.svg)',
        },

        '& .label': {
            padding: '0.6em 0.8em',
        },
    }
}));


export const ComponentElement: React.FC<{ type: ComponentType, onClick: () => void }> = (props) => {
    const classes = useStyles();

    return (
        <button className={classes.component} onClick={props.onClick}>
            <div className={'icon ' + props.type}></div><span className='label'>{componentTypeToLabel(props.type)}</span>
        </button>
    );
};

