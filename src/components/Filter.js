import React from 'react';

function Filter({ button, filter }) {
  return (
    <div>
      {button.map((cat, i) => {
        return (
          <button key={i} type="button" onClick={() => filter(cat)}>
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
