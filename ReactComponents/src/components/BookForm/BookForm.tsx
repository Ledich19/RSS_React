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

export type FormData = {
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

const BookForm = ({ addBook }: Props) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onSubmit',
  });

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
    //const categoriesResult = this.validateCategories(categories);

    const shortDescriptionResult = validateShortDescription(shortDescription);
    if (
      //!categoriesResult ||
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

    // const files = downloadImgRef.current?.files;
    // let imageUrl = '';
    // if (files && files[0]) {
    //   imageUrl = await readImageFile(files[0]);
    // }

    // const newBook = {
    //   title: titleRef.current?.value || '',
    //   isbn: isbnRef.current?.value || '',
    //   pageCount: parseInt(pageCountRef.current?.value || '0', 10),
    //   authors: authorsRef.current?.value.split(',').map((s) => s.trim()) || [],
    //   shortDescription: shortDescriptionRef.current?.value || '',
    //   longDescription: longDescriptionRef.current?.value || '',
    //   publishedDate: { $date: publishedDateRef.current?.value || '' },
    //   thumbnailUrl: imageUrl || '',
    //   status: statusRef.current?.value || '',
    //   categories: [],
    //   //categories: categoriesValues || [],
    // };

    // if (!validationForm(newBook)) {
    //   return;
    // }
    // addBook(newBook);
    //(e.target as HTMLFormElement).reset();
  });
  const validateFirstLetter = (authors: string): string | boolean => {
    console.log(typeof authors);

    const isValid = authors.split(',').every((name) => {
      const words = name.split(' ');
      return words.every((word) => word.charAt(0) === word.charAt(0).toUpperCase());
    });
    return isValid || 'should start with big letter';
  };

  return (
    <form onSubmit={handleAddBook} data-testid="BookForm-testId" className={s.form}>
      <InputText
        required
        label="Title"
        register={register('title', {
          required: 'Title is required',
          minLength: { value: 3, message: "title should't be less then 3" },
        })}
        error={errors.title?.message}
      />
      <InputText label="isbn" register={register('isbn')} />
      <InputAnother
        required
        type="number"
        label="Page count"
        register={register('pageCount', {
          required: 'Page count is required',
        })}
        error={errors.pageCount?.message}
      />
      <InputText
        required
        label="Authors"
        register={register('authors', {
          required: 'Authors is required',
          pattern: {
            value: /^[A-Z][a-z]*(\s+[A-Z][a-z]*)*$/,
            message: 'should start with big letter',
          },
        })}
        error={errors.authors?.message}
      />
      <TextareaComponent
        required
        label="Short description"
        rows={3}
        register={register('shortDescription', {
          required: 'Short description is required',
        })}
        error={errors.shortDescription?.message}
      />
      <TextareaComponent rows={5} label="long description" register={register('longDescription')} />
      <InputAnother
        required
        type="date"
        label="Published date"
        register={register('publishedDate', {
          required: 'Page count is required',
        })}
      />
      <DownloadImg register={register('thumbnailUrl')} />
      {/* 
      <SelectComponent label="Status" options={options} refLink={statusRef} name="status" /> */}
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
