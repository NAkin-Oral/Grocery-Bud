import React from 'react';

const List = ({ items, handleDelete, handleEdit }) => {
  return (
    <div className="grocery-list">
      {items.map((item, index) => {
        const { id, title } = item;
        return (
          <article className="grocery-item" key={id}>
            <p className="title">{title}</p>
            <div className="btn-container">
              <button type="edit-btn" onClick={() => handleEdit(index)}>
                E
              </button>
              <button type="delete-btn" onClick={() => handleDelete(id)}>
                D
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
