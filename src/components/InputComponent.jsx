function InputComponent({ label, children }) {
  return (
    <div>
      <label>
        <span> {label}</span>
      </label>
      {children}
    </div>
  );
}
export default InputComponent;
