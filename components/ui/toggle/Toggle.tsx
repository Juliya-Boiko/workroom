interface Props {
  value: boolean;
  onChange: () => void;
}
export const Toggle = ({ value, onChange }: Props) => {
  return <label htmlFor="">Toggle</label>;
};
