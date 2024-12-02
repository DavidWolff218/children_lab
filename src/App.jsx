import "./App.css";
import OldCard from "./OldCard";

function App() {

  const propertyOnClick = () => {
    alert("You are being redirected to the properties page")
  }

  const memberOnClick = () => {
    alert("You are being redirected to their email")
  }

  const socialOnClick = () => {
    alert("You are being redirected to the social media site")
  }

  return (
    <div className="container">
      <div className="column">
        <h2>Meet the Team</h2>
        <OldCard name={"Waldo"} quote={"I'll find you a home before you find me!"} memberImg={"https://shorturl.at/jSZkp"} buttonText={"Email Team Member"} onClick={memberOnClick}/>
        <OldCard name={"Pennywise"} quote={"Float into your dream home with me!"} memberImg={"https://shorturl.at/oloTY"} buttonText={"Email Team Member"} onClick={memberOnClick}/>
      </div>
      <div className="column">
        <h2>View Our Properties</h2>
        <OldCard addressLine1={"124 Conch Street"} addressLine2={"Bikini Bottom, Pacific Ocean"} listingImg={"https://shorturl.at/qSoz2"} buttonText={"Visit Property Page"} onClick={propertyOnClick}/>
        <OldCard addressLine1={"742 Evergreen Terrace"} addressLine2={"Some State, USA"} listingImg={"https://shorturl.at/jAfMi"} buttonText={"Visit Property Page"} onClick={propertyOnClick}/>
      </div>
      <div className="column">
        <h2>Social Media Feed</h2>
        <OldCard buttonText={"Go To Site"} icon={"https://cdn-icons-png.flaticon.com/512/3938/3938028.png"} feed={"Newest Post..."} onClick={socialOnClick}/>
        <OldCard buttonText={"Go To Site"} icon={"https://1000logos.net/wp-content/uploads/2017/10/Vine-logo.png"} feed={"Newest Post..."} onClick={socialOnClick}/>
      </div>
    </div>
  );
};

export default App;
