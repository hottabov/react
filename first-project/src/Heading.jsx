const Heading = () => {
  const date = new Date();
  const currentTime = date.getHours();
  let greetings, color, customStyles;

  // Set customStyles based on current time
  if (currentTime < 12) {
    greetings = "Good morning";
    color = "red";
  } else if (currentTime < 18) {
    greetings = "Good afternoon";
    color = "green";
  } else {
    greetings = "Good night";
    color = "blue";
  }

  // Set customStyles object
  customStyles = {
    color: color,
    fontSize: "70px",
    border: "2px solid" + color,
    padding: "20px 50px"
  }

  return <h1 className={customStyles}>{greetings}</h1>
}
export default Heading;