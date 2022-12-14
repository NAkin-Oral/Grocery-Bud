import { useState } from 'react';
import './App.css';
import List from './components/list/List';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(-1);
  const handleSubmit = e => {
    e.preventDefault();
    if (editId === -1) {
      const id = Math.random();
      setList([...list, { title: name, id: id }]);
      setName('');
    } else {
      const temp = [...list];
      temp[editId].title = name;
      setList(temp);
      setEditId(-1);
      setName('');
    }
  };
  const handleDelete = id => {
    setList(list.filter(item => item.id !== id));
  };
  const handleEdit = index => {
    setEditId(index);
    setName(list[index].title);
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
            {editId >= 0 ? 'Edit' : 'Submit'}
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
