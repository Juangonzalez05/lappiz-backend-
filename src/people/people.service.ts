import { Injectable } from '@nestjs/common';

export interface Person {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class PeopleService {
  private people: Person[] = [];
  private nextId = 1;

  addPerson(person: Omit<Person, 'id'>): Person {
    const newPerson: Person = { id: this.nextId++, ...person };
    this.people.push(newPerson);
    return newPerson;
  }

  getPeople(): Person[] {
    return this.people;
  }
}