import s from './InfoBitList.module.scss';

interface Props {
  list?: string[];
  label: string;
}
const InfoBitList = ({ label, list }: Props) => {
  return (
    <div className={s.block}>
      <span className={s.textBold}>{label}:</span>
      <span data-testid="InfoBitList-testId" className={s.list}>
        {list ? list.join(', ') : ''}
      </span>
    </div>
  );
};

export default InfoBitList;
