import './Header.scss';
import cn from 'classnames';
import { FC } from 'react';
import { CustomLink } from '../../ui/CustomLink/CustomLink';
import { Logo } from '@/ui/Logo';
import { useNavigate } from 'react-router-dom';

interface Props {
  classNames?: string;
}

export const Header: FC<Props> = ({ classNames }) => {
  const navigate = useNavigate();

  const className = cn(
    classNames,
    'header'
  );

  const handleAnchorURL = () => {
    setTimeout(() => {
      const currentURL = window.location.href;
      if (currentURL.includes('#top-volunteers')) {
        navigate('/frontend#top-volunteers')
      }
    })
  };

  return (
    <>
      <div className="container">
        <header className={className}>
          <Logo classNames="header__logo"/>

          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <CustomLink
                  to={"/frontend"}
                  classNames="header__link"
                >
                  Про нас
                </CustomLink>
              </li>
              <li className="header__item">
                <CustomLink
                  classNames="header__link"
                  to={"frontend/funds-page"}
                >
                  Усі збори
                </CustomLink>
              </li>
              <li className="header__item">
                <a
                  className="header__link custom-link"
                  href="#top-volunteers"
                  onClick={handleAnchorURL}
                >
                  ТОП волонтерів
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="header__actions actions">
            <div className="actions__wrapper">
              <CustomLink
                classNames="actions__link"
                isPrimary={true}
                to={"#Організувати-збір"}
              >
                Організувати збір
              </CustomLink>
              <CustomLink
                classNames="actions__link"
                to={"#Увійти"}
              >
                Увійти
              </CustomLink>
            </div>
          </div>
        </header>
      </div>
      <hr className="hr" />
    </>
  );
};
