import type { Relation } from 'typeorm';
import { Check, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { NGO } from "./NGO";

@Entity()
@Check(`"email" IS NOT NULL OR "username" IS NOT NULL`)
export class Account {
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @Column("varchar", { length: 100, nullable: false })
    name!: string | null

    @Column("varchar", { length: 120, nullable: true })
    email!: string | null

    @Column("varchar", { length: 30, nullable: true })
    username!: string

    @Column("varchar", { length: 500 })
    password_encrypted!: string

    @ManyToOne(() => NGO, (ngo) => ngo.members, {
        nullable: false,
        onDelete: 'CASCADE',
    })
    organization!: Relation<NGO>
}