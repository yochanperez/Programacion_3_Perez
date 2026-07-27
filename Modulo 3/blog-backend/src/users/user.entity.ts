import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ unique: true })
  username?: string;

  @Column()
  email?: string;

  
  @Column({ nullable: true })
  password?: string;

  @Column({ default: true })
  isActive?: boolean;

  @Column({ nullable: true })
  profile?: string;

  @Column({ type: 'varchar', nullable: true })
  googleId?: string | null;

  @Column({ type: 'varchar', nullable: true })
  avatarUrl?: string | null;

}