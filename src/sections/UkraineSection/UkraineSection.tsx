import cn from 'classnames';
import './UkraineSection.scss';
import logo from "@assets/icons/blue-logo.png";

interface Props {
  classNames?: string;
}

export const UkraineSection: React.FC<Props> = ({ classNames }) => {
  const className = cn(
    classNames,
    'ukraine'
  )

  return (
    <section className={className}>
      <p className="ukraine__text ukraine__desktop-top ukraine__tablet-top">
        Об’єднуємо усіх волонтерів та бажаючих допомагати
      </p>
      <p className="ukraine__text ukraine__desktop-top ukraine__tablet-bottom">
        Надаємо звітність до закритих зборів
      </p>
      <p className="ukraine__text ukraine__desktop-bottom ukraine__tablet-top">
        Швидкі донати з карток будь-яких банків або прямо на вашу банку доступні для всіх зборів.
      </p>
      <p className="ukraine__text ukraine__desktop-bottom ukraine__tablet-bottom ukraine__text--rel-pos">
        Кожен волонтер має власний кабінет із усіма даними.
      </p>
      <div className="ukraine__logo-wrapper">
        <img className='ukraine__logo logo' src={logo} alt="logo" />
      </div>
    </section>
  );
};
