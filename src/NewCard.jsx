function NewCard({
  onClick,
  buttonText,
}) {

  return (
    <div className="card">

      <button className="button" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}

export default NewCard;
