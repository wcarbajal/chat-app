
const baseUrl = process.env.REACT_APP_API_URL;

export const fetchSinToken = async ( endpoint, data, method = 'GET' ) => {

 try {
  
   const url = `${ baseUrl }/${ endpoint }`;

  if ( method === 'GET' ) {
    
    const respuesta = await fetch( url );
    return await respuesta.json();

  } else {
    const respuesta = await fetch( url, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify( data )

    } );
    return await respuesta.json();
  }

 } catch (error) {
  console.error('Error in fetchSinToken:', error);
  throw error;
  
 }
  

};

export const fetchConToken = async ( endpoint, data, method = 'GET' ) => {

 try {
  
   const url = `${ baseUrl }/${ endpoint }`;
   const token = localStorage.getItem('token') || '';

  if ( method === 'GET' ) {    
    const respuesta = await fetch( url, {
      headers: {
        'x-token': token
      }
    } );
    return await respuesta.json();

  } else {
    const respuesta = await fetch( url, {
      method,
      headers: {
        'Content-type': 'application/json',
        'x-token': token
      },
      body: JSON.stringify( data )

    } );
    return await respuesta.json();
  }

 } catch (error) {
  console.log('Error in fetchConToken:', error);
  throw new Error('Error in fetchConToken: ' + error.message);
  
 }
  

};

