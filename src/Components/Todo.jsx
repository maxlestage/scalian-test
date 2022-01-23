import { useState } from "react";

let textId = 0;

function Todo() {
  const [myText, setMyText] = useState("");
  const [savedTexts, setSavedTexts] = useState([]);

  return (
    <>
      <div>My TODO list</div>
      <input value={myText} onChange={(e) => setMyText(e.target.value)} />
      <button
        onClick={() => {
          setMyText("");
          setSavedTexts([{ id: textId++, text: myText }, ...savedTexts]);
        }}
      >
        Add
      </button>
      <ul>
        {/* <li style={{ textDecoration: "line-trough" }}>item 0</li>
        <li style={{ textDecoration: "none" }}>item 1</li>
        <li>...</li> */}
        {savedTexts.map((text) => (
          <li key={text.id}>{text.text}</li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
