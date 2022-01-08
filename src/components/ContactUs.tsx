import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import contact from '../assets/images/contact.jpeg'
import NavBar from './NavBar';
const useStyles = makeStyles(() => ({
  HomeCar: {
    backgroundImage: `linear-gradient(180deg,rgba(27,31,37,0) 0%,#2c3b51 100%),url(${contact})!important`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    backgroundColor: 'white',
    backgroundSize: 'cover',
  },
  TopDiv: {
    color: 'white',
    padding: '20% 0% 10% 20%',
    backgroundImage: `linear-gradient(180deg,rgb(255 255 255 / 32%) 0%,rgb(168 167 236 / 4%) 100%)`
  },
}));

export default function ContactUs() {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Grid container>
        <Grid item xs={12} className={classes.HomeCar}>
          <Grid item xs={12} lg={10} sm={12} md={10} className="p-5">
            <div className={classes.TopDiv}>
              <Typography variant="h1" component="h1" >
                CONTACT US
              </Typography>
              <Typography variant="h6" component="p" >
                Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

