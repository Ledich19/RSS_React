import React from 'react';
import s from './Card.module.css';

interface Props {
  infoData: {
    title: string;
    isbn?: string;
    pageCount: number;
    publishedDate: { $date: string };
    thumbnailUrl?: string;
    shortDescription?: string;
    longDescription?: string;
    status: string;
    authors: string[];
    categories: string[];
  };
}

class CardComponent extends React.PureComponent<Props> {
  render() {
    const { infoData } = this.props;
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
  }
}

export default CardComponent;
