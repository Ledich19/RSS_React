import React, { useState, useEffect } from 'react';
import s from './FullCard.module.scss';
import { useParams } from 'react-router-dom';
import booksService from '../../services/books';
import { GoogleBook } from 'app/types';
import InfoBit from './InfoBit/InfoBit';
import InfoBitBoolean from './InfoBitBoolean/InfoBitBoolean';
import InfoBitList from './InfoBitList/InfoBitList';
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
            <InfoBit label="Pages" info={pageCount} />
            <InfoBit label="Language" info={language} />
            <InfoBit
              label="Published"
              info={publishedDate ? new Date(publishedDate).toLocaleDateString('ru-RU') : 'unknown'}
            />
            <InfoBit label="Publisher" info={publisher} />
            <InfoBitBoolean label="readingMode" info={readingModes.image} options={['yes', 'no']} />
            <InfoBit label="PrintType" info={printType} />
            <InfoBitList label="Categories" list={categories} />
            <InfoBit label="Saleability" info={saleability} />
            <InfoBitBoolean label="Is Ebook" info={isEbook} options={['yes', 'no']} />
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
