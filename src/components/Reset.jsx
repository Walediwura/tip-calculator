import ButtonComponent from "./ButtonComponent";

function Reset({ setBill, setRating1, setRating2 }) {
  function handleReset() {
    setBill(0);
    setRating1(0);
    setRating2(0);
  }
  return <ButtonComponent handleReset={handleReset}>Reset</ButtonComponent>;
}

export default Reset;
