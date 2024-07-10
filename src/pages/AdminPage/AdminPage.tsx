import { NavigationTitle } from '@/components/NavigationTitle';
import './AdminPage.scss';
import cn from 'classnames';
import { FilterButton } from '@/ui/FilterButton';
import { UserValidationList } from '@/components/UserValidationList/UserValidationList';
import { Button } from '@/ui/Button';
import { logout } from '@/utils/logout';
import { User } from '@/types/User';
import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { PaginationList } from '@/components/PaginationList';
import { getUsers } from '@/api/users';

interface Props {
  classNames?: string,
}

export const AdminPage: React.FC<Props> = ({ classNames }) => {
  const className = cn(
    'admin-page',
    classNames
  )
  const dispatch = useAppDispatch();

  const [limit, setLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0)
  const [usersPages, setUsersPages] = useState<User[][]>([]);
  const users = useAppSelector(users => users.usersData.users);

  useEffect(() => {
    const totalPages = Math.ceil((users.length) / limit);
    setTotalPages(totalPages);
    dispatch(getUsers());

    if (users !== undefined) {
      const pages = []

      for (let i = 0; i < users.length; i += limit) {
        pages.push(users.slice(i, i + limit));
      }

      setUsersPages(pages);
    }
  }, [users, dispatch, limit])

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      
      if (windowWidth <= 688) {
        setLimit(3);
      } else {
        setLimit(5);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const visibleUsers = useMemo(() => {
    return usersPages[currentPage - 1] || usersPages[0]
  },[currentPage, usersPages])

  return (
    <div className={className}>
      <NavigationTitle url='/frontend'>
        Адмін кабінет
      </NavigationTitle>
      <hr className="admin-page__hr hr" />
      <FilterButton
        classNames='admin-page__button filter-button--active'
      >
        Валідація волонтерів
      </FilterButton>
      {visibleUsers && <UserValidationList visibleUsers={visibleUsers} />}
      {totalPages > 1 && (<PaginationList
        classNames='admin-page__pagination-list' 
        limit={limit}
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />)}
      <Button
        callback={logout}
      >
        Вийти з особистого кабінету
      </Button>
    </div>
  );
};

