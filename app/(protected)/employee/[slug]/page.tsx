import { IDynamicPage } from '@/typings';
import { EmployeePage } from '@/components/pages/employee/EmployeePage';

export default function Employee({ params }: IDynamicPage) {
  const { slug } = params;
  return <EmployeePage slug={slug} />;
}
