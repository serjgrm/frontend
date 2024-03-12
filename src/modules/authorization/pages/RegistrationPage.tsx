import {ChangeEvent, useState} from "react";

const RegistrationPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  
  const changeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }
  
  const changePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }
  
  const changeRepeatPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(e.target.value);
  }
  
  return (
    <section className="login">
      <input
        className="email"
        type="email"
        onChange={changeEmailHandler}
        value={email}
        required
      />
      
      <input
        className="password"
        type={showPassword ? "text" : "password"}
        onChange={changePasswordHandler}
        value={password}
        required
      />
      
      <input
        className="password"
        type={showPassword ? "text" : "password"}
        onChange={changeRepeatPasswordHandler}
        value={repeatPassword}
        required
      />
      
      <button onClick={() => setShowPassword(prev => !prev)}>
        Show/hide password
      </button>
    </section>
  );
};

export default RegistrationPage;