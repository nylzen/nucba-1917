import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Crear un contexto
const AuthContext = createContext();

// Estado inicial para el form
const initialState = {
  username: '',
  password: '',
};

// Crear el proveedor del contexto
const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('user'));

  const [form, setForm] = useState(initialState);

  const [user, setUser] = useState(isAuth ? localStorage.getItem('user') : '');

  const navigate = useNavigate();

  //   Funcion para setear el user y la pass
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //   Funcion que va a recibir el user y pass del form
  const handleSubmit = e => {
    e.preventDefault();

    if (!form.username.trim() || !form.password.trim()) {
      alert('Completa correctamente los datos');
      return;
    }

    setUser(form.username);
    setForm(initialState);
    setIsAuth(true);

    // Guardamos el usuario en el LS
    localStorage.setItem('user', form.username);
    navigate(`/usuario/${form.username}`);
  };

  // Funcion para desloguearse
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
    setIsAuth(false);
    setUser('');
  };

  //   Seteamos data
  const data = { isAuth, form, user, handleChange, handleSubmit, handleLogout };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
