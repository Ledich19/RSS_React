import s from './InfoBit.module.scss';

interface Props {
  label: string;
  info: string | number | undefined;
}

const InfoBit = ({ label, info }: Props) => {
  return (
    <div className={s.block}>
      <span className={s.textBold}>{label}: </span>
      {info}
    </div>
  );
};

export default InfoBit;
