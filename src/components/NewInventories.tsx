import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import CarCard from './common/CarCard';
import { carData } from './mockjson/NewInventories';
const useStyles = makeStyles(() => ({
  Inventory: {
    textAlign: 'center',
  },
  CarCard: {
    textAlign: 'center',
    padding: '4%',
  },

}));
export default function NewInventories() {
  const myFavorites = JSON.parse(localStorage.getItem('favorites') || '{}');
  const [enableTooltip, setEnableTooltip] = React.useState(-1);
  const [favorite, setFavorite] = React.useState<Array<Number>>(myFavorites || []);

  const handleOpen = (item: number) => {
    setEnableTooltip(item);
  };

  const handleFavoriteClick = (item: Number) => {
    if (favorite.includes(item)) {
      const index = favorite.indexOf(item);
      favorite.splice(index, 1);
    } else {
      favorite.push(item);
    }
    setFavorite(favorite);
    localStorage.setItem('favorites', JSON.stringify(favorite));
  };

  const classes = useStyles();
  return (
    <div className="container-fluid nav-bg">
      <div className="row">
        <Box className="col-12 p-5">
          <Typography variant="h2" component="p" className={classes?.Inventory}>
            New Inventory
           </Typography>
        </Box>
        <Box className={classes.CarCard}>
          <CarCard
            cardData={carData}
            handleFavoriteClick={handleFavoriteClick}
            handleOpen={handleOpen}
            enableTooltip={enableTooltip}
            favorite={favorite}
          />
        </Box>
      </div>
    </div>
  );
}

