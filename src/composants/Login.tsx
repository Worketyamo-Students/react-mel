import App from '../App'
import Person from './Person';
import Form from './Form';


function Login(){ 
    return ( 
    <div className='flex flex-row h-[100vh] overflow-hidden'>
     <Person />
     <Form />
     
    </div>
    );
}
export default Login;