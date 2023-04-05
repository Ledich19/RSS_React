import s from './InfoBitBoolean.module.scss';

interface Props {
  label: string;
  info: boolean | undefined;
  options: [string, string];
}

const InfoBitBoolean = ({ label, info, options }: Props) => {
  return (
    <div className={s.block}>
      <span className={s.textBold}>{label}:</span>
      {info ? options[0] : options[1]}
    </div>
  );
};

export default InfoBitBoolean;
