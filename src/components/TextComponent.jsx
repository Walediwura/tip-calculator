function TextComponent({ children }) {
  return (
    <div>
      <label>
        {children}
        <input type="text" />
      </label>
    </div>
  );
}

export default TextComponent;
