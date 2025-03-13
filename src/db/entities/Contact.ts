import type { Relation } from 'typeorm';
import { Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { NGO } from "./NGO";

@Entity()
export class Contact {
    @PrimaryColumn("varchar", { length: 15 })
    contactNumber!: string

    @ManyToOne(() => NGO, (ngo) => ngo.contacts, { nullable: false })
    organization!: Relation<NGO>
}