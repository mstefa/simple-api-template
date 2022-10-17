import { CreateBlogPostRequest } from '../../Shared/dtos/CreateBlogPostRequest';

export class BlogPostCreator {
  //private repository: Repository;

  constructor(/**repository: repository*/) {
    //this.repository = repository;
  }
  async run(data: CreateBlogPostRequest): Promise<void> {
    console.log(data);
  }
}
