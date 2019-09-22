import { makeStyles } from '@material-ui/styles';
import Color from 'color';
import React from 'react';
import { Model } from '../../model/model';
import { Theme } from '../../theme';

const useStyles = makeStyles<Theme>(theme => ({
    root: {
        marginTop: '0.5em',
    },
    addButton: {
        userSelect: 'none',
        borderWidth: '0',
        borderRadius: '100px',
        fontSize: '20px',
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        padding: '1rem',
        textAlign: 'center',
        outline: 'none',
        boxShadow: '0 0 10px #aaaaaa',

        '&:active': {
            backgroundColor: Color(theme.palette.primary.main).darken(0.1).hex()
        },
        '&:disabled': {
            opacity: 0.75,
        },
    },
    explainer: {
        color: theme.palette.text.secondary,
        fontStyle: 'italic',
        fontSize: '0.9rem',
    },
}));

export const LaunchButton: React.FC<{ readonly model: Model, onPressed: () => void }> = (props) => {
    const classes = useStyles();

    const disabled = props.model.components.length === 0;
    return (
        <div className={classes.root}>
            <button
                disabled={disabled}
                title={"launch"}
                className={classes.addButton}
                onClick={props.onPressed}
            >LAUNCH</button>
            {!disabled && <p className={classes.explainer}>
                Make sure to use an account that<br />will be tracable back to future you
            </p>}
        </div>
    )
}
