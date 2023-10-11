import { ArticleCreator } from '../../../src/article/application/ArticleCreator'
import { DateMother } from '../../shared/data-generator/DateMother';
import { WordsMother } from '../../shared/data-generator/WordsMother';
import { ArticleRepositoryMock } from '../mocks/ArticleRepositoryMock';
import { ArticleMother } from './ArticleMother';

let articleRepositoryMock: ArticleRepositoryMock;
let articleCreator: ArticleCreator;

beforeEach(() => {
  articleRepositoryMock = new ArticleRepositoryMock()
  articleCreator = new ArticleCreator(articleRepositoryMock)
});

describe('Create a Blog Post', () => {
  it('Should create a Blog Post successfully', async () => {

    const article = ArticleMother.random();
    const articleRequest = article.toPrimitives();
    await articleCreator.run(articleRequest)
    articleRepositoryMock.assertLastSavedArticleIs(article);
  })

  it('Should throw an error if the Blog Post Date is not a past date', async () => {

    const article = ArticleMother.random();
    const articleRequest = article.toPrimitives();
    // force future date
    articleRequest.date = DateMother.future().toISOString();

    try {
      expect(await articleCreator.run(articleRequest)).toThrow()
    } catch (e) {
      const error = e as Error
      expect(error.message as string).toMatch("<ArticleDate> should be a past date");
    }
  })

  it('Should throw an error if the Author email is not valid', async () => {

    const article = ArticleMother.random();
    const articleRequest = article.toPrimitives();
    // force invalid email
    articleRequest.authorEmail = WordsMother.wordRandom();

    try {
      expect(await articleCreator.run(articleRequest)).toThrow()
    } catch (e) {
      const error = e as Error
      expect(error.message as string).toMatch(`<Email> does not allow the value <${articleRequest.authorEmail}>`);
    }
  })

})


