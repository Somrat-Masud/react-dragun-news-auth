import { Link, useLocation, useNavigate } from "react-router-dom";
import Navber from "../Shared/Naver/Navber";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    
    const {signIn} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
const handleLogin = e =>{
    e.preventDefault();
    console.log(e.currentTarget)
    const form = new FormData(e.currentTarget);
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password)
    console.log(form)
    signIn(email,password)
    .then(result =>{
        console.log(result.user)

        //navigate after login
        navigate(location?. state ? location.state:'/')
    })
    .catch( error => {
        console.error(error)
    })
}
    return (
        <div>
            <Navber></Navber>
           <div className="shadow-2xl rounded-xl bg-slate-200 md:w-3/4 lg:w-1/2 mx-auto  ">
           <h2 className="text-3xl py-10 my-10 text-center " >Please Login</h2>
             <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto mb-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                 </div>
                 <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                 </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary mb-4">Login</button>
                 </div>
             </form>
             <p className="text-center font-bold ">Do not Have a Account <Link className="text-blue-600" to='/register'>Register</Link></p>
           </div>
        </div>
    );
};

export default Login;