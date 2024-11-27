function NewCard({
  children,
  onClick,
  buttonText,
}) {

  return (
    <div className="card">
      {children}
      <button className="button" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}

export default NewCard;
