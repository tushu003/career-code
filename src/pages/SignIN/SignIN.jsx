import Lottie from 'lottie-react';
import React, { use } from 'react';
import signInLottie from '../../assets/animation/Animation - 1748716257650.json'
import { AuthContext } from '../../context/authContext/authContext';
import SocialLogin from '../Shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router';

const SignIN = () => {
    const {signInUser}=use(AuthContext);
    const location = useLocation();
    const navigate=useNavigate();
    const from = location.state || '/applyJob/:id';

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // signIn user
        signInUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from);
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
           <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie
              className="w-72 ml-9"
              animationData={signInLottie}
              loop={true}
            ></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-5xl font-bold">SignIn now!</h1>
              <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral ml-3 mt-4">SignIn</button>
              </fieldset>
              </form>
              <SocialLogin from={from}></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>  
        </div>
    );
};

export default SignIN;