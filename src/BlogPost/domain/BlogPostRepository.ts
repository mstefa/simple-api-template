import { Nullable } from '../../Shared/Domain/Nullable';
import { Uuid } from '../../Shared/Domain/ValueObjects.ts/Uuid';
import { BlogPost } from './BlogPost';

export interface BlogPostRepository {
  save(user: BlogPost): Promise<void>;
  search(id: Uuid): Promise<Nullable<BlogPost>>;
}
