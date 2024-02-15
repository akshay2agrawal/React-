
const Square = ({value}) => {
  const onButtonClick = (e) => {
    e.target.innerHTML = "A";
    console.log(e);
  }
  
  return (
    <button className="button" onClick={(e) => onButtonClick(e)}>
        {value}
    </button>
  )
}

export default Square