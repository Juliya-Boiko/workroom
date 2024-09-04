import { Topping } from '@/components/topping/Topping';
import { Modal, BtnPrimary } from '@/components/ui';
import { AddEmployeeForm } from '@/components/forms/addEmployee/AddEmployeeForm';
import { EIconsSet } from '@/enums';
import { SvgHandler } from '@/components/SvgHandler';

export const EmployeesPage = () => {
  return (
    <div>
      <Topping title="Employees">
        <Modal
          title="Add Employee"
          activator={
            <BtnPrimary>
              <SvgHandler icon={EIconsSet.Plus} />
              <span>Add Employee</span>
            </BtnPrimary>
          }
          content={<AddEmployeeForm />}
        />
      </Topping>
    </div>
  );
};
