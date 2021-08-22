import { Column, Entity, BaseEntity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Post extends BaseEntity {
  @ObjectIdColumn()
  readonly id: ObjectID;

  @Column()
  body: string;
}
