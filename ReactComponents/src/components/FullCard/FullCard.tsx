import React, { useState, useEffect } from 'react';
import s from './FullCard.module.scss';
import { useParams } from 'react-router-dom';
import booksService from '../../services/books';
import { GoogleBook } from 'app/types';
const FullCard = () => {
  const [book, setBook] = useState<GoogleBook>();
  const [islLoad, setIslLoad] = useState<boolean>(false);
  const id = useParams().id;
  useEffect(() => {
    (async () => {
      try {
        setIslLoad(true);
        const data = await booksService.getById(id as string);
        setBook(data);
        setIslLoad(false);
      } catch (error) {
        if (error instanceof Error) {
        }
      }
    })();
  }, [id]);

  if (!book) {
    return null;
  }
  const {
    authors,
    language,
    pageCount,
    publishedDate,
    title,
    imageLinks,
    publisher,
    description,
    readingModes,
    printType,
    categories,
    averageRating,
    ratingsCount,
    previewLink,
  } = book.volumeInfo;
  const { saleability, isEbook } = book.saleInfo;

  return (
    <div className={s.blur}>
      <div className={s.card}>
        <h2 className={s.title}>{title}</h2>

        <div className={s.box}>
          <div className={s.thumbnail}>
            <img src={imageLinks ? imageLinks.thumbnail : ''} alt={title} />
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
            <div className={s.publisher}>
              <span className={s.textBold}>Publisher:</span>
              {publisher}
            </div>

            <div className={s.images}>
              <span className={s.textBold}>Images:</span>
              {readingModes.image ? 'yes' : 'no'}
            </div>
            <div className={s.printType}>
              <span className={s.textBold}>PrintType:</span>
              {printType}
            </div>
            <div className={s.categories}>
              <span className={s.textBold}>Categories:</span>
              <span className={s.categoriesList}>{categories ? categories.join(', ') : ''}</span>
            </div>

            <div className={s.saleability}>
              <span className={s.textBold}>Saleability:</span>
              {saleability}
            </div>

            <div className={s.isEbook}>
              <span className={s.textBold}>Is Ebook:</span>
              {isEbook ? 'yes' : 'no'}
            </div>
          </div>
        </div>
        <div className={s.ratingBlock}>
          <div className={s.previewLink}>
            <span className={s.textBold}>PreviewLink:</span>
            <a href={previewLink}> read demo book </a>
          </div>

          <div className={s.averageRating}>
            <span className={s.textBold}>Rating:</span>
            {averageRating}
            <span className={s.textBold}>RatingsCount:</span>
            {ratingsCount}
          </div>
        </div>
        <div className={s.description}>
          <span className={s.textBold}>Description:</span>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </div>
  );
};

export default FullCard;
