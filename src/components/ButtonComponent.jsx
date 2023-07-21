// Reusable Components
function ButtonComponent({ children, handleReset }) {
  return (
    <div>
      <button className="btnComp" onClick={handleReset}>
        {children}
      </button>
    </div>
  );
}
export default ButtonComponent;
