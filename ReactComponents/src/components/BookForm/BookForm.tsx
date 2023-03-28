import React, { useState, useRef } from 'react';
import { InfoData } from 'app/types';
import s from './BookForm.module.scss';
import Categories from './Categories/Categories';
import DownloadImg from './DownloadImg/DownloadImg';
import InputAnother from './InputAnother/InputAnother';
import InputText from './InputText/InputText';
import SelectComponent from './SelectComponent/SelectComponent';
import TextareaComponent from './TextareaComponent/TextareaComponent';
import { useForm, Controller } from 'react-hook-form';

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
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onSubmit',
  });

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

  const handleAddBook = handleSubmit(async (data) => {
    console.log('data', data);

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
          required: 'Published date is required',
        })}
      />
      <DownloadImg register={register('thumbnailUrl')} />
      <SelectComponent label="Status" options={options} register={register('status')} />

      <Controller
        name="categories"
        control={control}
        render={({ field: { onChange, value = [] } }) => (
          <Categories onChange={onChange} categories={categories} value={value} />
        )}
      />

      <button className={s.submit} type="submit">
        add book
      </button>
    </form>
  );
};
export default BookForm;
