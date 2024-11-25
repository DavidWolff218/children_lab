function OldCard({
  name,
  quote,
  addressLine1,
  addressLine2,
  image,
  icon,
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
      <img className='image' src={image}/>
      <button className="button" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}

export default OldCard;
