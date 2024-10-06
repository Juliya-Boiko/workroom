interface Props {
  value: number | undefined;
  total: number;
}

export const Progress = ({ value, total }: Props) => {
  const progress = value ? value : 0;

  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const percent = Math.min((progress / total) * 100, 100);
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg width="40" height="40" viewBox="0 0 40 40">
      <circle
        cx="20"
        cy="20"
        r={radius}
        stroke="#7D859233"
        strokeWidth="2"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset="0"
      />

      <circle
        cx="20"
        cy="20"
        r={radius}
        stroke="#3F8CFF"
        strokeWidth="4"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform="rotate(-90 20 20)"
        strokeLinecap="round"
      />
    </svg>
  );
};
