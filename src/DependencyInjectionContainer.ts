import { ArticleCreator } from './article/application/ArticleCreator';
import { ArticleGetter } from './article/application/ArticleGetter';
import { GetBlogPostController } from './article/controllers/GetArticleController';
import { ArticleController } from './article/controllers/PostArticleController';
import { MongoArticleRepository } from './article/infrastructure/MongoArticleRepository';
import { Logger } from './shared/infrastructure/logger/Logger';
import { MongoClientFactory } from './shared/infrastructure/mongo/MongoClientFactory';

// DB
const mongoClient = MongoClientFactory.createClient({ url: 'mongodb://localhost:27017/test' });
const articleRepository = new MongoArticleRepository(mongoClient);

//Aplication
const articleCreator = new ArticleCreator(articleRepository);
const articleGetter = new ArticleGetter(articleRepository);


// Controllers
const createArticleController = new ArticleController(articleCreator);
const getBlogPostController = new GetBlogPostController(articleGetter)

const DependencyInjectionContainerLoad = () => {
  Logger.info('  Dependency loaded! \n');
};

export const DependencyInjectionContainer = {
  DependencyInjectionContainerLoad,
  mongoClient,
  ArticleCreator: articleCreator,
  createArticleController,
  getBlogPostController,
  articleGetter
};
