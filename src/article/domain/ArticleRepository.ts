import { Nullable } from '../../shared-d/domain-d/Nullable';
import { Uuid } from '../../shared-d/domain-d/value-objects/Uuid';
import { Article } from './Article';

export interface ArticleRepository {
  save(user: Article): Promise<void>;
  search(id: Uuid): Promise<Nullable<Article>>;
}
