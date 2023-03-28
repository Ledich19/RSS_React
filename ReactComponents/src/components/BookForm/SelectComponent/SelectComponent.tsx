import { UseFormRegisterReturn } from 'react-hook-form';
import s from './SelectComponent.module.scss';

interface Props {
  register: UseFormRegisterReturn;
  options: string[];
  label: string;
}

const SelectComponent = ({ register, options, label }: Props) => {
  return (
    <label className={s.label} htmlFor={label}>
      {label}
      <select {...register} data-testid="SelectComponent-testId" id={label}>
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
