import { Article } from '../../../src/article/domain/Article';
import { ArticleRepository } from '../../../src/article/domain/ArticleRepository';
import { Nullable } from '../../../src/shared/domain/Nullable';
import { Email } from '../../../src/shared/domain/value-objects/Email';
import { Uuid } from '../../../src/shared/domain/value-objects/Uuid';

export class ArticleRepositoryMock implements ArticleRepository {

  private mockSave = jest.fn();
  private mockSearch = jest.fn();
  private mockArticle: Nullable<Article> = null;

  async save(user: Article): Promise<void> {
    this.mockSave(user);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  search(id: Uuid): Promise<Nullable<Article>> {
    this.mockSearch(id);

    return Promise.resolve(this.mockArticle);
  }

  searchByEmail(email: Email): Promise<Nullable<Article>> {
    this.mockSearch(email);

    return Promise.resolve(this.mockArticle);
  }


  assertLastSavedArticleIs(expected: Article): void {
    const mock = this.mockSave.mock;
    const lastSavedArticle = mock.calls[mock.calls.length - 1][0] as Article;
    expect(lastSavedArticle).toBeInstanceOf(Article);
    expect(lastSavedArticle).toEqual(expected);
  }

  returnOnSearch(article: Article) {
    this.mockArticle = article;
  }

  assertSearch(id: Uuid) {
    expect(this.mockSearch).toHaveBeenCalledWith(id);
  }

}
