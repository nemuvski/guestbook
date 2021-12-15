import { Column, Entity, BaseEntity, ObjectID, ObjectIdColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Post extends BaseEntity {
  @ObjectIdColumn()
  readonly id: ObjectID;

  @Column()
  /* eslint-disable indent */
  body: string;

  @CreateDateColumn({ type: 'timestamp' })
  readonly createdAt: Date;
}
