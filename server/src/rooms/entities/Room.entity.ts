import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Room {

    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column()
    name: string;
    
    @Field(() => Boolean)
    @Column()
    isVegan: boolean;

    @Field(() => String)
    @Column()
    address: string;

    @Field(() => String)
    @Column()
    ownerName: string;
}