import { NavLink } from "react-router-dom";
import { FaBookOpenReader } from "react-icons/fa6";

const HomePage = () => {
    return (
        <div 
        style={{
            marginTop: "100px",
            textAlign: "center",
          }}>
            <FaBookOpenReader style={{
        
        color: "white",
        width: "120px",
    height: "120px",
      }}/>
           <h1 
           style={{
            color: "white",
            fontSize: "60px",
            marginBottom: 0,
            marginTop: 0

          }}>
            Welcome To Your Phonebook</h1>
           <p style={{
            color: "lightgrey",
            marginTop: "5px",
          }}>All your contacts in one place</p>
        </div>
    )
}

export default HomePage;