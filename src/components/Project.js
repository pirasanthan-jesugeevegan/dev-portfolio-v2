import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from './Modal';
import { Icon } from '@iconify/react';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  card: {
    '@media (min-width: 1280px)': {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridGap: '2rem',
    },
  },
  ItemCon: {
    width: '100%',
    padding: '1.2rem 1.2rem',
    backgroundColor: 'black',
    borderRadius: '4px',
    float: 'left',
    boxSizing: 'border-box',
    minHeight: '1px',
    marginLeft: 'auto',
    left: 'auto',
    right: 'auto',
  },
  itemContainer: {
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    transition: 'all .3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
      cursor: 'pointer',
    },
  },
  title: {
    display: 'block',
    lineHeight: '32px',
    marginBottom: '8px',
    fontSize: '24px',
  },
  icon: {
    fontSize: '35px',
    margin: '4px',
    filter: 'brightness(0) invert(1) ',
  },
  icon1: {
    fontSize: '35px',
    margin: '4px',
    filter: 'grayscale(100%)',
  },
});
function Project(projectItem) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      {projectItem &&
        projectItem.projectItem.map((item) => (
          <div className={classes.ItemCon} key={item.id}>
            <div className={classes.itemContainer}>
              <img className={classes.img} src={item.image} alt="" />
              <div className={classes.cardContent}>
                <h1 className={classes.title}>{item.title}</h1>
                <Modal value={item} />
                {item?.icons?.map((icon, i) => (
                  <Icon
                    className={
                      icon === 'browserstackIcon' ? classes.icon : classes.icon1
                    }
                    key={i}
                    icon={icon}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Project;
