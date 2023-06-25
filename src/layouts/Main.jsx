//rrD imports
import { Outlet, useLoaderData } from "react-router-dom";
//assets
import wave from "../assets/wave.svg";
//helper functions
import { fetchData } from "../helpers";

//loader
export function mainLoader() {
  console.log("mainLoader dispatches");
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  //destructure what we need from what this hook returns
  const { userName } = useLoaderData();

  return (
    <div>
      <h1>Main</h1>
      <main>
        {/* drop here the children of this route */}
        <Outlet />
      </main>
      <img src={wave} alt=""/>
    </div>
  );
};

export default Main;
