import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    fetch("http://13.127.115.98:5000/api/data")
      .then(res => res.json())
      .then(data => setData(data.message))
      .catch(err => {
        console.error("Fetch error:", err);
        setData("Error");
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>DevOps Project</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;