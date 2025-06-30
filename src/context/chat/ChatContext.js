import React, { createContext, useReducer } from 'react';
import { chatReducer } from './chatReducer';

export const ChatContext = createContext();

const initialState = {
  uid: '',
  chatActivo: null, // Sera igual al usuario que yo quiero enviar mensajes
  usuarios: [], // To dos los usuario de la base de datos
  mensajes: [], // el chat seleccionados

};

export const ChatProvider = ( { children } ) => {

  const [ chatState, dispatch ] = useReducer( chatReducer, initialState );

  return (
    <ChatContext.Provider value={ {
      chatState,
      dispatch

    } }
    >
      { children }

    </ChatContext.Provider>
  );


};