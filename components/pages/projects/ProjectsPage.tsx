import { Topping } from '@/components/topping/Topping';
import { AddProject } from '@/components/addProject/AddProject';

export const ProjectsPage = () => {
  return (
    <div>
      <Topping title="Projects">
        <AddProject />
      </Topping>
    </div>
  );
};
