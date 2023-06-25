//rrD imports
import { useLoaderData } from "react-router-dom";
//helper functions
import { fetchData } from "../helpers";

//loader
export function dashboardLoader() {
  console.log("dashboardLoader dispatches");
  const userName = fetchData("userName");
  return { userName };
}

const Dashboard = () => {
  //destructure what we need from what this hook returns
  const { userName } = useLoaderData();

  /* what will happen if, instead, i will directly:
  const { userName } = dashboardLoader();
  or something like that? */

  return (
    <div>
      <h1>{userName}</h1>
      Dashboard
    </div>
  );
};

export default Dashboard;
