import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Tooltip, Typography } from '@material-ui/core';
import { ICarCardData } from '../models/ICardData';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
    Card: {
        padding: '2%',
    },
    Car: {
    },
    CarName: {
        paddingBottom: '4%',
    },
    CarImage: {
        objectFit: 'initial'
    },
    Details: {
        color: 'gray',
    },
    Price: {
        color: 'red',
    },
    Add: {
        position: 'absolute',
        backgroundColor: 'powderblue',
        top: '10px',
        right: '10px',
        '&:hover': {
            backgroundColor: 'powderblue',
        },
        '&:focus': {
            backgroundColor: 'powderblue',
        },
    },
    Added: {
        position: 'absolute',
        backgroundColor: 'powderblue',
        top: '10px',
        right: '10px',
        color: 'red',
        '&:hover': {
            backgroundColor: 'powderblue',
        },
        '&:focus': {
            backgroundColor: 'powderblue',
        },
    },
    CarImageContainer: {
        position: 'relative',
    }
}));

interface ICarCardDataProps {
    cardData: ICarCardData[];
    handleOpen?: (value: number) => void;
    handleFavoriteClick?: (favoritValue: number) => void;
    enableTooltip?: Number;
    favorite?: Number[];
}

export default function CarCard(props: ICarCardDataProps) {
    const { cardData, enableTooltip, favorite, handleFavoriteClick, handleOpen } = props;
    const [details, setDetails] = React.useState(-1); 
    const showDetails = (item: number) => {
        if (details === item) {
            setDetails(-1);
        } else {
            setDetails(item);
        }
    }
    const classes = useStyles();
    return (
        <Grid container>
            { cardData.map((car, index) => (
                <Grid item lg={4} md={4} sm={12} xs={12}
                    className={classes.Card}>
                    <Card className={classes.Car} >
                        <Box className={classes.CarImageContainer}>
                            <CardMedia
                                component="img"
                                className={classes.CarImage}
                                image={car.carImage}
                                alt="car"
                            />
                            {handleOpen && handleFavoriteClick &&
                                <Tooltip
                                    open={enableTooltip === index}
                                    onClose={() => { handleOpen(-1) }}
                                    onOpen={() => { handleOpen(index) }}
                                    title={favorite && favorite.includes(car.id) ? 'Remove from Favorites' : 'Add to Favorites'}>
                                    <IconButton
                                        onClick={() => { handleFavoriteClick(car.id) }}
                                        aria-label="add to favorites"
                                        className={
                                            clsx(favorite && favorite.includes(car.id) ? classes?.Added : classes?.Add)}>
                                        <FavoriteIcon />
                                    </IconButton>
                                </Tooltip>
                            }
                        </Box>
                        <CardContent>
                            <Typography variant="h5" component="body" className={classes?.CarName}>
                                {car.name}
                            </Typography>
                            <Typography variant="h6" className={classes?.Price}>
                                {car.price}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Accordion expanded={details === index} onChange={() => { showDetails(index) }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    id="car-summary">
                                    <Typography variant="body1" >Details</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body1" className={classes.Details}>
                                        {car.details}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
