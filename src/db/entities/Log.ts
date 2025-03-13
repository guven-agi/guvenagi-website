import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Log {
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @CreateDateColumn()
    createdAt!: Date

    @Column("timestamp", { nullable: false })
    logTimestamp!: Date

    @Column("varchar", { length: 120, nullable: false })
    label!: string

    @Column("varchar", { length: 60, nullable: false })
    level!: string

    @Column("text", { nullable: false })
    message!: string
}