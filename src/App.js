import "./App.css";
import Card from "./Card";
import OldCard from "./OldCard";

function App() {

  const propertyOnClick = () => {
    alert("You are being redirected to the properties page")
  }

  const nameOnClick = () => {

  }

  const socialOnClick = () => {

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
        <OldCard addressLine1={"124 Conch Street"} addressLine2={"Bikini Bottom, Pacific Ocean"} image={'https://shorturl.at/jAfMi'} buttonText={"Visit Property Page"} onClick={propertyOnClick}/>
        <OldCard addressLine1={"742 Evergreen Terrace"} addressLine2={"Some State, USA"} image={'https://qph.cf2.quoracdn.net/main-qimg-85f5070cbf14670efeaeacfc2c226774-pjlq'} buttonText={"Visit Property Page"} onClick={propertyOnClick}/>
      </div>
      <div className="column">
        <h2>Social Media Feed</h2>
        <OldCard buttonText={"Go To Site"}/>
        <OldCard buttonText={"Go To Site"}/>
      </div>
    </div>
  );
};

export default App;
