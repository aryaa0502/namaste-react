import { useEffect, useState } from "react";

const User = ({ name, location, mail }) => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count+1);
  }
  const handleAnotherClick = () => {
    setCount(count-1);
  }
  useEffect(() => {
    fetchData(); //api call
  }, []) //makes an api call only once
  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <button onClick={() => {
        handleClick()
      }}>Increase</button>
      <button onClick={() => {
        handleAnotherClick()
      }}>Decrease</button>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: {mail} </h4>
    </div>
  );
};

export default User;
