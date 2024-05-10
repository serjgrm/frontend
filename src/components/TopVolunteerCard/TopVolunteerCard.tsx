import './TopVolunteerCard.scss';
import cn from 'classnames';

interface Props {
  classNames?: string;
  name: string;
  amount: string;
}

export const TopVolunteerCard: React.FC<Props> = ({ classNames, name, amount }) => {
  const className = cn(
    classNames,
    'volunteer-card'
  )

  return (
    <article className={className}>
      <div className="volunteer-card__info">
        <p className="volunteer-card__name">{name}</p>
        <span className="volunteer-card__amount">{amount} грн</span>
      </div>
    </article>
  );
};
