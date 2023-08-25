import { ArticleCreator } from './article/application/ArticleCreator';
import { PostArticleController } from './article/controllers/PostArticleController';
import { MongoArticleRepository } from './article/infrastructure/MongoArticleRepository';
import { Logger } from './shared/infrastructure/logger/Logger';
import { MongoClientFactory } from './shared/infrastructure/mongo/MongoClientFactory';

const mongoClient = MongoClientFactory.createClient({ url: 'mongodb://localhost:27017/test' });
const articleRepository = new MongoArticleRepository(mongoClient);
const articleCreator = new ArticleCreator(articleRepository);
const createArticleController = new PostArticleController(articleCreator);

const DependencyInjectionContainerLoad = () => {
  Logger.info('  Dependency loaded! \n');
};

export const DependencyInjectionContainer = {
  DependencyInjectionContainerLoad,
  mongoClient,
  ArticleCreator: articleCreator,
  createArticleController
};
