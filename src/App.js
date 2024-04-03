import "./App.css";
import pic from "./assets/NewtonSchool.jpg";

const App = () => {
  const styles = {
    width: "130px",
    height: "100px",
    margin: "10px",
  };
  return (
    <div id="navbar">
      <div>NavBar</div>
      <img src={pic} style={styles}/>
    </div>
  );
};

export default App;
