import s from './InputAnother.module.scss';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  required?: boolean;
  label: string;
  error?: string;
  type: string;
  register: UseFormRegisterReturn;
}

const InputAnother = ({ required, label, error, type, register }: Props) => {
  return (
    <label className={s.label} htmlFor={register.name}>
      {error && <div className={s.error}>{error}</div>}
      <span>
        {label}:{required && <span className={s.required}>*</span>}
      </span>
      <input id={register.name} {...register} className={s.input} type={type} />
    </label>
  );
};

export default InputAnother;
