import type { Relation } from 'typeorm';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { NGO } from "./NGO";
import { HelpRequest } from "./HelpRequest";


@Entity()
export class SupportSubject {
    @PrimaryGeneratedColumn()
    id!: number

    @Column("varchar", {
        length: 60,
        nullable: false
    })
    name!: string

    @Column("text", {
        nullable: false
    })
    definitionText!: string

    @ManyToMany(() => NGO, (ngo) => ngo.supportSubjects)
    ngos!: Relation<NGO[]>

    @ManyToMany(() => HelpRequest, (request) => request.supportSubjects)
    helpRequests!: Relation<HelpRequest[]>
}