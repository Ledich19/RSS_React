import { UseFormRegisterReturn } from 'react-hook-form';
import s from './SelectComponent.module.scss';

interface Props {
  register: UseFormRegisterReturn;
  options: string[];
  label: string;
  error?: string;
}

const SelectComponent = ({ register, options, label, error }: Props) => {
  return (
    <label className={s.label} htmlFor={label}>
      {error && <div className={s.error}>{error}</div>}
      {label}
      <select {...register} data-testid="SelectComponent-testId" id={label}>
        <option value="" disabled selected>
          {label}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SelectComponent;
