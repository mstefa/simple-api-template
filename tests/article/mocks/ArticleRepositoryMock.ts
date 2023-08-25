import { Article } from '../../../src/article/domain/Article';
import { ArticleRepository } from '../../../src/article/domain/ArticleRepository';
import { Nullable } from '../../../src/shared/domain/Nullable';
import { Email } from '../../../src/shared/domain/value-objects/Email';
import { Uuid } from '../../../src/shared/domain/value-objects/Uuid';
import { ArticleMother } from '../unit/ArticleMother';
export class ArticleRepositoryMock implements ArticleRepository {

  private mockSave = jest.fn();

  async save(user: Article): Promise<void> {
    this.mockSave(user);
  }

  search(id: Uuid): Promise<Nullable<Article>> {
    throw new Error('Method not implemented.');
  }

  searchByEmail(email: Email): Promise<Nullable<Article>> {
    const mockArticle = ArticleMother.givenEmail(email);
    return Promise.resolve(mockArticle);
  }


  assertLastSavedArticleIs(expected: Article): void {
    const mock = this.mockSave.mock;
    const lastSavedArticle = mock.calls[mock.calls.length - 1][0] as Article;
    expect(lastSavedArticle).toBeInstanceOf(Article);
    expect(lastSavedArticle.id).toEqual(expected.id);
  }

}
