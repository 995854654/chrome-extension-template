import React from 'react'
import { Provider } from "react-redux";
import { store } from "@/store"

const SidePanel: React.FC = () => {
  return (
    <Provider store={store}>

      SidePanel
    </Provider>
  )
}


export default SidePanel
