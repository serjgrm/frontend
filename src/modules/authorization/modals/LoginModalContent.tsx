import { Dispatch, FC, SetStateAction, useState } from 'react';
import './AuthModal.scss';
import { CurrentPage } from '@/types/CurrentPage';
import { Input } from "@ui/Input";
import { CustomLink } from "@ui/CustomLink";
import { Button } from "@ui/Button";
import showIcon from '@assets/icons/show.png'; 
import hideIcon from '@assets/icons/hide.png'; 
import iconClose from '@assets/svg/cross.svg'
import { passwordValidate, PasswordValidateFlags } from "@utils/passwordValidate.ts";
import { InputStatus } from "@ui/Input/types/InputStatus.ts";
import { emailValidate } from "@utils/emailValidate.ts";
import { AuthorizationService } from '../services/authorization.service';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/store/hooks';
import { setAuthModalState } from '@/store/slices/authModalSlice';


interface Props {
  changePage: Dispatch<SetStateAction<CurrentPage>>
  closeModal: () => void;
}

const LoginModalContent: FC<Props> = ({ changePage, closeModal }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordFlags, setPasswordFlags] = useState<PasswordValidateFlags>({
    minLength: false,
    hasNumber: false,
    hasLetterUpperCase: false,
    hasSpecSymbol: false,
    dontHasSpaces: true,
  });
  const [passwordStatus, setPasswordStatus] = useState<InputStatus | undefined>(undefined);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [emailStatus, setEmailStatus] = useState<InputStatus | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const goToRegistration = () => {
    changePage(CurrentPage.REGISTRATION_PAGE)
  }
  
  const login = () => {
    setPasswordFlags(passwordValidate(password));
    
    const passwordIsValid
      = passwordFlags.hasLetterUpperCase
      && passwordFlags.hasNumber
      && passwordFlags.hasSpecSymbol
      && passwordFlags.minLength
      && passwordFlags.dontHasSpaces;
    
    if (!passwordIsValid && passwordStatus !== InputStatus.ERROR) {
      setPasswordStatus(InputStatus.ERROR);
      setTimeout(() => setPasswordStatus(undefined), 3000)
    }
    
    const statusOfEmail = emailValidate(email) ? InputStatus.SUCCESS : InputStatus.ERROR;
    
    setEmailStatus(statusOfEmail);
    
    if (statusOfEmail === InputStatus.ERROR) {
      console.log('aaaa')
      setTimeout(() => setEmailStatus(undefined), 3000)
    }

    const requestBody = {
      email,
      password
    }

    const request = async () => {
      const response = await AuthorizationService.login(requestBody);

      if ('errors' in response) {
        setErrorMessage('Invalid email format.');
      } else if ('error' in response) {
        setErrorMessage('There is no users under such combination of email and password');
      } else {
        setErrorMessage('')
      }

      if ('token' in response) {
        localStorage.setItem('token', response.token)
        localStorage.setItem('currentUser', email)
        navigate('frontend/my-page')
        dispatch(setAuthModalState(false))
      }

      console.log(response);
    }
    
    request()
  }
  
  return (
    <section className="login">
      <header className="login__header">
        <h6 className="login__title">
          Увійти
        </h6>
        
        <img
          className="login__close-icon icon"
          alt="close"
          src={iconClose}
          onClick={closeModal}
        />
      </header>
      
      <Input
        type={'email'}
        required={true}
        labelText={'Пошта'}
        name={'email'}
        value={email}
        setValue={setEmail}
        classNames="login__input"
        status={emailStatus}
      >
        example@gmail.com
      </Input>
      
      <div className="login__password-input-wrapper">
        <Input
          type={passwordVisible ? "text" : "password"}
          required={true}
          labelText={'Пароль'}
          name={'password'}
          value={password}
          setValue={setPassword}
          status={passwordStatus}
          classNames="login__input"
        >
          Пароль
        </Input>
        <img
          src={passwordVisible ? showIcon : hideIcon}
          alt={passwordVisible ? "Hide password" : "Show password"}
          className="login__password-toggle-icon"
          onClick={togglePasswordVisibility}
        />
      </div>

      {errorMessage && (
        <div className="error-message">
          {errorMessage}
        </div>
      )}
      
      <CustomLink 
        to={'/password-recovery'} 
        classNames="custom-link--primary"
      >
        Забули пароль?
      </CustomLink>
      
      <Button
        callback={login}
        isPrimary={true}
        classNames="login__button"
      >
        УВІЙТИ
      </Button>
      
      <Button
        callback={goToRegistration}
        classNames="login__button"
      >
        Не маєш аккаунт?
      </Button>
    </section>
  );
};

export default LoginModalContent;