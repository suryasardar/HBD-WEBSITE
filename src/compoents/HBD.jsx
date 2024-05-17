import { Link } from "react-router-dom";
import { useState } from "react";

const HBD = ({ onDataChange }) => {
  const [data, setData] = useState("");

  const handleDataChange = (e) => {
    const newData = e.target.value;
    setData(newData);
    onDataChange(newData); // Pass data to parent component
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen border border-b-8 border-black bg-black">
        <input
          placeholder="Your Name"
          type="text"
          value={data}
          onChange={handleDataChange}
        />

        {!data ? (
          null
        ) : (
          <Link to="/thank">
            <button className="bg-gray-400 rounded-full px-2 m-2" type="submit">
              Done
            </button>
          </Link>
        )}
      </div>
    </>
  );
};

export default HBD;
