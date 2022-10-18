import { BlogPostCreator } from './BlogPost/application/BlogPostCreator';
import { CreateBlogPostController } from './BlogPost/controllers/CreateBlogPostController';

let i = 0;
const blogPostCreator = new BlogPostCreator();
console.log(i++);
const createBlogPostController = new CreateBlogPostController(blogPostCreator);
const DICLoad = () => {
  console.log('Dependency loaded! ');
};

export const DIC = {
  DICLoad,
  blogPostCreator,
  createBlogPostController
};
