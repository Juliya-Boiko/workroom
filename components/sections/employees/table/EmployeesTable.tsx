import { TabsSlide } from '@/components/ui';
import { viewEmployeesDataTypes } from '@/typings';

export const EmployeesTable = () => {
  return (
    <section>
      <TabsSlide options={viewEmployeesDataTypes} />
      <div>EmployeesTable</div>
    </section>
  );
};
