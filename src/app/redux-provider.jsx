"use client";

import { Provider } from "react-redux";
import store from "@/store/store"; // tweak the path please

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
