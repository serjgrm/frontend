import { FundsFilter } from '@/components/FundsFilter';
import './FundsPage.scss';
import { PaginationList } from '@/components/PaginationList';
import { FundsList } from '@/components/FundsList';

interface Props {

}

export const FundsPage: React.FC<Props> = () => {
  const limit = 3;
  return (
    <div className='funds-page'>
      <h2 className='funds-page__title'>
        Усі збори
      </h2>
      <hr className="funds-page__hr hr" />
      <FundsFilter classNames='funds-page__filter'/>
      <FundsList classNames='funds-page__list' limit={limit} />
      <PaginationList classNames='funds-page__pagination-list' limit={limit} />
    </div>
  );
};

