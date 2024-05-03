import { FundsFilter } from '@/components/FundsFilter';
import './FundsPage.scss';

interface Props {

}

export const FundsPage: React.FC<Props> = () => {
  return (
    <div className='funds-page'>
      <h2 className='funds-page__title'>
        Усі збори
      </h2>
      <hr className="funds-page__hr hr" />
      <FundsFilter classNames='funds-page__filter'/>
    </div>
  );
};
