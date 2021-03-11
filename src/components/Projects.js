import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import items from '../constants/projects';
import Project from './Project';
import Filter from './Filter';
import Pagination from './Pagination';
const allCategories = ['All', ...new Set(items.map((item) => item.category))];
const useStyles = makeStyles({
  projectHeader: {
    display: 'flex',
  },
  projectTitle: {
    width: '40%',
  },
  projects: {
    display: 'flex',
    margin: 'auto',
    marginRight: 'inherit',
  },
});
function Projects() {
  const classes = useStyles();
  const [projectItem, setProjectItem] = useState([]);
  const [buttons, setButtons] = useState(allCategories);
  const [visible, setVisible] = useState(4);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);

  useEffect(() => {
    setProjectItem(items);
  }, []);
  const filter = (button) => {
    if (button === 'All') {
      setProjectItem(items);
      setCurrentPage(1);
      return;
    } else if (button === 'Dev') {
      setCurrentPage(1);
    } else if (button === 'Automation') {
      setCurrentPage(1);
    }
    const filteredData = items.filter((item) => item.category === button);
    setProjectItem(filteredData);
  };

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = projectItem.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);
  //document.body.style.overflow = 'auto';
  return (
    <div>
      <div className={classes.projectHeader}>
        <h2 className={classes.projectTitle}>My Projects</h2>
        <div className={classes.projects}>
          <span>Filter: </span>
          <Filter button={buttons} filter={filter} />
        </div>
      </div>
      <Project projectItem={currentPosts} />
      <Pagination
        postPerPage={postPerPage}
        totalPosts={projectItem.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Projects;
