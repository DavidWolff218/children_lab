function OldCard({
  name,
  memberImg,
  quote,
  addressLine1,
  addressLine2,
  listingImg,
  icon,
  feed,
  onClick,
  buttonText,
}) {

  return (
    <div className="card">
      {name && quote &&(
        <div className="name">
          <h3>{name}</h3>
          <h4>{quote}</h4>
        </div>
      )}
      {addressLine1 && (
        <address className="address">
          {addressLine1}
          {<br />}
          {addressLine2}
        </address>
      )}
      {memberImg && <img className="image" src={memberImg} alt="teammember"/>}
      {icon && <img className="icon" src={icon} alt="social media icon" />}
      {feed && <span className="feed">{feed}</span>}
      {listingImg && <img className="image" src={listingImg} alt="house listing" />}
      <button className="button" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}

export default OldCard;
