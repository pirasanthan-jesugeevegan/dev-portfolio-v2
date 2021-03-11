import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import HTML from '../assets/icons/html.svg';
import Javascript from '../assets/icons/javascript.svg';
import Node from '../assets/icons/node.svg';
import Selenium from '../assets/icons/selenium.svg';
import Cucumber from '../assets/icons/cucumber.svg';
import Cypress from '../assets/icons/cypress.svg';
const Title = styled.h4`
  margin-left: 20px;
`;

const useStyles = makeStyles(() => ({
  skills: {
    display: 'flex',
    margin: '-2px',
    marginLeft: '20px',
  },
}));
function Skills() {
  const classes = useStyles();
  const skillsArray = [
    {
      icons: HTML,
      name: 'HTML/SCSS',
    },
    {
      icons: Javascript,
      name: 'JavaScript',
    },
    {
      icons: Node,
      name: 'Node.js',
    },
    {
      icons: Selenium,
      name: 'Selenium',
    },
    {
      icons: Cucumber,
      name: 'Cucumber.io',
    },
    {
      icons: Cypress,
      name: 'Cypress.io ',
    },
  ];
  return (
    <div>
      <h2>My Skills & Experience</h2>

      {skillsArray.map((skill, i) => {
        return (
          <div className={classes.skills} key={i}>
            <img src={skill.icons} alt="Icons" />
            <Title>{skill.name}</Title>
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
