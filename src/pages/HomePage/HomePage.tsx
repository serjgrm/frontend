import './HomePage.scss';
import cn from 'classnames';
import { FC, useEffect } from 'react';
import { HeroSection } from '@/sections/HeroSection/HeroSection';
import { FundsSection } from '@/sections/FundsSection';
import { ReportSection } from '@/sections/ReportSection';
import { UkraineSection } from '@/sections/UkraineSection';
import { InstructionSection } from '@/sections/InstructionSection';
import { TopVolunteersSection } from '@/sections/TopVolunteersSection';
import { useAppDispatch } from '@/store/hooks';
import { setMobileModalState } from '../../store/slices/mobileModalSlice'

interface Props {
  classNames?: string,
}

export const HomePage: FC<Props> = ( { classNames }) => {
  const className = cn(
    'home-page',
    classNames,
  )

  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(setMobileModalState(false))
  }, [])

  return (
    <div className={className}>
      <HeroSection classNames='home-page__hero' />
      <FundsSection classNames='home-page__funds' />
      <ReportSection classNames='home-page__reports'/>
      <UkraineSection classNames='home-page__ukraine'/>
      <InstructionSection classNames='home-page__instruction'/>
      <TopVolunteersSection classNames='home-page__top-volunteers' />
    </div>
  );
}
