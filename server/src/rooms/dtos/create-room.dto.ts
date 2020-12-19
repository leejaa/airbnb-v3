import { ArgsType, Field, InputType } from "@nestjs/graphql";
import { IsBoolean, IsString } from "class-validator";

@ArgsType()
export class CreateRoomArgs {
    @Field(() => String)
    name: string;
    @Field(() => Boolean)
    isVegan: boolean;
    @Field(() => String)
    address: string;
    @Field(() => Boolean)
    ownerName: string;
}