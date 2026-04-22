import { Body, Controller, Get, Post } from '@nestjs/common';
import { PeopleService } from './people.service';
import type { Person } from './people.service';
import { CreatePersonDto } from './dto/create-person.dto';

@Controller()
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

 @Post('addPerson')
addPerson(@Body() body: CreatePersonDto): Person {
  return this.peopleService.addPerson(body);
}

  @Get('getPeople')
  getPeople(): Person[] {
    return this.peopleService.getPeople();
  }
}