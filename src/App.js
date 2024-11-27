import "./App.css";
import Card from "./Card";
import OldCard from "./OldCard";

function App() {

  const propertyOnClick = () => {
    alert("You are being redirected to the properties page")
  }

  const nameOnClick = () => {
    alert("You are being redirected to their email")
  }

  const socialOnClick = () => {
    alert("You are being redirected to the social media site")
  }

  return (
    <div className="container">
      <div className="column">
        <h2>Meet the Team</h2>
        <OldCard buttonText={"Email Team Member"}/>
        <OldCard buttonText={"Email Team Member"}/>

      </div>
      <div className="column">
        <h2>View Our Properties</h2>
        <OldCard addressLine1={"124 Conch Street"} addressLine2={"Bikini Bottom, Pacific Ocean"} image={'https://shorturl.at/qSoz2'} buttonText={"Visit Property Page"} onClick={propertyOnClick}/>
        <OldCard addressLine1={"742 Evergreen Terrace"} addressLine2={"Some State, USA"} image={'https://shorturl.at/jAfMi'} buttonText={"Visit Property Page"} onClick={propertyOnClick}/>
      </div>
      <div className="column">
        <h2>Social Media Feed</h2>
        <OldCard buttonText={"Go To Site"} icon={'https://cdn-icons-png.flaticon.com/512/3938/3938028.png'} feed={'Newest Post...'}/>
        <OldCard buttonText={"Go To Site"} icon={'https://1000logos.net/wp-content/uploads/2017/10/Vine-logo.png'} feed={'Newest Post...'}/>
      </div>
    </div>
  );
};

export default App;
