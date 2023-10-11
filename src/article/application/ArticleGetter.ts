
import { EntityNotFoundError } from "../../shared/domain/errors/EntityNotFoundError";
import { Uuid } from "../../shared/domain/value-objects/Uuid";
import { ArticleRepository } from "../domain/ArticleRepository";
import { ArticleDto } from "../dtos/ArticleDto";

export class ArticleGetter {
  private repository: ArticleRepository;

  constructor(repository: ArticleRepository) {
    this.repository = repository;
  }

  async run(id: string): Promise<ArticleDto> {

    const article = await this.repository.search(new Uuid(id))

    if (article !== null) {
      return article.toPrimitives();
    }

    throw new EntityNotFoundError(`Article with ID: ${id} can not be found`)
  }
}
