import {Button, Container, Grid, Typography} from "@material-ui/core";
import {element} from "prop-types";
import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core/styles";
import {ThemeColors, ThemeElements} from "../../theme/theme-styles";
import {useTranslation} from "next-i18next";

interface TwoColumnsProps {
    element1: React.ReactElement
    element2: React.ReactElement
}
const TwoColumns=(props:TwoColumnsProps):React.ReactElement=>{
    return (
        <Container  maxWidth="lg">
            <Grid container>
                <Grid item md={6} xs={12}>
                    {props.element1}
                </Grid>
                <Grid item md={6} xs={12}>
                    {props.element2}
                </Grid>
            </Grid>
        </Container>
    )
}

export default TwoColumns;


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: '#1e262d',
        paddingTop: '30px',
        ...ThemeElements.rootBlockProps,
        [theme.breakpoints.down('md')]: {
            marginBottom: '24px',
            paddingTop: 0,
        },
        [theme.breakpoints.up('md')]: {
            minHeight: '450px',
        },
    },
    outer: {
        position: 'relative',
        width: '100%',
    },

    inner: {
        position: 'absolute',
        zIndex: 1,
        height: '100%',
        width: '100%',
        top: 0,
    },

    media: {
        width: '100%',
    },
    headTradePlatform: {
        paddingTop: '70px',
        [theme.breakpoints.down('lg')]: {
            paddingTop: '27px',
            font: '32px/40px MullerLight,sans-sanserif',
            letterSpacing: '1.41px',
        },
    },
    secondTitle: {
        fontSize: '38px',
        display: 'block',
        lineHeight: '39px',
        paddingTop: '10px',
        paddingBottom: '10px',
        color: ThemeColors.MainBlue,
        fontFamily: 'MullerMedium',
    },
    bImage: {
        height: '100%',
        display: 'grid',
    },
    backImage: {
        height: '100%',
    },
    button: {
        width: '230px',
        [theme.breakpoints.down('md')]: {
            marginBottom: '16px',
        },
    },
}))


