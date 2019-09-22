import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Theme } from '../theme';

const useStyles = makeStyles<Theme>(theme => ({
    root: {
        marginTop: '4em',
        marginBottom: '2em',
        fontSize: '0.8em',
        color: theme.palette.text.secondary,
        fontStyle: 'italic',

        '& a': {
            color: theme.palette.text.secondary,
            textDecoration: 'none'
        },

        '& a:hover': {
            textDecoration: 'underline'
        }
    },
    copyright: {
        fontStyle: 'normal',
    }
}));


export const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <p>This regret brought to you by <a href='https://twitter.com/mattbierner'>@mattbierner</a></p>
            <p className={classes.copyright}>&copy; 2019</p>
            <br />
            <p style={{ fontSize: '0.8em' }}>By using this site, you assume all responsibility for whatever happens to both present and future you</p>
        </footer>
    )
}