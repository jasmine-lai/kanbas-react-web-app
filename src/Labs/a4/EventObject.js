import React, { useState } from "react";

function EventObject() {
  const [event, setEvent] = useState(null); {/* initialize event */}
  const handleClick = (e) => { 
    e.target = e.target.outerHTML; {/* replace target with HTML */}
    delete e.view; {/* to avoid circular reference */}
    setEvent(e); {/* set event object so it can be displayed */}
  };
  return (
    <div>
      <h2>Event Object</h2>
      <button id="event-button"
        onClick={(e) => handleClick(e)}
        className="btn btn-primary">
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre> {/* convert event to string to be displayed */}
    </div>
  );
}
export default EventObject;