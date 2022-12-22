import React from "react";
import Task from "./components/Task";
import { Provider } from "react-redux";
import store from "./redux/store";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <div>
          <Task />
        </div>
      </Provider>
    </>
  );
};

export default App;
