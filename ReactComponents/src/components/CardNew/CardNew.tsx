import React from 'react';
import { GoogleBook } from 'app/types';
import s from './CardNew.module.scss';

interface Props {
  infoData: GoogleBook;
}

const CardNew = ({ infoData }: Props) => {
  const { authors, language, pageCount, publishedDate, title, imageLinks } = infoData.volumeInfo;

  return (
    <div className={s.card}>
      <div>
        <h2 className={s.title}>{title}</h2>
        <div className={s.img}>
          <img src={imageLinks ? imageLinks.smallThumbnail : ''} alt={title} />
        </div>
      </div>
      <div className={s.info}>
        <div className={s.authors}>{authors ? authors.join(', ') : ''}</div>
        <div className={s.pages}>
          <span className={s.textBold}>Pages: </span>
          {pageCount}
        </div>
        <div className={s.language}>
          <span className={s.textBold}>Language: </span>
          {language}
        </div>
        <div className={s.date}>
          <span className={s.textBold}>Published:</span>
          {publishedDate ? new Date(publishedDate).toLocaleDateString('ru-RU') : 'unknown'}
        </div>
      </div>
    </div>
  );
};

export default CardNew;
