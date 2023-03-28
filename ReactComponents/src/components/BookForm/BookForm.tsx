import React, { useState, useRef } from 'react';
import { InfoData } from 'app/types';
import s from './BookForm.module.scss';
import Categories from './Categories/Categories';
import DownloadImg from './DownloadImg/DownloadImg';
import InputAnother from './InputAnother/InputAnother';
import InputText from './InputText/InputText';
import SelectComponent from './SelectComponent/SelectComponent';
import TextareaComponent from './TextareaComponent/TextareaComponent';
import { useForm } from 'react-hook-form';

interface Props {
  addBook: (value: InfoData) => void;
}
interface State {
  categories: string[];
  options: string[];
  authorsError: string;
  categoriesError: string;
  titleError: string;
  pagesError: string;
  shortDescriptionError: string;
}

const BookForm = ({ addBook }: Props) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const titleRef = useRef<HTMLInputElement>(null);
  const isbnRef = useRef<HTMLInputElement>(null);
  const pageCountRef = useRef<HTMLInputElement>(null);
  const authorsRef = useRef<HTMLInputElement>(null);
  const shortDescriptionRef = useRef<HTMLTextAreaElement>(null);
  const longDescriptionRef = useRef<HTMLTextAreaElement>(null);
  const publishedDateRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLSelectElement>(null);
  const downloadImgRef = useRef<HTMLInputElement>(null);
  // const checkboxRefs = Array(10)
  //   .fill('')
  //   .map(() => useRef<HTMLInputElement>(null));

  const [authorsError, setAuthorsError] = useState('');
  const [categoriesError, setCategoriesError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [pagesError, setPagesError] = useState('');
  const [shortDescriptionError, setShortDescriptionError] = useState('');

  const categories = [
    'open Source',
    'mobile',
    'web',
    'software',
    'internet',
    'microsoft',
    'programming',
    'business',
    'Graph',
    'server',
  ];
  const options = ['PUBLISH', 'IN PROGRESS', 'BACKORDER', 'OUT OF STOCK', 'UNPUBLISHED'];

  function readImageFile(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        const imageUrl = reader.result as string;
        resolve(imageUrl);
      });
      reader.readAsDataURL(file);
      reader.addEventListener('error', () => {
        reject('Failed to load image');
      });
    });
  }

  const validateShortDescription = (description: string | undefined) => {
    if (!description) {
      setShortDescriptionError(`title should't be empty`);
      return;
    }
    if (description.length < 3) {
      setShortDescriptionError(`title should't be less then 20`);
      return;
    }
    setShortDescriptionError('');
    return true;
  };

  const validateTitle = (title: string): boolean => {
    if (!title) {
      setTitleError(`title should't be empty`);
      return false;
    }

    if (title.length < 3) {
      setTitleError(`title should't be less then 3`);
      return false;
    }
    setTitleError('');
    return true;
  };

  const validatePages = (title: number): boolean => {
    if (!title) {
      setPagesError(`title should't be empty`);
      return false;
    }
    setPagesError('');
    return true;
  };

  const validateAuthors = (authors: string[]): boolean => {
    const check = authors.every((name) => {
      const words = name.split(' ');
      return words.every((word) => word.charAt(0) === word.charAt(0).toUpperCase());
    });
    if (!authors[0] && authors.length === 1) {
      setAuthorsError(`authors should't be empty`);
      return false;
    }
    if (!check) {
      setAuthorsError('should start with big letter');
      return false;
    }
    setAuthorsError('');
    return true;
  };

  // const validateCategories = (categories: string[]): boolean => {
  //   let check;
  //   if (categories.length < 1) {
  //     this.setState({ categoriesError: 'at least one checkbox must be selected' });
  //     check = false;
  //   } else {
  //     this.setState({ categoriesError: '' });
  //     check = true;
  //   }
  //   return check;
  // };

  const validationForm = (book: InfoData): boolean => {
    const { authors, categories, title, pageCount, shortDescription } = book;
    const authorsResult = validateAuthors(authors);
    //const categoriesResult = this.validateCategories(categories);
    const titleResult = validateTitle(title);
    const pagesResult = validatePages(pageCount);
    const shortDescriptionResult = validateShortDescription(shortDescription);
    if (
      !authorsResult ||
      //!categoriesResult ||
      !titleResult ||
      !pagesResult ||
      !shortDescriptionResult
    )
      return false;
    return true;
  };

  const handleAddBook = handleSubmit(async (data) => {
    console.log(data);

    // const categoriesValues = this.checkboxRefs
    //   .filter((ref) => ref.current?.checked)
    //   .map((ref) => ref.current?.value || '');

    const files = downloadImgRef.current?.files;
    let imageUrl = '';
    if (files && files[0]) {
      imageUrl = await readImageFile(files[0]);
    }

    const newBook = {
      title: titleRef.current?.value || '',
      isbn: isbnRef.current?.value || '',
      pageCount: parseInt(pageCountRef.current?.value || '0', 10),
      authors: authorsRef.current?.value.split(',').map((s) => s.trim()) || [],
      shortDescription: shortDescriptionRef.current?.value || '',
      longDescription: longDescriptionRef.current?.value || '',
      publishedDate: { $date: publishedDateRef.current?.value || '' },
      thumbnailUrl: imageUrl || '',
      status: statusRef.current?.value || '',
      categories: [],
      //categories: categoriesValues || [],
    };

    if (!validationForm(newBook)) {
      return;
    }
    addBook(newBook);
    //(e.target as HTMLFormElement).reset();
  });

  return (
    <form onSubmit={handleAddBook} data-testid="BookForm-testId" className={s.form}>
      <InputText error={titleError} required refLink={titleRef} name="title" label="Title" />
      <InputText refLink={isbnRef} name="isbn" label="isbn" />
      <InputAnother
        error={pagesError}
        required
        refLink={pageCountRef}
        name="pageCount"
        label="Page count"
        type="number"
      />
      <InputText
        required
        error={authorsError}
        refLink={authorsRef}
        name="authors"
        label="Authors"
      />
      <TextareaComponent
        error={shortDescriptionError}
        required
        refLink={shortDescriptionRef}
        name="shortDescription"
        rows={3}
        label="Short description"
      />
      <TextareaComponent
        refLink={longDescriptionRef}
        name="LongDescription"
        rows={5}
        label="long description"
      />
      <InputAnother
        refLink={publishedDateRef}
        name="publishedDate"
        label="Published date"
        type="date"
      />
      <DownloadImg refLink={downloadImgRef} />
      <SelectComponent label="Status" options={options} refLink={statusRef} name="status" />
      {/* <Categories
        options={categories}
        error={categoriesError}
        refsLinks={this.checkboxRefs}
        name="categories"
      /> */}
      <button className={s.submit} type="submit">
        add book
      </button>
    </form>
  );
};
export default BookForm;
