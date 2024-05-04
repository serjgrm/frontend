import './FundsFilter.scss';
import cn from 'classnames';
import { FilterFunds } from '@/types/FilterFunds';
import { FilterButton } from '@/ui/FilterButton';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setFundsFilterState } from '@/store/slices/fundsFilterSlice';

interface Props {
  classNames?: string;
}

export const FundsFilter: React.FC<Props> = ({ classNames }) => {  
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector(data => data.fundsFilter);

  const className = cn(
    classNames,
    'funds-filter'
  )
  
  const handleFilterChange = (targetFilter: FilterFunds) => {
    if (targetFilter === currentFilter) {
      dispatch(setFundsFilterState(FilterFunds.ALL));
    } else {
      dispatch(setFundsFilterState(targetFilter));
    }
  };

  return (
    <div className={className}>
      <FilterButton
        currentFilter={currentFilter}
        buttonFilter={FilterFunds.DRONES}
        callback={() => handleFilterChange(FilterFunds.DRONES)}
        classNames='funds-filter__button'
      >
        Дрони
      </FilterButton>
      <FilterButton
        currentFilter={currentFilter}
        buttonFilter={FilterFunds.CARS_REPAIR}
        callback={() => handleFilterChange(FilterFunds.CARS_REPAIR)}
        classNames='funds-filter__button'
      >
        Ремонт авто
      </FilterButton>
      <FilterButton
        currentFilter={currentFilter}
        buttonFilter={FilterFunds.INJURED_SUPPORT}
        callback={() => handleFilterChange(FilterFunds.INJURED_SUPPORT)}
        classNames='funds-filter__button'
      >
        Допомога пораненим
      </FilterButton>
      <FilterButton 
        currentFilter={currentFilter}
        buttonFilter={FilterFunds.CHILDREN_SUPPORT}
        callback={() => handleFilterChange(FilterFunds.CHILDREN_SUPPORT)}
        classNames='funds-filter__button'
      >
        Допомога дітям
      </FilterButton>
      <FilterButton
        currentFilter={currentFilter}
        buttonFilter={FilterFunds.ANIMALS_SUPPORT}
        callback={() => handleFilterChange(FilterFunds.ANIMALS_SUPPORT)}
        classNames='funds-filter__button'
      >
        Допомога тваринам
      </FilterButton>
      <FilterButton
        currentFilter={currentFilter}
        buttonFilter={FilterFunds.ANOTHER} 
        callback={() => handleFilterChange(FilterFunds.ANOTHER)}
        classNames='funds-filter__button'
      >
        Інше
      </FilterButton>
    </div>
  );
};
