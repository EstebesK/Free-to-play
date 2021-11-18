import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import logo from './assets/logo.png';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '3em',
        [theme.breakpoints.down('md')]: {
            marginBottom: '2em'
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '1.25em'
        }
    },
    logo: {
        height: '4.5em',
        padding: '10px',
        [theme.breakpoints.down('md')]: {
            height: '4em'
        },
        [theme.breakpoints.down('xs')]: {
            height: '3.5em'
        }
    },
    ftpLogo: {
        ...theme.typography.ftpLogo,
    },
    logoContainer: {
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    appBar: {
        zIndex: theme.zIndex.modal + 1
    },

}))

export default function Header() {

    const classes = useStyles();

    return (
        <>
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar>
                    <img src={logo} alt='company logo' className={classes.logo} />
                    <Typography className={classes.ftpLogo}>FTP</Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin} />
        </>
    );
}
