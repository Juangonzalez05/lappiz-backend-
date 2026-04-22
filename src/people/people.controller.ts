import { Body, Controller, Get, Post } from '@nestjs/common';
import { PeopleService } from './people.service';
import type { Person } from './people.service';

@Controller()
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Post('addPerson')
  addPerson(@Body() body: Omit<Person, 'id'>): Person {
    return this.peopleService.addPerson(body);
  }

  @Get('getPeople')
  getPeople(): Person[] {
    return this.peopleService.getPeople();
  }
}