import { MongoClient } from 'mongodb';

import { ArticleCreator } from './article/application/ArticleCreator';
import { ArticleGetter } from './article/application/ArticleGetter';
import { GetBlogPostController } from './article/controllers/GetArticleController';
import { PostArticleController } from './article/controllers/PostArticleController';
import { MongoArticleRepository } from './article/infrastructure/MongoArticleRepository';
import { config } from './shared/config/appConfig';
import { Logger } from './shared/infrastructure/logger/Logger';
import { MongoClientFactory } from './shared/infrastructure/mongo/MongoClientFactory';

// DB
// const mongoClient = MongoClientFactory.createClient({ url: 'mongodb://localhost:27017/test' });
// const articleRepository = new MongoArticleRepository(mongoClient);

// //Aplication
// const articleCreator = new ArticleCreator(articleRepository);
// const articleGetter = new ArticleGetter(articleRepository);


// // Controllers
// const createArticleController = new PostArticleController(articleCreator);
// const getBlogPostController = new GetBlogPostController(articleGetter)

// const DependencyInjectionContainerLoad = () => {
//   Logger.info('  Dependency loaded! \n');
// };

// export const DependencyInjectionContainer = {
//   DependencyInjectionContainerLoad,
//   mongoClient,
//   ArticleCreator: articleCreator,
//   createArticleController,
//   getBlogPostController,
//   articleGetter
// };


export class DependencyContainer {

  // eslint-disable-next-line no-use-before-define
  private static instance: DependencyContainer;

  public mongoClient: Promise<MongoClient>;

  // public metricRepository: MongoMetricRepository;
  public articleRepository: MongoArticleRepository;

  // //Aplication
  // public metricCreator: MetricCreator;
  // public metricGetter: MetricsAverageGenerator;
  public articleCreator: ArticleCreator;
  public articleGetter: ArticleGetter;


  // // Controllers
  // public postMetricController: PostMetricController;
  // public getMetricsController: GetMetricsController;
  public createArticleController: PostArticleController;
  public getBlogPostController: GetBlogPostController;


  constructor() {

    const url = `${config.db.host}/${config.app.env}`;
    this.mongoClient = MongoClientFactory.createClient({ url });

    // this.metricRepository = new MongoMetricRepository(this.mongoClient);
    this.articleRepository = new MongoArticleRepository(this.mongoClient);

    //Aplication
    this.articleCreator = new ArticleCreator(this.articleRepository);
    this.articleGetter = new ArticleGetter(this.articleRepository)


    // Controllers
    this.createArticleController = new PostArticleController(this.articleCreator);
    this.getBlogPostController = new GetBlogPostController(this.articleGetter)

    Logger.info(`  Environment stetted as: ${config.app.env}`)
    Logger.info('  Dependency loaded! \n');

  }

  static getInstance(): DependencyContainer {

    if (!DependencyContainer.instance) {
      DependencyContainer.instance = new DependencyContainer();
    }

    return DependencyContainer.instance;
  }

}
