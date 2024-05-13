import {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import './AuthPage.scss';
import {CurrentPage} from "../types/CurrentPage";

import {Input} from "@ui/Input";
import {CustomLink} from "@ui/CustomLink";
import {Button} from "@ui/Button";

import iconClose from '@assets/svg/icon-close-32.svg'
import {passwordValidate, PasswordValidateFlags} from "@utils/passwordValidate.ts";
import {InputStatus} from "@ui/Input/types/InputStatus.ts";

interface Props {
  changePage: Dispatch<SetStateAction<CurrentPage>>
  closeModal: () => void;
}

const LoginPage: FC<Props> = ({ changePage, closeModal }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordFlags, setPasswordFlags] = useState<PasswordValidateFlags>({
    minLength: false,
    hasNumber: false,
    hasLetterUpperCase: false,
    hasSpecSymbol: false,
    dontHasSpaces: true,
  })
  
  useEffect(() => {
    setPasswordFlags(passwordValidate(password));
  }, [password])
  
  const goToRegistration = () => {
    changePage(CurrentPage.REGISTRATION_PAGE)
  }
  
  const passwordIsValid
    = passwordFlags.hasLetterUpperCase
    && passwordFlags.hasNumber
    && passwordFlags.hasSpecSymbol
    && passwordFlags.minLength
    && passwordFlags.dontHasSpaces;
  
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
        type={"password"}
        required={true}
        labelText={'Пароль'}
        name={'password'}
        value={password}
        setValue={setPassword}
        status={passwordIsValid ? InputStatus.SUCCESS : undefined}
      >
        Пароль
      </Input>
      
      <CustomLink 
        to={'/password-recovery'} 
        classNames="custom-link--primary"
      >
        Забули пароль?
      </CustomLink>
      
      <Button callback={() => alert('Це типу входимо в аккаунт')} isPrimary={true}>
        УВІЙТИ
      </Button>
      
      <Button callback={goToRegistration}>
        Не маєш аккаунт?
      </Button>
    </section>
  );
};

export default LoginPage;