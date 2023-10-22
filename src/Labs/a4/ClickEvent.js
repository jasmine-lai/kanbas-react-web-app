function ClickEvent() {
    const hello = () => {
      alert("Hello World!");
    };
    const good = () => {
      alert("Life is Good!");
    };
    return (
      <div>
        <h2>Click Event</h2>
        <button onClick={hello}> {/* configure function call */}
          Click Hello 1 </button>
        <button onClick={() => hello()}> {/* wrap in function if parameters necessary */}
          Click Hello 2 </button>
        <button
          onClick={() => { {/* wrap in {} if more than 1 line of code necessary */}
            hello();
            good();
          }}
        >
          Click Hello 3
        </button>
      </div>
    );
}
export default ClickEvent;