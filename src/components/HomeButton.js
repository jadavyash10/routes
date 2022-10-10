import { useHistory } from "react-router-dom";

function HomeButton() {
  let history = useHistory();
  console.log('history', history)

  function handleClick() {
    history.push("/");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}

export default HomeButton;