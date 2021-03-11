import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Instagram from './components/Instagram';
import Footer from './components/Footer';
import Logo from './assets/PJ.png';
const useStyles = makeStyles(() => ({
  app: {
    flexGrow: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1570px',
  },
  paper: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#181818',
    borderRadius: '10px',
    padding: '20px',
  },
  container: {
    justifyContent: 'center',
  },
  header: {
    textAlignLast: 'right',
    margin: '0px',
    marginTop: '135px',
  },
  grid: {
    display: 'grid !important',
  },
}));
function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Grid className={classes.container} container spacing={3}>
        <Grid className={classes.grid} item xs={12} sm={9}>
          <div className={classes.header}>
            <h1 style={{ lineHeight: '70%' }}>Hi! I'm Pirasanth</h1>
            <h1 style={{ lineHeight: '70%' }}>Nice to meet you!</h1>
            <h1 style={{ lineHeight: '70%' }}>Please take a look around!</h1>
            <p>Front-End Web Developer | QA | Automation</p>
          </div>
        </Grid>

        <Grid className={classes.grid} item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <About />
          </Paper>
        </Grid>
        <Grid className={classes.grid} item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <Skills />
          </Paper>
        </Grid>
        <Grid className={classes.grid} item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Projects />
          </Paper>
        </Grid>
        <Grid className={classes.grid} item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <Instagram />
          </Paper>
        </Grid>
        <Grid className={classes.grid} item xs={12} sm={9}>
          <Paper className={classes.paper}>
            <Footer />
          </Paper>
        </Grid>
      </Grid>

      <p
        className="center-align"
        style={{ paddingTop: '40px', textAlign: '-webkit-center' }}
      >
        <img style={{ width: '50px' }} src={Logo} alt="Logo" />
        PIRASANTHAN JESUGEEVEGAN
        <span style={{ color: '#66FCF1' }}>@2019</span>
      </p>
    </div>
  );
}

export default App;
