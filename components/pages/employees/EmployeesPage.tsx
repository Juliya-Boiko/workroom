import { Topping } from '@/components/topping/Topping';
import { Modal } from '@/components/ui/modal/Modal';
import { AddEmployeeForm } from '@/components/forms/addEmployee/AddEmployeeForm';
import { EIconsSet } from '@/enums';
import { SvgHandler } from '@/components/SvgHandler';
import { BtnPrimary } from '@/components/ui/buttons/primary/BtnPrimary';

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
