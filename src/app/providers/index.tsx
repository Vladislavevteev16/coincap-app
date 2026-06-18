import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "@/app/store/index";

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/coincap-app/">{children}</BrowserRouter>
    </Provider>
  );
};
