import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import s from './DownloadImg.module.scss';

interface Props {
  register: UseFormRegisterReturn;
  error?: string;
}

const DownloadImg = ({ register, error }: Props) => {
  const [addImgWay, setAddImgWay] = useState(true);

  const handleChoose = () => {
    setAddImgWay(!addImgWay);
  };

  return (
    <div data-testid="download-img-container" className={s.box}>
      {error && <div className={s.error}>{error}</div>}
      <div className={s.radioBox}>
        <label className={s.label} htmlFor="choose-url-img">
          url :
          <input
            id="choose-url-img"
            onChange={handleChoose}
            checked={addImgWay}
            className={s.input}
            name="download-img"
            type="radio"
          />
        </label>
        <label className={s.label} htmlFor="choose-file-img">
          file :
          <input
            id="choose-file-img"
            onChange={handleChoose}
            checked={!addImgWay}
            className={s.input}
            name="download-img"
            type="radio"
          />
        </label>
      </div>
      <div className={s.label}>
        thumbnailUrl :
        {addImgWay ? (
          <input data-testid="testid-thumbnailUrl" {...register} className={s.input} type="text" />
        ) : (
          <input {...register} className={s.input} type="file" />
        )}
      </div>
    </div>
  );
};
export default DownloadImg;
