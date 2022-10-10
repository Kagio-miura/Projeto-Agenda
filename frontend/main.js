import 'core-js/stable';
import 'regenerator-runtime/runtime';
 
import Login from './modules/Login';

const login = new Login('.form-login','.login-erros-email', '.login-erros-senha');
const cadastro = new Login('.form-cadastro','.cadastro-erros-email', '.cadastro-erros-senha');
login.init();
cadastro.init();