import { useState } from "react";

import BillInput from "./BillInput";
import Output from "./Output";
import Reset from "./Reset";

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const tip = ((rating1 + rating2) / 2 / 100) * bill;

  return (
    <div>
      <BillInput
        bill={bill}
        setBill={setBill}
        rating1={rating1}
        setRating1={setRating1}
        rating2={rating2}
        setRating2={setRating2}
      />

      <Output bill={bill} setBill={setBill} tip={tip} />
      <Reset
        bill={bill}
        setBill={setBill}
        setRating1={setRating1}
        setRating2={setRating2}
      />
    </div>
  );
}

export default TipCalculator;
