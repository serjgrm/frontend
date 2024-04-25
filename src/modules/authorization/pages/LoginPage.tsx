import {Dispatch, FC, SetStateAction, useState} from 'react';
import './AuthPage.scss';
import {CurrentPage} from "../types/CurrentPage";

import {Input} from "@ui/Input";
import {CustomLink} from "@ui/CustomLink";
import {Button} from "@ui/Button";

import iconClose from '@assets/icon-close-32.svg'

interface Props {
  changePage: Dispatch<SetStateAction<CurrentPage>>
  closeModal: () => void;
}

const LoginPage: FC<Props> = ({ changePage, closeModal }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  const goToRegistration = () => {
    changePage(CurrentPage.REGISTRATION_PAGE)
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
      >
        example@gmail.com
      </Input>
      
      <Input
        type={showPassword ? "text" : "password"}
        required={true}
        labelText={'Пароль'}
        name={'password'}
        value={password}
        setValue={setPassword}
      >
        Пароль
      </Input>
      
      <CustomLink to={'/password-recovery'} isPrimary={true}>
        Забули пароль?
      </CustomLink>
      
      <Button callback={() => alert('Це типу входимо в аккаунт')} isPrimary={true}>
        УВІЙТИ
      </Button>
      
      <Button callback={goToRegistration}>
        ЗАРЕЄСТРУВАТИСЯ
      </Button>
    </section>
  );
};

export default LoginPage;