import { useState } from 'react';
import './App.css';
import List from './components/list/List';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState();
  const handleSubmit = e => {
    e.preventDefault();
    if (!isEditing) {
      const id = Math.random();
      setList([...list, { title: name, id: id }]);
      setName('');
    } else {
      setList(
        list.map(item => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setIsEditing(false);
      setEditId();
      setName('');
    }
  };
  const handleDelete = id => {
    setList(list.filter(item => item.id !== id));
  };
  const handleEdit = id => {
    const specificItem = list.find(item => item.id === id);
    setIsEditing(true);
    setEditId(specificItem.id);
    setName(specificItem.title);
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List
            items={list}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
          <button className="clear-btn" onClick={() => setList([])}>
            Clear Items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
