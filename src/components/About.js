import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive';
import Profile from '../assets/img/portfolio.jpg';
import Button from './Button';

const useStyles = makeStyles(() => ({
  about: {
    display: 'flex',
    margin: '20px',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: '2px',
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    width: '300px',
    marginTop: '0px',
  },
  cvButton: {
    backgroundColor: '#66fcf1',
    padding: '8px 94px',
    float: 'left',
    margin: '10px 0px',
    width: 'fit-content !important',
  },
  title: {
    marginLeft: '10px',
  },
}));
const About = () => {
  const classes = useStyles();
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 480px)',
  });
  const isRetina = useMediaQuery({ query: '(max-device-width: 479px)' });

  return (
    <>
      <div className={classes.about}>
        <Grid container spacing={2}>
          <Grid item>
            {isRetina && (
              <img className={classes.img} alt="complex" src={Profile} />
            )}
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <h2 className={classes.title}>Who is Behind All This</h2>
              <Grid item xs>
                <p>
                  I love to; program, write automation scripts, travel, and lift
                  heavy things. I have currently nestled myself into a niche for
                  building automation script and still have an interest in
                  developing web applications
                </p>
                <p>
                  I define myself by the work I want to do as skills can be
                  taught and learnt but personality is inherent. I am eager to
                  continue learning, continue challenging myself, and most
                  important continue to succeed in every task I put myself into.
                </p>
              </Grid>

              <Button
                classes={classes.cvButton}
                onClick={() => console.log('dfdf')}
                value={'Open CV'}
                color="primary"
              />
            </Grid>
            {isDesktopOrLaptop && (
              <img className={classes.img} alt="complex" src={Profile} />
            )}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default About;
