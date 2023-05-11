import axios from "axios";
import React, { useContext, useState } from "react";
import { MainRoute } from "./app/routes/MainRoute";
import { UserContext } from "./app/context/MyContext";

const App = () => {
  const { user } = useContext(UserContext)
  const [apiData, setApiData] = useState({})

  const fetchCartItems = async () => {

    try {
      const res = await axios.get('https://savmeds.spiraleinfosoft.com/backend/rest_api/get-all-cart-items.php', { params: { uid: 1 } })
      if (res.data.error) {
        console.log("failed to fetch data from server");
      } else {
        setApiData(res.data.data)
        console.log(res.data);
      }
    } catch (e) {
      console.log("something went wrong");
    } finally {
      console.log("finally");
    }

  };
  return (
    <div>
      <button onClick={fetchCartItems}>Fetch cart items</button>
      {apiData[0]?.created_at}
      {user.name}
      <MainRoute />
    </div>
  );
};
export default App;
