import { Email } from '../../Shared/Domain/ValueObjects.ts/Email';
import { Uuid } from '../../Shared/Domain/ValueObjects.ts/Uuid';
import { BlogPost } from '../domain/BlogPost';
import { BlogPostRepository } from '../domain/BlogPostRepository';
import { BlogBody } from '../domain/ValueObjects/BlogBody';
import { BlogDate } from '../domain/ValueObjects/BlogDate';
import { BlogDescription } from '../domain/ValueObjects/BlogDescription';
import { BlogTitle } from '../domain/ValueObjects/BlogTitle';
import { CreateBlogPostRequest } from '../dtos/CreateBlogPostRequest';

export class BlogPostCreator {
  private repository: BlogPostRepository;

  constructor(repository: BlogPostRepository) {
    this.repository = repository;
  }
  async run(data: CreateBlogPostRequest): Promise<void> {
    const blogPost = new BlogPost(
      new Uuid(data.id),
      new BlogTitle(data.title),
      new BlogDescription(data.description),
      new BlogBody(data.body),
      new BlogDate(data.date),
      new Email(data.authorEmail)
    );

    await this.repository.save(blogPost);
  }
}
