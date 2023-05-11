import axios from "axios";
import { createContext, useState } from "react";

export const UserContext = createContext()

const ContextData = ({ children }) => {
    const [user, setUser] = useState({ id: 2, name: 'xyz', age: 21 })
    const fetchData = async () => {
        try {
            const res = await axios.get('https://savmeds.spiraleinfosoft.com/backend/rest_api/get-all-cart-items.php', { params: { uid: 1 } })
            if (res.data.error) {
                console.log("failed to fetch data from server");
            } else {
                // setApiData(res.data.data)
                console.log(res.data);
            }
        } catch (e) {
            console.log("something went wrong");
        } finally {
            console.log("finally");
        }
    }
    return (
        <UserContext.Provider value={{ user, setUser, fetchData }}>
            {children}
        </UserContext.Provider>
    )
}
export default ContextData