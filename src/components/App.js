import React, { useState } from 'react';

function App() {
  let [user, setUser] = useState([]);
  let [name, setName] = useState('');
  let [username, setUsername] = useState('');
  console.log(user);
  const handleName = (e) => {
    e.preventDefault();
    let v = e.target.value;
    setName(() => v);
  };
  const handleUsername = (e) => {
    e.preventDefault();
    let v = e.target.value;
    setUsername(() => v);
  };

  const handleDelete = (n) => {
    setUser(user.filter((v) => v !== n));
  };

  const handleEdit = (string) => {};

  return (
    <>
      <h1>User list ...</h1>
      <div>
        <label>
          Name .......
          <input
            type='text'
            placeholder='Enter Name'
            value={name}
            onChange={handleName}
          />
        </label>
      </div>
      <div>
        <label>
          UserName
          <input
            type='text'
            value={username}
            placeholder='Enter Username'
            onChange={handleUsername}
          />
        </label>
      </div>
      <button onClick={() => setUser([...user, { name, username }])}>
        Add User
      </button>
      {user?.map((n, i) => (
        <div key={n.username} className='block'>
          <span onClick={() => handleDelete(n)} className='close'>
            ❌
          </span>
          <h2>
            {i + 1}. Name:- <strong>'{n.name}'</strong>
          </h2>
          <h2>
            Username:-
            <strong>'{n.username}'</strong>
          </h2>
        </div>
      ))}
    </>
  );
}

export default App;
