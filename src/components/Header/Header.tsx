import { FC } from 'react';
import logo from '../../assets/icons/logo.png';
import { CustomLink } from '../../ui/CustomLink/CustomLink';

interface Props { }

export const Header: FC<Props> = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <CustomLink
            className="header__logo"
            to={"/головна-сторінка"}
          >
            <img src={logo} alt="logo" />
          </CustomLink>
          <nav className="header__nav nav">
            <ul className="nav__list">
              <li className="nav__item">
                <CustomLink
                  to={"/Про-нас"}
                  classNames="nav__link custom-link--secondary"
                >
                  Про нас
                </CustomLink>
              </li>
              <li className="nav__item">
                <CustomLink
                  classNames="nav__link custom-link--secondary"
                  to={"/Усі-збори"}
                >
                  Усі збори
                </CustomLink>
              </li>
              <li className="nav__item">
                <CustomLink
                  classNames="nav__link custom-link--secondary"
                  to={"/ТОП-волонтерів"}
                >
                  ТОП волонтерів
                </CustomLink>
              </li>
            </ul>
          </nav>
          <div className="header__actions actions">
            <div className="actions__wrapper">
              <CustomLink
                classNames="actions__link custom-link--primary"
                to={"#Організувати-збір"}
              >
                Організувати збір
              </CustomLink>
              <CustomLink
                classNames="actions__link custom-link--secondary"
                to={"#Увійти"}
              >
                Увійти
              </CustomLink>
            </div>
          </div>
        </header>
      </div>
      <hr className="header-hr" />
    </>
  );
};
