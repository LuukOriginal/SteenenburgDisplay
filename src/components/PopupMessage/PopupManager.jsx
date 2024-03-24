import React, { useEffect } from "react";
import PopupMessage from "./PopupMessage";

export const Popupcontext = React.createContext({
  show: () => {},
  hide: () => {},
});

export default function PopupManager({ children }) {
  const [visible, setVisible] = React.useState(false);

  const [title, setTitle] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [options, setOptions] = React.useState([]);

  const popupFunctions = {
    show: (title, message, options) => {
      setTitle(title);
      setMessage(message);
      setOptions(options);

      console.log(title, message, options);

      setVisible(true);
    },

    hide: () => {
      setVisible(false);
    },
  };

  return (
    <Popupcontext.Provider value={popupFunctions}>
      {visible && (
        <PopupMessage title={title} message={message} options={options} />
      )}
      {children}
    </Popupcontext.Provider>
  );
}
