import { BlogPostCreator } from '../../../src/BlogPost/application/BlogPostCreator'
import { CreateBlogPostRequestMother } from './CreateBlogPostRequestMother';

let blogPostCreator: BlogPostCreator;

beforeEach(() => {
  blogPostCreator = new BlogPostCreator()
});

describe('Create a Blog Post', () => {
  it('Should create a Blog Post successfully', async () => {

      const blogPostRequest = CreateBlogPostRequestMother.radom();
      await blogPostCreator.run(blogPostRequest)

  })

  it('Should throw an error if the Blog Post Date is not a past date', async () => {

    const blogPostRequest = CreateBlogPostRequestMother.futureDate();

      try {
        expect(await blogPostCreator.run(blogPostRequest)).toThrow()
      } catch (e) {
      const error = e as Error
      expect(error.message as string).toMatch("<BlogDate> should be a past date");
    }
  })

  it('Should throw an error if the Author email is not valid', async () => {

    const blogPostRequest = CreateBlogPostRequestMother.wrongEmail();

      try {
        expect(await blogPostCreator.run(blogPostRequest)).toThrow()
      } catch (e) {
      const error = e as Error
      expect(error.message as string).toMatch(`<Email> does not allow the value <${blogPostRequest.authorEmail}>`);
    }
  })

})


