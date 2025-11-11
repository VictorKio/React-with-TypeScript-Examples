export function Button(){
  const ButtonTitle = () =>{
    const availableMoney = 1000;
    const text = availableMoney > 1000 ? 'more than a 1000' : 'less or equal to 1000';
    return <h3>{text}</h3>
  }


  return(
    <button onClick={() =>  alert('You have clicked!')}>
      <ButtonTitle />
    </button>
  );
}