import { useState } from "react";

let textId = 0;

// <li style={{ textDecoration: "line-trough" }}>item 0</li>
//     <li style={{ textDecoration: "none" }}>item 1</li>

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
          setSavedTexts([
            { id: textId++, text: myText, todo: false },
            ...savedTexts,
          ]);
        }}
      >
        Add
      </button>
      <ul>
        {savedTexts.map((txt, index) => (
          <li
            key={index}
            style={
              txt.todo === false
                ? { textDecoration: "none" }
                : { textDecoration: "line-through" }
            }
            onClick={() => {
              console.log("Premier", [...savedTexts]);

              setSavedTexts(
                [
                  ...savedTexts.slice(0, index),
                  txt.todo === false
                    ? { id: txt.id, text: txt.text, todo: true }
                    : { id: txt.id, text: txt.text, todo: false },
                  ...savedTexts.slice(index + 1),
                ]

                // savedTexts.push({ id: text.id, text: text.text, todo: true }),
                // ...savedTexts,
              );
            }}
          >
            {txt.text}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
