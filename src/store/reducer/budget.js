const initialState = {
  lastId: 2,
  budgets: [
    { id: 1, name: "Pendapatan Proyek", amount: 1000000 },
    { id: 0, name: "Ayam Penyet", amount: -16000 },
  ],
  filter: null, // null = All | income | expense
};

// const a = [1,2,3,4]
// const [_a, ...b] = a;
// console.log(b); [2,3,4]

function budgetReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_BUDGET":
      const newBudget = {
        ...payload,
        id: state.lastId,
      };
      return {
        ...state,
        lastId: state.lastId + 1,
        budgets: [newBudget, ...state.budgets],
      };
    case "REMOVE_BUDGET":
      const [_, ...modified] = state.budgets;
      return {
        ...state,
        budgets: [...modified],
      };
    case "REMOVE_X_BUDGET":
      const filteredBudgets = state.budgets.filter(
        (e, index) => e.id !== payload
      );
      return {
        ...state,
        budgets: [...filteredBudgets],
      };
    default:
      return state;
  }
}

export default budgetReducer;
