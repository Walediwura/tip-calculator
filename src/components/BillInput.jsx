import InputComponent from "./InputComponent";
import DropdownComponent from "./DropdownComponent";

function BillInput({
  bill,
  setBill,
  rating1,
  setRating1,
  rating2,
  setRating2,
}) {
  // const Options = [
  //   { label: "Dissatisfied (0%)", value: 0 },
  //   { label: "It was okay (5%)", value: 5 },
  //   { label: "It was good (10%)", value: 10 },
  //   { label: "Absolutely Amazing! (20%)", value: 20 },
  // ];
  return (
    <div className="billInput">
      <InputComponent label="How much was the bill?">
        <input
          type="text"
          placeholder="Bill Value"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </InputComponent>

      <DropdownComponent rating={rating1} onSelect={setRating1}>
        How did you find the service?
      </DropdownComponent>
      <DropdownComponent rating={rating2} onSelect={setRating2}>
        How did your friend find the service?
      </DropdownComponent>
    </div>
  );
}

export default BillInput;
