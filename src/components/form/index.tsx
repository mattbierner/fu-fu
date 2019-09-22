import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { ComponentType, Model } from '../../model/model';
import { Theme } from '../../theme';
import { Add } from './Add';
import { ComponentElement } from './Component';
import { LaunchButton } from './LaunchButton';

const useStyles = makeStyles<Theme>(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '2em',

        '& span': {
            color: theme.palette.text.secondary,
            fontStyle: 'italic',
            fontSize: '0.9rem',
        }
    },
    title: {
        fontWeight: 'normal',
        padding: '0 1em',
        paddingBottom: '0.4em',
        borderBottom: `2px solid ${theme.palette.primary.main}`,
        marginBottom: '0.2em',
    },
    spacer: {
        '&:after': {
            content: '"+"',
            display: 'block',
            color: theme.palette.text.secondary,
        }
    }
}));

interface FormProps {
    readonly model: Model;

    readonly updateModel: (model: Model) => void;
    readonly onLaunch: (model: Model) => void;
}

export const Form: React.FC<FormProps> = (props) => {
    const classes = useStyles();

    const handleAdd = (value: ComponentType | '') => {
        if (!value) {
            return;
        }
        props.updateModel(props.model.add(value));
    };

    const elements = props.model.components.map((x, i) => {
        return <ComponentElement
            type={x}
            onClick={() => {
                props.updateModel(props.model.remove(i));
            }}
            key={i} />;
    });

    return (
        <div className={classes.root}>
            <header className={classes.header}>
                <h3 className={classes.title}>Build Your Future Regrets</h3>
                <span>
                    Select the basic components of your future regretable expression<br />
                    We'll turn these into a random tweet when you press *launch*
                </span>
            </header>
            {elements.reduceRight((p, c, i) => {
                const spacer = i === elements.length - 1 ? null : <span key={'spacer' + i} className={classes.spacer} />
                return [c, spacer, ...p];
            }, [] as any[])}
            <Add
                model={props.model}
                handleSelect={handleAdd} />
            <LaunchButton model={props.model} onPressed={() => props.onLaunch(props.model)} />
        </div>
    )
}

