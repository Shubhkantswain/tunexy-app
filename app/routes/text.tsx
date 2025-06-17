import React, { useState } from "react";

// ✅ Wrap component in React.memo
const ExpensiveComponent = React.memo(({ data }) => {
  console.log("hii"); // Only logs when `data` changes
  return <div>hello</div>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const data = 1; // primitive, no change in reference or value

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Re-render Parent {}</button>
      <ExpensiveComponent data={data} />
    </div>
  );
}

export default Parent;
