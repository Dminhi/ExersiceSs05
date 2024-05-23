import "./App.css";

import { Provider } from "react-redux";
import TodoList from "./components/TodoListItem";
import { store } from "./redux/store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          <h1>Todo List</h1>
          <TodoList />
        </div>
      </Provider>
    </>
  );
}

export default App;
