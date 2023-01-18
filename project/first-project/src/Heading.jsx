const Heading = () => {

  const customStyles = {
    color: "red",
    fontSize: "70px",
    border: "2px solid red",
    padding: "20px 50px"
  }

  const date = new Date();
  const currentTime = date.getHours();
// const currentTime = 16;

  let greetings, color;

  if (currentTime < 12) {
    greetings = "Good morning";
    customStyles.color = "red";
  } else if (currentTime < 18) {
    greetings = "Good afternoon";
    customStyles.color = "green";
  } else {
    greetings = "Good night";
    customStyles.color = "blue";
  }

  return <h1 className={customStyles}>{greetings}</h1>
}

export default Heading;