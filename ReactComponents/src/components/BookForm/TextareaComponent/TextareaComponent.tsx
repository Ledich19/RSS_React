import { UseFormRegisterReturn } from 'react-hook-form';
import s from './TextareaComponent.module.scss';

interface Props {
  required?: boolean;
  label: string;
  error?: string;
  register: UseFormRegisterReturn;
  rows: number;
}

const TextareaComponent = ({ required, label, error, register, rows }: Props) => {
  return (
    <label className={s.label} htmlFor={label}>
      {error && <div className={s.error}>{error}</div>}
      {label} : {required && <span className={s.required}>*</span>}
      <textarea {...register} id={label} rows={rows} className={s.textarea} />
    </label>
  );
};

TextareaComponent.defaultProps = {
  required: false,
  error: '',
};

export default TextareaComponent;
