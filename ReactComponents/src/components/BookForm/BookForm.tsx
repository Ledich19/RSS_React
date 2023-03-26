import React, { Component, createRef, RefObject } from 'react';
import { InfoData } from 'app/types';
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
interface State {
  categories: string[];
  options: string[];
  authorsError: string;
  categoriesError: string;
  titleError: string;
  pagesError: string;
  shortDescriptionError: string;
}

export default class BookForm extends Component<Props, State> {
  private titleRef: RefObject<HTMLInputElement>;

  private isbnRef: RefObject<HTMLInputElement>;

  private pageCountRef: RefObject<HTMLInputElement>;

  private authorsRef: RefObject<HTMLInputElement>;

  private publishedDateRef: RefObject<HTMLInputElement>;

  private checkboxRefs: RefObject<HTMLInputElement>[];

  private statusRef: RefObject<HTMLSelectElement>;

  private shortDescriptionRef: RefObject<HTMLTextAreaElement>;

  private longDescriptionRef: RefObject<HTMLTextAreaElement>;

  private downloadImgRef: RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);
    this.titleRef = createRef();
    this.isbnRef = createRef();
    this.pageCountRef = createRef();
    this.authorsRef = createRef();
    this.shortDescriptionRef = createRef();
    this.longDescriptionRef = createRef();
    this.publishedDateRef = createRef();
    this.statusRef = createRef();
    this.downloadImgRef = createRef();
    this.checkboxRefs = Array(10)
      .fill('')
      .map(() => React.createRef());
    this.state = {
      categories: [
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
      ],
      options: ['PUBLISH', 'IN PROGRESS', 'BACKORDER', 'OUT OF STOCK', 'UNPUBLISHED'],
      authorsError: '',
      categoriesError: '',
      titleError: '',
      pagesError: '',
      shortDescriptionError: '',
    };
  }

  readImageFile(file: File): Promise<string> {
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

  private validateShortDescription = (description: string | undefined) => {
    if (!description) {
      this.setState({ shortDescriptionError: `title should't be empty` });
      return;
    }
    if (description.length < 3) {
      this.setState({ shortDescriptionError: `title should't be less then 20` });
      return;
    }
    this.setState({ shortDescriptionError: '' });
    return true;
  };

  private validateTitle = (title: string): boolean => {
    if (!title) {
      this.setState({ titleError: `title should't be empty` });
      return false;
    }

    if (title.length < 3) {
      this.setState({ titleError: `title should't be less then 3` });
      return false;
    }
    this.setState({ titleError: '' });
    return true;
  };

  private validatePages = (title: number): boolean => {
    if (!title) {
      this.setState({ pagesError: `title should't be empty` });
      return false;
    }
    this.setState({ pagesError: '' });
    return true;
  };

  private validateAuthors = (authors: string[]): boolean => {
    const check = authors.every((name) => {
      const words = name.split(' ');
      return words.every((word) => word.charAt(0) === word.charAt(0).toUpperCase());
    });
    if (!authors[0] && authors.length === 1) {
      this.setState({ authorsError: `authors should't be empty` });
      return false;
    }
    if (!check) {
      this.setState({ authorsError: 'should start with big letter' });
      return false;
    }
    this.setState({ authorsError: '' });
    return true;
  };

  private validateCategories = (categories: string[]): boolean => {
    let check;
    if (categories.length < 1) {
      this.setState({ categoriesError: 'at least one checkbox must be selected' });
      check = false;
    } else {
      this.setState({ categoriesError: '' });
      check = true;
    }
    return check;
  };

  validationForm = (book: InfoData): boolean => {
    const { authors, categories, title, pageCount, shortDescription } = book;
    const authorsResult = this.validateAuthors(authors);
    const categoriesResult = this.validateCategories(categories);
    const titleResult = this.validateTitle(title);
    const pagesResult = this.validatePages(pageCount);
    const shortDescriptionResult = this.validateShortDescription(shortDescription);
    if (
      !authorsResult ||
      !categoriesResult ||
      !titleResult ||
      !pagesResult ||
      !shortDescriptionResult
    )
      return false;
    return true;
  };

  handleAddBook = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const categoriesValues = this.checkboxRefs
      .filter((ref) => ref.current?.checked)
      .map((ref) => ref.current?.value || '');

    const files = this.downloadImgRef.current?.files;
    let imageUrl = '';
    if (files && files[0]) {
      imageUrl = await this.readImageFile(files[0]);
    }

    const newBook = {
      title: this.titleRef.current?.value || '',
      isbn: this.isbnRef.current?.value || '',
      pageCount: parseInt(this.pageCountRef.current?.value || '0', 10),
      authors: this.authorsRef.current?.value.split(',').map((s) => s.trim()) || [],
      shortDescription: this.shortDescriptionRef.current?.value || '',
      longDescription: this.longDescriptionRef.current?.value || '',
      publishedDate: { $date: this.publishedDateRef.current?.value || '' },
      thumbnailUrl: imageUrl || '',
      status: this.statusRef.current?.value || '',
      categories: categoriesValues || [],
    };

    if (!this.validationForm(newBook)) {
      return;
    }
    const { addBook } = this.props;
    addBook(newBook);
    (e.target as HTMLFormElement).reset();
  };

  render() {
    const {
      titleError,
      pagesError,
      authorsError,
      shortDescriptionError,
      options,
      categories,
      categoriesError,
    } = this.state;

    return (
      <form data-testid="BookForm-testId" onSubmit={this.handleAddBook} className={s.form}>
        <InputText error={titleError} required refLink={this.titleRef} name="title" label="Title" />
        <InputText refLink={this.isbnRef} name="isbn" label="isbn" />
        <InputAnother
          error={pagesError}
          required
          refLink={this.pageCountRef}
          name="pageCount"
          label="Page count"
          type="number"
        />
        <InputText
          required
          error={authorsError}
          refLink={this.authorsRef}
          name="authors"
          label="Authors"
        />
        <TextareaComponent
          error={shortDescriptionError}
          required
          refLink={this.shortDescriptionRef}
          name="shortDescription"
          rows={3}
          label="Short description"
        />
        <TextareaComponent
          refLink={this.longDescriptionRef}
          name="LongDescription"
          rows={5}
          label="long description"
        />
        <InputAnother
          refLink={this.publishedDateRef}
          name="publishedDate"
          label="Published date"
          type="date"
        />
        <DownloadImg refLink={this.downloadImgRef} />
        <SelectComponent label="Status" options={options} refLink={this.statusRef} name="status" />
        <Categories
          options={categories}
          error={categoriesError}
          refsLinks={this.checkboxRefs}
          name="categories"
        />
        <button className={s.submit} type="submit">
          add book
        </button>
      </form>
    );
  }
}
