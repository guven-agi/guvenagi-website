import type { Relation } from 'typeorm';
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm"
import { HelpRequest } from "./HelpRequest"

@Entity()
export class City {

    @PrimaryColumn("int")
    id!: number

    @Column("varchar", { length: 200, nullable: false })
    name!: string

    @OneToMany(() => HelpRequest, (request) => request.city)
    helpRequests!: Relation<HelpRequest[]>
}