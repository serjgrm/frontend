import { NavigationTitle } from '@/components/NavigationTitle';
import './UserPage.scss';
import cn from 'classnames';
import { Button } from '@/ui/Button';
import { logout } from '@/utils/logout';

interface Props {
  classNames?: string,
}

export const UserPage: React.FC<Props> = ({ classNames }) => {
  const className = cn(
    'my-page',
    classNames
  )

  return (
    <div className={className}>
      <NavigationTitle url='/frontend'>
        Мій кабінет
      </NavigationTitle>
      <hr className="admin-page__hr hr" />
      
      <Button
        callback={logout}
      >
        Вийти з особистого кабінету
      </Button>
    </div>
  );
};

