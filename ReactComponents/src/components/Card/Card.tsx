import React, { Component } from 'react';
import s from './Card.module.css';

interface Props {
  infoData: {
    title: string;
    isbn: string;
    pageCount: number;
    publishedDate: { $date: string };
    thumbnailUrl: string;
    shortDescription: string;
    longDescription: string;
    status: string;
    authors: string[];
    categories: string[];
  };
}
interface State {
  value: string;
}

export default class Card extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {
      title,
      isbn,
      pageCount,
      publishedDate,
      thumbnailUrl,
      shortDescription,
      longDescription,
      status,
      authors,
      categories,
    } = this.props.infoData;
    return (
      <div className={s.card}>
        <h2 className={s.title}>{title}</h2>
        <div className={s.box}>
          <div className={s.img}>
            <img src={thumbnailUrl} alt={title} />
          </div>
          <div className={s.info}>
            <div className={s.pages}>
              <span className={s.textBold}>Pages: </span>
              {pageCount}
            </div>
            <div className={s.status}>
              <span className={s.textBold}>Status: </span>
              {status}
            </div>
            <div className={s.date}>
              <span className={s.textBold}>Published:&nbsp;</span>
              {new Date(publishedDate.$date).toLocaleDateString('ru-RU')}
            </div>
            <div className={s.categories}>
              <span className={s.textBold}>Categories: </span>
              <span className={s.categoriesList}>
              {categories.join(', ')}
              </span>
            </div>
          </div>
        </div>
        <div className={s.authors}>{authors.join(', ')}</div>
        <div className={s.shortDescription}>{shortDescription}</div>
        {/* <p>Long description: {longDescription}</p> */}
      </div>
    );
  }
}
