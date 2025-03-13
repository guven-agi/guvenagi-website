import type { Relation } from 'typeorm';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { SupportSubject as SupportSubject } from "./SupportSubject"
import { Account } from "./Account"
import { Contact } from "./Contact"

@Entity({
    name: 'ngos'
})
export class NGO {
    @PrimaryGeneratedColumn("uuid")
    id!: number

    @CreateDateColumn()
    createdAt!: Date

    @Column('varchar', {
        length: 120,
        nullable: false,
    })
    name!: string

    @Column("text", {
        nullable: true
    })
    iconUrl!: string | null

    @Column("text", {
        nullable: false
    })
    descriptionText!: string

    @Column("boolean", {
        nullable: false,
        default: false
    })
    isVerified!: boolean

    @ManyToMany(() => SupportSubject, (field) => field.ngos)
    @JoinTable({
        name: "ngo_support_subjects"
    })
    supportSubjects!: Relation<SupportSubject[]>

    @OneToMany(() => Account, (act) => act.organization)
    members!: Relation<Account[]>

    @OneToMany(() => Contact, (ct) => ct.organization, {
        cascade: true
    })
    contacts!: Relation<Contact[]>
}