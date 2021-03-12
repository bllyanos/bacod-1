import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

// BUDGET TRACKER
// budget = { id, name, amount }
// budgets = [budget]

function App() {
  const budgets = useSelector((s) => s.budget.budgets);
  const dispatch = useDispatch();

  const [deleteIndex, setDeleteIndex] = useState(0);

  const handleClickTambah = () => {
    dispatch({
      type: "ADD_BUDGET",
      payload: {
        name: "Dummy " + Math.random(),
        amount: 1000,
      },
    });
  };

  const removeLastBudget = () => {
    dispatch({
      type: "REMOVE_BUDGET",
      payload: null,
    });
  };

  const removeItem = (index) => {
    dispatch({
      type: "REMOVE_X_BUDGET",
      payload: Number(index),
    });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <button onClick={handleClickTambah}>TAMBAH DUMMY</button>
          <button onClick={removeLastBudget}>REMOVE LAST</button>
          <div>
            <input
              type="text"
              value={deleteIndex}
              onChange={(e) => {
                setDeleteIndex(e.target.value);
              }}
            />
            <button onClick={(e) => removeItem(deleteIndex)}>
              REMOVE THIS ITEM
            </button>
          </div>
        </div>
        <div className="row mb-3">
          <h2>Budget App</h2>
        </div>
        <div>
          {budgets.map((b) => (
            <div key={b.id}>
              {b.id} __ {b.name} {b.amount}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
