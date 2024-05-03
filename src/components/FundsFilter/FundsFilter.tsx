import './FundsFilter.scss';
import cn from 'classnames';
import { FilterFunds } from '@/types/FilterFunds';
import { FilterButton } from '@/ui/FilterButton';
import { useAppDispatch } from '@/store/hooks';
import { setFundsFilterState } from '@/store/slices/fundsFilterSlice';

interface Props {
  classNames?: string;
}

export const FundsFilter: React.FC<Props> = ({ classNames }) => {  
  const dispatch = useAppDispatch();

  const className = cn(
    classNames,
    'funds-filter'
  )

  return (
    <div className={className}>
      <FilterButton 
        callback={() => dispatch(setFundsFilterState(FilterFunds.ALL))}
        classNames='funds-filter__button'
      >
        Усі збори
      </FilterButton>
      <FilterButton 
        callback={() => dispatch(setFundsFilterState(FilterFunds.DRONES))}
        classNames='funds-filter__button'
      >
        Дрони
      </FilterButton>
      <FilterButton 
        callback={() => dispatch(setFundsFilterState(FilterFunds.CARS_REPAIR))}
        classNames='funds-filter__button'
      >
        Ремонт авто
      </FilterButton>
      <FilterButton 
        callback={() => dispatch(setFundsFilterState(FilterFunds.INJURED_SUPPORT))}
        classNames='funds-filter__button'
      >
        Допомога пораненим
      </FilterButton>
      <FilterButton 
        callback={() => dispatch(setFundsFilterState(FilterFunds.CHILDREN_SUPPORT))}
        classNames='funds-filter__button'
      >
        Допомога дітям
      </FilterButton>
      <FilterButton 
        callback={() => dispatch(setFundsFilterState(FilterFunds.ANIMALS_SUPPORT))}
        classNames='funds-filter__button'
      >
        Допомога тваринам
      </FilterButton>
      <FilterButton 
        callback={() => dispatch(setFundsFilterState(FilterFunds.ANOTHER))}
        classNames='funds-filter__button'
      >
        Інше
      </FilterButton>
    </div>
  );
};
