import { EntityNotFoundError } from "../../shared/domain/Errors/EntityNotFoundError";
import { Uuid } from "../../shared/domain/value-objects/Uuid";
import { Article } from "../domain/Article";
import { ArticleRepository } from "../domain/ArticleRepository";

export class ArticleGetter {
  private repository: ArticleRepository;

  constructor(repository: ArticleRepository) {
    this.repository = repository;
  }

  async run(id: Uuid): Promise<Article> {
    const article = await this.repository.search(id)

    if (article !== null) {
      return article;
    }

    throw new EntityNotFoundError(`Article with ID: ${id} can not be found`)
  }
}
