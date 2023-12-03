import ax from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';

const axios = ax.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

const getPost = async () => {
  return axios.get('/api/v2/cache-content')
}

const postContent = async () => {
  return axios.post('/api/v2/post-content', {
    body: 'halooo'
  })
}

const App = () => {
  const [data, setData] = useState([]);
  const [body, setBody] = useState({message: ''});

  useEffect(() => {
    getPost().then((res) => setData(res.data))
  }, []);
  return (
    <div className="App">
      <form>
        <input 
          name='message'
          onChange={(e) => {
            setBody({
              ...body,
              message: e.target.value
            })
          }}
        />
        <button>submit</button>
      </form>
      <table border={1}>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Story</th>
        </tr>
        {data.map((d) => {
          return (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.title}</td>
              <td>{d.body}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default App;
