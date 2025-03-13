import type { Relation } from 'typeorm';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { HelpRequest } from "./HelpRequest";


@Entity()
@Unique(["hardwareIdentifier"])
export class User {
    @PrimaryGeneratedColumn("uuid")
    userID!: string

    @Column("varchar", { length: 400 })
    hardwareIdentifier!: string

    @Column("varchar", { length: 200, nullable: false })
    name!: string

    @Column("int", { nullable: false })
    age!: number

    @OneToMany(() => HelpRequest, (request) => request.user)
    requests!: Relation<HelpRequest[]>
}