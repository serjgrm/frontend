import './Nav.scss';
import cn from 'classnames';
import { FC, useEffect } from 'react';
import { CustomLink } from '../../ui/CustomLink/CustomLink';
import { useLocation, useNavigate } from 'react-router-dom';

interface Props {
  classNames?: string;
}

export const Nav: FC<Props> = ({ classNames }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const className = cn(
    classNames,
    'nav'
  );

  useEffect(() => {
    const { hash } = location;

    if (hash === '#top-volunteers') {
      navigate('/frontend');

      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView();
        }
      }, 100);
    }
  }, [location, navigate]);

  return (
    <>
      <nav className={className}>
        <ul className="nav__list">
          <li className="nav__item">
            <CustomLink
              to={"/frontend"}
              classNames="nav__link"
            >
              Про нас
            </CustomLink>
          </li>
          <li className="nav__item">
            <CustomLink
              classNames="nav__link"
              to={"frontend/funds-page"}
            >
              Усі збори
            </CustomLink>
          </li>
          <li className="nav__item">
            <a
              className="nav__link custom-link"
              href="#top-volunteers"
            >
              ТОП волонтерів
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
