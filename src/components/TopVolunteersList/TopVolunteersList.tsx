import { useEffect, useState } from 'react';
import './TopVolunteersList.scss';
import cn from 'classnames';
import { VolunteerCard } from '../VolunteerCard';
import volunteers from '../../volunteers-imitation.json';

interface Props {
  classNames?: string;
  limit: number;
}

interface VolunteerType {
  id: number,
  name: string,
  amount: string,
}

export const TopVolunteersList: React.FC<Props> = ({ classNames, limit }) => {
  const [visibleVolunteers, setVisibleFunds] = useState<VolunteerType[] | []>([]);

  useEffect(() => {
    const limitedVolunteers = volunteers.slice(0, limit);
    setVisibleFunds(limitedVolunteers);
  }, [limit]); 
  
  const className = cn(
    classNames,
  )

  return (
    <div className={className} >
      {visibleVolunteers.map(volunteer => (
        <VolunteerCard key={volunteer.id} name={volunteer.name} amount={volunteer.amount} />
      ))}
    </div>
  );
};
