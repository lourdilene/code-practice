export default function App() {
  function handleClick() {
    console.log('Clicked!');
  }

  function handleDelete(id) {
    console.log('Delete id:', id);
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>React callbacks</h2>

      {/* ✅ Pass the function (runs only when clicked) */}
      <button onClick={handleClick}>Option A: onClick=handleClick</button>

      <br />
      <br />

      {/* ❌ Wrong: runs immediately during render */}
      {/* <button onClick={handleClick()}>WRONG</button> */}

      {/* ✅ Wrap in an arrow function when you need args */}
      <button onClick={() => handleDelete(42)}>Option B: delete 42</button>

      <br />
      <br />

      {/* ✅ Example: passing a callback to another function */}
      <button
        onClick={() => {
          runCallback(handleClick);
        }}
      >
        Option C: runCallback(handleClick)
      </button>
    </div>
  );
}

function runCallback(cb) {
  console.log('Running callback now...');
  cb();
}
