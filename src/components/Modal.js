import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
  title: {
    background: '#333',
    color: 'white',
  },
  body: {
    background: '#181818',
    display: 'flex',
    color: 'white',
  },
  button: {
    backgroundColor: '#66FCF1',
    color: '#181818',
  },
  img: {
    width: '50%',
  },
});
function Modal({ value }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setOpen(false);
  };
  const githubClick = (e) => {
    setOpen(false);
    e.preventDefault();
    window.location.href = value.github;
  };
  const demoClick = (e) => {
    setOpen(false);
    e.preventDefault();
    window.location.href = value.demo;
  };
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className={classes.title} id="alert-dialog-title">
          {value.title}
        </DialogTitle>
        <DialogContent className={classes.body}>
          <DialogContentText
            className={classes.body}
            id="alert-dialog-description"
          >
            {value.description}
          </DialogContentText>
          <h2>{value.type}</h2>

          <img className={classes.img} src={value.image} atl="project" />
        </DialogContent>
        <DialogActions className={classes.body}>
          {value.demo && (
            <Button
              className={classes.button}
              onClick={demoClick}
              color="primary"
            >
              <VisibilityIcon />
            </Button>
          )}

          <Button
            className={classes.button}
            onClick={githubClick}
            color="primary"
            autoFocus
          >
            <GitHubIcon />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Modal;
