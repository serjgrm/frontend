import {FC} from 'react';
import './MainPage.scss';
import { HeroSection } from '@/sections/HeroSection/HeroSection';
import { SupportSection } from '@/sections/SupportSection';
import { ReportSection } from '@/sections/ReportSection';
import { UkraineSection } from '@/sections/UkraineSection';
import { InstructionSection } from '@/sections/InstructionSection';
import { TopVolunteersSection } from '@/sections/TopVolunteersSection';

interface Props {
}

export const MainPage: FC<Props> = () => {
  return (
    <div className="container">
      <HeroSection />
      <SupportSection />
      <ReportSection />
      <UkraineSection />
      <InstructionSection />
      <TopVolunteersSection />
    </div>
  );
}
