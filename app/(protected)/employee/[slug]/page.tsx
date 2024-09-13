import { IDynamicPage } from '@/typings';
import { EmployeePage } from '@/components/containers/employee/EmployeePage';

export default function Employee({ params }: IDynamicPage) {
  const { slug } = params;
  return <EmployeePage slug={slug} />;
}
