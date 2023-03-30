import s from './Categories.module.scss';

interface Props {
  value: string[];
  categories: string[];
  onChange: ([]) => void;
  error?: string;
}

const Categories = ({ value, categories, onChange, error }: Props) => {
  return (
    <div data-testid="category-checkboxes" className={s.categories}>
      {error && <div className={s.error}>{error}</div>}
      {categories.map((option) => (
        <label key={option} className={s.label}>
          <input
            className={s.input}
            type="checkbox"
            name={`categories[${option}]`}
            value={option}
            onChange={(e) => {
              const checked = e.target.checked;
              onChange([...value.filter((v) => v !== option), ...(checked ? [option] : [])]);
            }}
            checked={value.includes(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Categories;
