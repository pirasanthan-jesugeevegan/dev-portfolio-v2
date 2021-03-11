import React from 'react';
import '../theme/Pagination.scss';
const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginationButtons = document.querySelectorAll('.pagination-button');

  function handleClick(e) {
    e.preventDefault();
    const activeButton = document.querySelector('.active');

    if (activeButton) {
      activeButton.classList.remove('active');
    }
    e.target.classList.add('active');
  }

  paginationButtons.forEach((button) =>
    button.addEventListener('click', handleClick)
  );
  paginationButtons.forEach((button) =>
    button.addEventListener('touchstart', handleClick)
  );
  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className="pagination-button"
        >
          <span className="visually-hidden">{number}</span>
        </button>
      ))}
      <span className="pagination-current" aria-hidden="true"></span>
    </div>

    // <nav>
    //   <ul className="pagination">
    //     {pageNumbers.map((number) => (
    //       <li key={number} className="page-item">
    //         <div
    //           onClick={() => paginate(number)}
    //           href="!#"
    //           className="page-link"
    //         >
    //           {number}
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
  );
};

export default Pagination;
