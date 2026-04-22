import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';

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
  const exists = this.people.find(p => p.email === person.email);
  if (exists) {
    throw new BadRequestException('Ya existe un interesado con ese correo');
  }
  const newPerson: Person = { id: this.nextId++, ...person };
  this.people.push(newPerson);
  return newPerson;
}
 

  getPeople(): Person[] {
    return this.people;
  }
}