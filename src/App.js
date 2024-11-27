import "./App.css";
import NewCard from "./NewCard";

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
      <NewCard onClick={memberOnClick} buttonText="Email Team Member">
        <div className="name">
          <h3>Waldo</h3>
          <h4>I'll find you a home before you find me!</h4>
        </div>
        <img src="https://shorturl.at/jSZkp" alt="Waldo" className="image" />
      </NewCard>
      <NewCard onClick={memberOnClick} buttonText="Email Team Member">
        <div className="name">
          <h3>Pennywise</h3>
          <h4>Float into your dream home with me!</h4>
        </div>
        <img src="https://shorturl.at/oloTY" alt="Pennywise" className="image" />
      </NewCard>
    </div>
    <div className="column">
      <h2>View Our Properties</h2>
      <NewCard onClick={propertyOnClick} buttonText="Visit Property Page">
        <address className="address">
          124 Conch Street<br />
          Bikini Bottom, Pacific Ocean
        </address>
        <img src="https://shorturl.at/qSoz2" alt="Property" className="image" />
      </NewCard>
      <NewCard onClick={propertyOnClick} buttonText="Visit Property Page">
        <address className="address">
          742 Evergreen Terrace<br />
          Some State, USA
        </address>
        <img src="https://shorturl.at/jAfMi" alt="Property" className="image" />
      </NewCard>
    </div>
    <div className="column">
      <h2>Social Media Feed</h2>
      <NewCard onClick={socialOnClick} buttonText="Go To Site">
        <img src="https://cdn-icons-png.flaticon.com/512/3938/3938028.png" alt="Social Media Icon" className="icon" />
        <span className="feed">Newest Post...</span>
      </NewCard>
      <NewCard onClick={socialOnClick} buttonText="Go To Site">
        <img src="https://1000logos.net/wp-content/uploads/2017/10/Vine-logo.png" alt="Social Media Icon" className="icon" />
        <span className="feed">Newest Post...</span>
      </NewCard>
    </div>
  </div>
  );
};

export default App;
