import React from 'react';
import { InfoData } from 'app/types';
import s from './Card.module.scss';

interface Props {
  infoData: InfoData;
}

const Card = ({ infoData }: Props) => {
  const { title, pageCount, publishedDate, thumbnailUrl, status, authors, categories } = infoData;
  return (
    <div className={s.card}>
      <div>
        <h2 className={s.title}>{title}</h2>
        <div className={s.img}>
          <img src={thumbnailUrl} alt={title} />
        </div>
      </div>
      <div className={s.info}>
        <div className={s.authors}>{authors.join(', ')}</div>
        <div className={s.pages}>
          <span className={s.textBold}>Pages: </span>
          {pageCount}
        </div>
        <div className={s.status}>
          <span className={s.textBold}>Status: </span>
          {status}
        </div>
        <div className={s.date}>
          <span className={s.textBold}>Published:</span>
          {new Date(publishedDate.$date).toLocaleDateString('ru-RU')}
        </div>
        <div className={s.categories}>
          <span className={s.textBold}>Categories:&nbsp;</span>
          <span className={s.categoriesList}>{categories.join(', ')}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
