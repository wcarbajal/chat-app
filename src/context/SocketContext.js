import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';

import { useSocket } from '../hooks/useSocket'
import { AuthContext } from '../auth/Context';
import { ChatContext } from './chat/ChatContext';

import { types } from '../types/types';

export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const { socket, online, conectarSocket, desconectarSocket  } = useSocket('http://localhost:8080');
    const { auth } = useContext( AuthContext );
    const { dispatch  } = useContext( ChatContext )

    useEffect(() => {
      if (auth.logged){
        conectarSocket();
      }
    }, [auth, conectarSocket])

       useEffect(() => {
      if (!auth.logged){
        desconectarSocket();
      }
    }, [auth, desconectarSocket])
    //escuchar los cambios en los usuarios conectados
    useEffect(() => {
      socket?.on('lista-usuarios', (usuarios)=> {
        dispatch({
          type: types.usuariosCargados,
          payload:  usuarios
        })
      })

    }, [socket, dispatch])
    
    
    
    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}