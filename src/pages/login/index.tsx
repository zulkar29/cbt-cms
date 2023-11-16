import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { login, reset } from '../../redux/auth/authSlice';
import './index.scss';
import { Button } from '../../components/button';
import Input from '../../components/forms/text-input';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user, isLoading, isError, isSuccess, message } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  return (
    <div className="login-page">
      <section className="heading">
        <img src="/assets/logo/logo.png" alt="logo" />
        {/* <h1>Login</h1> */}
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <Input
            label="Email"
            htmlFor="email"
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={onChange}
          />
          <Input
            label="Password"
            htmlFor="password"
            type="password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={onChange}
          />

          <div className="form-group">
            <Button className="submit-btn" type="submit">
              {isLoading ? 'Loading' : 'Submit'}
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
