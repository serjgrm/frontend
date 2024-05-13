import './Footer.scss';
import cn from 'classnames';
import { CustomLink } from '../../ui/CustomLink/CustomLink';
import { Logo } from '@/ui/Logo';

interface Props {
  classNames?: string;
}

export const Footer: React.FC<Props> = ({ classNames }) => {
  const className = cn(
    classNames,
    'footer'
  )

  return (
    <footer className={className}>
      <div className="container footer__wrapper">
        <Logo classNames='footer__logo' />

        <nav className="footer__nav">
          <ul className="footer__list">
            <li className="footer__item">
              <CustomLink
                to={"/frontend"}
                classNames="footer__link"
              >
                Про нас
              </CustomLink>
            </li>
            <li className="footer__item">
              <CustomLink
                classNames="footer__link"
                to={"frontend/funds-page"}
              >
                Усі збори
              </CustomLink>
            </li>
            <li className="footer__item">
              <a
                className="footer__link"
                href="#top-volunteers"
              >
              ТОП волонтерів
            </a>
            </li>
          </ul>
        </nav>

        <div className="footer__social-links">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#Instagram" className="custom-link footer__link">
                Instagram
              </a>
            </li>
            <li className="footer__item">
              <a href="#Facebook" className="custom-link footer__link">
                Facebook
              </a>
            </li>
            <li className="footer__item">
              <a href="mailto:support@volunteersbridge@gmail.com" className="custom-link footer__link">
                support@volunteersbridge@gmail.com
              </a>
            </li>
          </ul>
        </div>
        
        <p className="footer__company-name">
          Volunteers © Bridge 2024 🇺🇦
        </p>
      </div>
    </footer>
  );
};
