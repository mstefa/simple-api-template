import { MongoClient } from 'mongodb';

import { ArticleCreator } from './article/application/ArticleCreator';
import { ArticleGetter } from './article/application/ArticleGetter';
import { GetBlogPostController } from './article/controllers/GetArticleController';
import { PostArticleController } from './article/controllers/PostArticleController';
import { MongoArticleRepository } from './article/infrastructure/MongoArticleRepository';
import { PostProduct } from './product/controller/PostProduct';
import { config } from './shared-d/config/appConfig';
import { Logger } from './shared-d/infrastructure/logger/Logger';
import { MongoClientFactory } from './shared-d/infrastructure/mongo/MongoClientFactory';

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
  public postProduct: PostProduct;



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
    this.postProduct = new PostProduct();

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
