import React, { Component, createRef, RefObject } from 'react';
import s from './BookForm.module.scss';
import Categories from './Categories/Categories';
import DownloadImg from './DownloadImg/DownloadImg';
import InputAnother from './InputAnother/InputAnother';
import InputText from './InputText/InputText';
import SelectComponent from './SelectComponent/SelectComponent';
import TextareaComponent from './TextareaComponent/TextareaComponent';
import { InfoData } from 'app/types';

interface Props {
  addBook: (value: InfoData) => void;
}
interface State {
  categories: string[];
  options: string[];
  authorsError: string;
  categoriesError: string;
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

  private checkAuthors = (authors: string[]) => {
    const check = authors.every((name) => {
      const words = name.split(' ');
      return words.every((word) => word.charAt(0) === word.charAt(0).toUpperCase());
    });
    if (check) {
      this.setState({ authorsError: '' });
    } else {
      this.setState({ authorsError: 'should start with big letter' });
    }
    return check;
  };
  private checkCategories = (categories: string[]) => {
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
  validationForm = (book: InfoData) => {
    const { authors, categories } = book;
    const authorsResult = this.checkAuthors(authors);
    const categoriesResult = this.checkCategories(categories);
    if (!authorsResult || !categoriesResult) return false;
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
      authors: this.authorsRef.current?.value.split(',') || [],
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

    this.props.addBook(newBook);
    (e.target as HTMLFormElement).reset();
  };

  render() {
    return (
      <form onSubmit={this.handleAddBook} className={s.form}>
        <InputText required={true} refLink={this.titleRef} name="title" label="Title" />
        <InputText refLink={this.isbnRef} name="isbn" label="isbn" />
        <InputAnother
          required={true}
          refLink={this.pageCountRef}
          name="pageCount"
          label="pageCount"
          type="number"
        />
        <InputText
          required={true}
          error={this.state.authorsError}
          refLink={this.authorsRef}
          name="authors"
          label="authors"
        />
        <TextareaComponent
          required={true}
          refLink={this.shortDescriptionRef}
          name="shortDescription"
          rows={3}
          label="shortDescription"
        />
        <TextareaComponent
          refLink={this.longDescriptionRef}
          name="longDescription"
          rows={5}
          label="longDescription"
        />
        <InputAnother
          refLink={this.publishedDateRef}
          name="publishedDate"
          label="publishedDate"
          type="date"
        />
        <DownloadImg refLink={this.downloadImgRef} />
        <SelectComponent options={this.state.options} refLink={this.statusRef} name="status" />
        <Categories
          options={this.state.categories}
          error={this.state.categoriesError}
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
