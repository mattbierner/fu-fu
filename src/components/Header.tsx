import { makeStyles } from '@material-ui/styles';
import React from 'react';
import * as config from '../config';
import { Theme } from '../theme';
import logo from './logo.svg';


const useStyles = makeStyles<Theme>(theme => ({
    root: {
        paddingTop: '3em',
        paddingBottom: '2em',
    },
    logo: {
        maxWidth: '300px'
    },
    links: {
        display: 'flex',
        justifyContent: 'center',
        '& a': {
            display: 'block',
            margin: '0 1em',
            color: theme.palette.text.secondary,
            textDecoration: 'none'
        },
        '& a:hover': {
            color: theme.palette.primary.main,
            textDecoration: 'underline'
        }
    }
}));

export const Header = () => {
    const styles = useStyles();
    return (
        <header className={styles.root}>
            <img src={logo} className={styles.logo} alt="logo" />
            <p>Send your future self a message they'll be sure to regret</p>
            <nav className={styles.links}>
                <a href={config.aboutLink}>About</a>
                <a href={config.sourceLink}>Source</a>
            </nav>
        </header>
    )
} 