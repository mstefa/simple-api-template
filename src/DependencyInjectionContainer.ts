import { BlogPostCreator } from './BlogPost/application/BlogPostCreator';
import { CreateBlogPostController } from './BlogPost/controllers/CreateBlogPostController';
import { Logger } from './Shared/infrastructure/logger/Logger';
import { MongoClientFactory } from './Shared/infrastructure/mongo/MongoClientFactory';

const mongoClient = MongoClientFactory.createClient({ url: 'mongodb://localhost:27017/test' });
const blogPostCreator = new BlogPostCreator();
const createBlogPostController = new CreateBlogPostController(blogPostCreator);

const DICLoad = () => {
  Logger.info('  Dependency loaded! \n');
};

export const DIC = {
  DICLoad,
  mongoClient,
  blogPostCreator,
  createBlogPostController
};
