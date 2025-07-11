import { useContext, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../auth/Context';
import Swal from 'sweetalert2';


export const RegisterPage = () => {


  const { register } = useContext( AuthContext );

  const [ form, setForm ] = useState( {
    nombre: '',
    email: '',
    password: ''
  } );

  const onChange = ( { target } ) => {
    const { name, value } = target;
    setForm( {
      ...form,
      [ name ]: value
    } );
  };

  const onSubmit = async ( event ) => {
    event.preventDefault();
    const { nombre, email, password } = form;
    

    const resp = await register( nombre, email, password );
    Swal.fire({
      title: resp.ok ? `Registro exitoso para ${nombre}` : 'Error al registrar',
      text: resp.ok ? 'Ya puedes iniciar sesión' : `Ocurrió el siguiente error: ${resp.msg}`,//mostarra en negrita 
      icon: resp.ok ? 'success' : 'error'
    });

  };

  return (
    <form className="login100-form validate-form flex-sb flex-w" onSubmit={ onSubmit }>

      <span className="login100-form-title mb-3">
        Chat - Registro
      </span>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={ form.nombre }
          onChange={ onChange }
        />
        <span className="focus-input100"></span>
      </div>


      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="email"
          name="email"
          placeholder="Email"
          value={ form.email }
          onChange={ onChange }
        />
        <span className="focus-input100"></span>
      </div>


      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="password"
          name="password"
          placeholder="Password"
          value={ form.password }
          onChange={ onChange }
        />
        <span className="focus-input100"></span>
      </div>

      <div className="row mb-3">
        <div className="col text-right">
          <Link to="/auth/login" className="txt1">
            Ya tienes cuenta?
          </Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button
          className="login100-form-btn"
          type="submit"
          disabled={ !form.nombre || !form.email || !form.password }
        >
          Crear cuenta
        </button>
      </div>

    </form>
  );
};