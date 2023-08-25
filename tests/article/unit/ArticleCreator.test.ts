import { ArticleCreator } from '../../../src/article/application/ArticleCreator'
import { ArticleRepositoryMock } from '../mocks/ArticleRepositoryMock';
import { CreateArticleRequestMother } from './CreateArticleRequestMother';

let articleRepositoryMock: ArticleRepositoryMock;
let articleCreator: ArticleCreator;

beforeEach(() => {
  articleRepositoryMock = new ArticleRepositoryMock()
  articleCreator = new ArticleCreator(articleRepositoryMock)
});

describe('Create a Blog Post', () => {
  it('Should create a Blog Post successfully', async () => {

    const blogPostRequest = CreateArticleRequestMother.random();
    await articleCreator.run(blogPostRequest)

  })

  it('Should throw an error if the Blog Post Date is not a past date', async () => {

    const articleRequest = CreateArticleRequestMother.futureDate();

    try {
      expect(await articleCreator.run(articleRequest)).toThrow()
    } catch (e) {
      const error = e as Error
      expect(error.message as string).toMatch("<ArticleDate> should be a past date");
    }
  })

  it('Should throw an error if the Author email is not valid', async () => {

    const blogPostRequest = CreateArticleRequestMother.wrongEmail();

    try {
      expect(await articleCreator.run(blogPostRequest)).toThrow()
    } catch (e) {
      const error = e as Error
      expect(error.message as string).toMatch(`<Email> does not allow the value <${blogPostRequest.authorEmail}>`);
    }
  })

})


