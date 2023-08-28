import { InfoData } from 'app/types';
import { useForm, Controller } from 'react-hook-form';
import s from './BookForm.module.scss';
import Categories from './Categories/Categories';
import DownloadImg from './DownloadImg/DownloadImg';
import InputAnother from './InputAnother/InputAnother';
import InputText from './InputText/InputText';
import SelectComponent from './SelectComponent/SelectComponent';
import TextareaComponent from './TextareaComponent/TextareaComponent';

interface Props {
  addBook: (value: InfoData) => void;
}

export type FormData = {
  title: string;
  isbn?: string;
  pageCount: number;
  publishedDate: string;
  thumbnailUrl?: string;
  shortDescription?: string;
  longDescription?: string;
  status: string;
  authors: string;
  categories: string[];
};

const BookForm = ({ addBook }: Props) => {
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onSubmit',
  });

  const categories = [
    'Detective',
    'Thriller',
    'Romance',
    'Science fiction',
    'Fantasy',
    'Humorous literature',
    'Historical fiction',
    'Adventure',
    'War novels',
    "Children's literature",
    'Poetry',
    'Mystery',
    'Horror',
    'Psychological drama',
    'Biographies',
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
        reject(new Error('Failed to load image'));
      });
    });
  }

  const handleAddBook = handleSubmit(async (data) => {
    let imageUrl = '';
    if (typeof data.thumbnailUrl === 'string') {
      imageUrl = data.thumbnailUrl;
    }
    const files = data.thumbnailUrl;
    if (files && typeof files === 'object') {
      imageUrl = await readImageFile(files[0]);
    }
    const newBook = {
      ...data,
      authors: data.authors.split(',').map((author) => author.trim()),
      thumbnailUrl: imageUrl,
      publishedDate: { $date: data.publishedDate },
      categories: data.categories || [],
    };

    addBook(newBook);
    reset();
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
            value:
              /^([A-ZА-Я][a-zа-я]+(\s+[A-ZА-Я][a-zа-я]+)*)+(\s*,\s*([A-ZА-Я][a-zа-я]+(\s+[A-ZА-Я][a-zа-я]+)*))?$/,
            message: 'should start with one big letter',
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
          required: 'date is required',
        })}
        error={errors.publishedDate?.message}
      />
      <DownloadImg
        register={register('thumbnailUrl', {
          required: 'thumbnailUrl is required',
        })}
        error={errors.thumbnailUrl?.message}
      />
      <SelectComponent
        label="Status"
        options={options}
        register={register('status', {
          required: 'Status is required',
        })}
        error={errors.status?.message}
      />
      <Controller
        name="categories"
        control={control}
        rules={{ required: 'Please select at least one category' }}
        render={({ field: { onChange, value = [] } }) => (
          <Categories
            error={errors.categories?.message}
            onChange={onChange}
            categories={categories}
            value={value}
          />
        )}
      />

      <button className={s.submit} type="submit">
        add book
      </button>
    </form>
  );
};
export default BookForm;
