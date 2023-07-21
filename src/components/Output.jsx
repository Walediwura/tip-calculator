function Output({ bill, tip }) {
  return (
    <div className="output">
      {bill ? (
        <h2>
          You pay ${bill + tip} {`($${bill} + $${tip} tip)`}
        </h2>
      ) : (
        ""
      )}
    </div>
  );
}
export default Output;
