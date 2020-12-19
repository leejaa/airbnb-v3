import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateRoomArgs } from "./dtos/create-room.dto";
import { Room } from "./entities/Room.entity";

@Resolver()
export class RoomsResolver {
    @Query(() => [Room])
    rooms(@Args('veganOnly') veganOnly: boolean): Room[] {
        return [];
    }
    @Mutation(() => Boolean)
    createRoom(@Args('createRoomArgs') createRoomArgs: boolean): Boolean {
        return true;
    }
}