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
              <a 
                href="https://www.google.com/imgres?q=instagram%20%D0%B2%D1%85%D1%96%D0%B4&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F95%2FInstagram_logo_2022.svg%2F640px-Instagram_logo_2022.svg.png&imgrefurl=https%3A%2F%2Fuk.wikipedia.org%2Fwiki%2FInstagram&docid=6z1u56LoWhp8KM&tbnid=2JAZ5saTZepjDM&vet=12ahUKEwjYy-mvqIuGAxWYQfEDHb8NB20QM3oECGYQAA..i&w=640&h=640&hcb=2&ved=2ahUKEwjYy-mvqIuGAxWYQfEDHb8NB20QM3oECGYQAA"
                target='_blank'
                className="custom-link footer__link"
              >
                Instagram
              </a>
            </li>
            <li className="footer__item">
              <a 
                href="https://www.google.com/imgres?q=instagram%20%D0%B2%D1%85%D1%96%D0%B4&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F95%2FInstagram_logo_2022.svg%2F640px-Instagram_logo_2022.svg.png&imgrefurl=https%3A%2F%2Fuk.wikipedia.org%2Fwiki%2FInstagram&docid=6z1u56LoWhp8KM&tbnid=2JAZ5saTZepjDM&vet=12ahUKEwjYy-mvqIuGAxWYQfEDHb8NB20QM3oECGYQAA..i&w=640&h=640&hcb=2&ved=2ahUKEwjYy-mvqIuGAxWYQfEDHb8NB20QM3oECGYQAA" 
                target='_blank' 
                className="custom-link footer__link"
              >
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
