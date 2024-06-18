import {Dispatch, FC, SetStateAction, useState} from "react";
import './AuthModal.scss';
import {CurrentPage} from "../types/CurrentPage.ts";
import {Input} from "@ui/Input";
import iconClose from "@assets/svg/icon-close-32.svg";
import {Checkbox} from "@ui/Checkbox";
import {Button} from "@ui/Button";
import { AuthorizationService } from "../services/authorization.service.ts";

interface Props {
  changePage: Dispatch<SetStateAction<CurrentPage>>;
  closeModal: () => void;
}

const RegistrationModalContent: FC<Props> = ({ changePage, closeModal }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [nameOfOrganisation, setNameOfOrganisation] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [isVolunteer, setIsVolunteer] = useState<boolean>(false);
  
  const goToLogin = () => {
    changePage(CurrentPage.LOGIN_PAGE);
  }
  
  const submitRegistration = () => {
    const requestRegisterBody = {
      email,
      password,
      repeatPassword,
      fullName: nameOfOrganisation
    }

    const request = async () => {
      const response = await AuthorizationService.register(requestRegisterBody);
      console.log(response);
    }
    
    request()
  }

  return (
    <section className="registration">
      <header className="registration__header">
        <h6 className="registration__title">
          Реєстрація
        </h6>
        
        <img
          className="registration__close-icon icon"
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
      >
        Пароль
      </Input>
      
      <Input
        type={"password"}
        required={true}
        labelText={'Повторити пароль'}
        name={'repeat-password'}
        value={repeatPassword}
        setValue={setRepeatPassword}
      >
        Повторити пароль
      </Input>
      
      <Input
        type={"text"}
        required={true}
        labelText={'ПІБ / Назва волонтерської організації'}
        name={'name-of-organisation'}
        value={nameOfOrganisation}
        setValue={setNameOfOrganisation}
      >
        Шевченко Ольга Олександрівна
      </Input>
      
      <Checkbox
        active={isVolunteer}
        callbackToggle={() => setIsVolunteer(prev => !prev)}
        legend="Я волонтер"
      />
      
      <Button
        isPrimary={true}
        callback={submitRegistration}
        classNames="login__button"
      >
        Зареєструватись
      </Button>
      
      <Button
        callback={goToLogin}
        classNames="login__button"
      >
        Маєш аккаунт?
      </Button>
      
    </section>
  );
};

export default RegistrationModalContent;