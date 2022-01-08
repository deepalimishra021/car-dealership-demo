import React from 'react';
import NavBar from './NavBar';
import homecar from '../assets/images/homecar.jpeg'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import NewInventories from './NewInventories';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  Home: {
    backgroundImage: `linear-gradient(180deg,rgba(27,31,37,0) 0%,#2c3b51 100%),url(${homecar})!important`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    backgroundColor: 'white',
    backgroundSize: 'cover',
  },
  TopDiv: {
    color: 'white',
    padding: '15% 0% 10% 15%',
    backgroundImage: `linear-gradient(180deg,rgb(255 255 255 / 14%) 0%,rgb(168 167 236 / 4%) 100%)`
  },
  FinancingRate: {
    marginLeft: '-16%',
    color: '#f6ca68',
  },
  PurchaseText: {
    paddingTop: '7%',
  },
  BottomText: {
    padding: '7% 15% 0% 15%',
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <section id="main">
        <Grid container>
          <Grid item xs={12} className={classes.Home}>
            <Grid item xs={12} lg={10} sm={12} md={10} className="p-5">
              <Box className={classes.TopDiv}>
                <Typography variant="h4" component="h4" className={classes?.FinancingRate}>
                  0% APR FINANCING FOR 12 MONTHS
                </Typography>
                <Typography variant="h1" component="h1" className={classes?.PurchaseText}>
                  PURCHASE YOUR PERFECT CAR
                </Typography>
                <Typography variant="h5" component="p" className={classes?.BottomText}>
                  Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia auctor sit amet aliquam vel
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <NewInventories />
      </section>
    </>
  );
}

export default Home

