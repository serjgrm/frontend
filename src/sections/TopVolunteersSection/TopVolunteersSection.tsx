import cn from 'classnames';
import './TopVolunteersSection.scss';
import { VolunteerCard } from '@/components/VolunteerCard';
import volunteers from '../../volunteers-imitation.json';
import { useState, useEffect } from 'react';

interface Props {
  classNames?: string;
  limit: number;
}

interface VolunteerType {
  id: number,
  name: string,
  amount: string,
}

export const TopVolunteersSection: React.FC<Props> = ({ classNames, limit }) => {
  const className = cn(
    classNames,
    'top-volunteers'
  )

  const [visibleVolunteers, setVisibleFunds] = useState<VolunteerType[] | []>([]);

  useEffect(() => {
    const limitedVolunteers = volunteers.slice(0, limit);
    setVisibleFunds(limitedVolunteers);
  }, [limit]); 

  return (
    <section className={className}>
      {false && limit}
      <h3 className='top-volunteers__title'>
        ТОП волонтерів
      </h3>
      <div className="top-volunteers__content">
        {visibleVolunteers.map((volunteer, index) => (
          <VolunteerCard key={index} name={volunteer.name} amount={volunteer.amount} />
        ))}
      </div>
    </section>
  );
};
