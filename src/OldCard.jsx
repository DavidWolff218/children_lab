function OldCard({
  name,
  memberImg,
  quote,
  addressLine1,
  addressLine2,
  image,
  icon,
  feed,
  onClick,
  buttonText,
}) {
  return (
    <div className="card">
      {addressLine1 && (
        <address className="address">
          {addressLine1}
          {<br />}
          {addressLine2}
        </address>
      )}
      {icon && <img className='icon' src={icon} alt='social media icon'/>}
      {feed && <span className='feed'>{feed}</span>}
      {image && <img className='image' src={image} alt='house listing'/>}
      <button className="button" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}

export default OldCard;
