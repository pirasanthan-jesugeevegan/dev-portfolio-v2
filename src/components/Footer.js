import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
const useStyles = makeStyles(() => ({
  icon: {
    fontSize: '30px',
    color: '#66FCF1',
    paddingBottom: '10px',
    display: 'flex',
  },
  icons: {
    display: 'flex',
    textAlign: '-webkit-center',
    marginTop: '38px',
  },
}));
function Footer() {
  const classes = useStyles();
  return (
    <div>
      <h2>Get in Touch with Me</h2>
      <div className={classes.icons}>
        <div style={{ width: '33.33%' }}>
          <a
            href="https://github.com/pirasanthan-jesugeevegan"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className={classes.icon} />
          </a>
        </div>
        <div style={{ width: '33.33%' }}>
          <a
            href="https://www.linkedin.com/in/pirasanth-jesugeevegan/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className={classes.icon} />
          </a>
        </div>
        <div style={{ width: '33.33%' }}>
          <a
            href="mailto:pirasanth23@hotmail.com?Subject=Hello"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon className={classes.icon} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
