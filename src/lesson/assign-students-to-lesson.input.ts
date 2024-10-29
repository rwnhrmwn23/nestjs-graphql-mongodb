import {Field, ID, InputType} from '@nestjs/graphql';
import {IsDateString, IsUUID, isUUID, MinLength} from 'class-validator';

@InputType()
export class AssignStudentsToLessonInput {
  @IsUUID()
  @Field(() => ID)
  lessonId: string;

  @IsUUID("4", {each: true})
  @Field(() => [ID])
  studentIds: string[];
}
