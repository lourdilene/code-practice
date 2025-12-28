export default function ExerciseCallback() {
  function handleHello() {
    console.log('Hello!');
  }

  function runCallback(cb) {
    cb();
  }

  return (
    <div style={{ padding: 24 }}>
      <h3>Callback exercise</h3>

      <button onClick={runCallback(handleHello)}>Say Hello</button>
    </div>
  );
}
