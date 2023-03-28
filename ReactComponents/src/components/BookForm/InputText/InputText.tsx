import { UseFormRegisterReturn } from 'react-hook-form';
import s from './InputText.module.scss';

interface Props {
  required?: boolean;
  label: string;
  error?: string;
  register: UseFormRegisterReturn;
}

const InputText = ({ required, error, register, label }: Props) => {
  return (
    <label className={s.label} htmlFor={register.name}>
      {error && <div className={s.error}>{error}</div>}
      {label} : {required && <span className={s.required}>*</span>}
      <input {...register} id={register.name} className={s.input} type="text" />
    </label>
  );
};
export default InputText;
