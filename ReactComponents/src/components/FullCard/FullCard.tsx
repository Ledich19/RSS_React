import React, { useState, useEffect, useRef } from 'react';
import s from './FullCard.module.scss';
import InfoBit from './InfoBit/InfoBit';
import InfoBitBoolean from './InfoBitBoolean/InfoBitBoolean';
import InfoBitList from './InfoBitList/InfoBitList';
import booksService from '../../services/books';
import { useNavigate, useParams } from 'react-router-dom';
import { GoogleBook } from 'app/types';
import { Link } from 'react-router-dom';
import { useAppDispatch } from './../../app/hooks';
import { setError, setIslLoad } from './../../reducers/searchReducer';

const FullCard = () => {
  const [book, setBook] = useState<GoogleBook>();
  const dispatch = useAppDispatch();
  const blurRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    (async () => {
      try {
        dispatch(setIslLoad(true));
        const data = await booksService.getById(id as string);
        setBook(data);
        dispatch(setIslLoad(false));
      } catch (error) {
        dispatch(setIslLoad(false));
        if (error instanceof Error) {
          dispatch(setError(error.message));
        }
      }
    })();
  }, [dispatch, id]);

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

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === blurRef.current) {
      navigate('/app');
    }
  };

  return (
    <div data-testid="test-blur" ref={blurRef} onClick={handleClose} className={s.blur}>
      <div className={s.card}>
        <Link key={book.id} to={`/app`}>
          <div className={s.close}>&otimes;</div>
        </Link>
        <div className={s.wrapper}>
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
                info={
                  publishedDate ? new Date(publishedDate).toLocaleDateString('ru-RU') : 'unknown'
                }
              />
              <InfoBit label="Publisher" info={publisher} />
              <InfoBitBoolean
                label="readingMode"
                info={readingModes.image}
                options={['yes', 'no']}
              />
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
            <div dangerouslySetInnerHTML={{ __html: description ? description : '' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullCard;
