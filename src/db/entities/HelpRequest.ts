import type { Relation } from 'typeorm';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { SupportSubject } from "./SupportSubject";
import { City } from "./City";


@Entity()
export class HelpRequest {
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(() => User, (user) => user.requests, { nullable: false })
    user!: Relation<User>

    @ManyToOne(() => City, (city) => city.helpRequests, { nullable: false })
    city!: Relation<City>

    @Column("text", {
        nullable: false
    })
    messageText!: string

    @ManyToMany(() => SupportSubject, (subject) => subject.helpRequests)
    @JoinTable({
        name: "request_support_subjects"
    })
    supportSubjects!: Relation<SupportSubject[]>

    @CreateDateColumn()
    createdAt!: Date
}