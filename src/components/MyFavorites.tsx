import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import CarCard from './common/CarCard';
import { carData } from './mockjson/NewInventories';
import NavBar from './NavBar';

const useStyles = makeStyles(() => ({
    MyFavorites: {
       padding: '5%'
    },
    FavoriteText: {
        textAlign: 'center',
        paddingBottom: '10%',
    }
}));

export default function MyFavorites() {
    const classes = useStyles();
    const myFavorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    const favoriteData = carData.filter(item => myFavorites?.includes(item.id))
    return (
        <Box>
            <NavBar />
            <section className={classes?.MyFavorites}>
                <Typography variant="h2" component="h1" className={classes.FavoriteText}>
                    My Favorites
                </Typography>
                <CarCard cardData={favoriteData} />
            </section>
        </Box>
    );
}
