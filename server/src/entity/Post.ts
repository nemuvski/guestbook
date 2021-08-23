import { Column, Entity, BaseEntity, ObjectID, ObjectIdColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Post extends BaseEntity {
  @ObjectIdColumn()
  readonly id: ObjectID;

  @Column()
  body: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
