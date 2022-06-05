import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Parcel = () => {
  let navigate = useNavigate();
  const [text, setText] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate(`/parcel/${text}`);
  };

  return (
    <div className="w-full h-screen bg-blue-50 grid justify-center items-center">
      <div className="bg-white p-5 shadow rounded-md">
        <form className="m-4 flex border-2 border-cyan-400 shadow" onSubmit={handleSubmit}>
          <input
            className="p-4 text-gray-800 bg-white outline-none"
            placeholder="VASgRpSRMG"
            onChange={(e: any) => setText(e.target.value)}
          />
          <button className="px-6 bg-cyan-400 text-gray-800 font-bold p-4 uppercase">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Parcel;
