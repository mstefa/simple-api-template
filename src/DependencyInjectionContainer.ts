import { MongoClient } from 'mongodb';

import { ArticleCreator } from './article/application/ArticleCreator';
import { ArticleGetter } from './article/application/ArticleGetter';
import { GetBlogPostController } from './article/controllers/GetArticleController';
import { PostArticleController } from './article/controllers/PostArticleController';
import { MongoArticleRepository } from './article/infrastructure/MongoArticleRepository';
import { ProductAdder } from './product/application/ProductAdder';
import { ProductFinder } from './product/application/ProductFinder';
import { GetProduct } from './product/controller/GetProduct';
import { GetProducts } from './product/controller/GetProducts';
import { PostProduct } from './product/controller/PostProduct';
import { MongoProductRepository } from './product/infrastructure/MongoProductRepository';
import { config } from './shared/config/appConfig';
import { Logger } from './shared/infrastructure/logger/Logger';
import { MongoClientFactory } from './shared/infrastructure/mongo/MongoClientFactory';


export class DependencyContainer {

  // eslint-disable-next-line no-use-before-define
  private static instance: DependencyContainer;

  public mongoClient: Promise<MongoClient>;

  // public metricRepository: MongoMetricRepository;
  public articleRepository: MongoArticleRepository;
  public productRepository: MongoProductRepository;

  // //Aplication
  // public metricCreator: MetricCreator;
  // public metricGetter: MetricsAverageGenerator;
  public articleCreator: ArticleCreator;
  public articleGetter: ArticleGetter;
  public productAdder: ProductAdder;
  public productFinder: ProductFinder;

  // // Controllers
  // public postMetricController: PostMetricController;
  // public getMetricsController: GetMetricsController;
  public createArticleController: PostArticleController;
  public getBlogPostController: GetBlogPostController;
  public postProduct: PostProduct;
  public getProduct: GetProduct;
  public getProducts: GetProducts

  constructor() {

    const url = `${config.db.host}/${config.app.env}`;
    this.mongoClient = MongoClientFactory.createClient({ url });

    // this.metricRepository = new MongoMetricRepository(this.mongoClient);
    this.articleRepository = new MongoArticleRepository(this.mongoClient);
    this.productRepository = new MongoProductRepository(this.mongoClient)

    //Aplication
    this.articleCreator = new ArticleCreator(this.articleRepository);
    this.articleGetter = new ArticleGetter(this.articleRepository);
    this.productAdder = new ProductAdder(this.productRepository);
    this.productFinder = new ProductFinder(this.productRepository);


    // Controllers
    this.createArticleController = new PostArticleController(this.articleCreator);
    this.getBlogPostController = new GetBlogPostController(this.articleGetter)
    this.postProduct = new PostProduct(this.productAdder);
    this.getProduct = new GetProduct(this.productFinder);
    this.getProducts = new GetProducts();

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
