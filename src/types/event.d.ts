export interface CategoryEvent {
  name: string;
  date: string;
  income: number;
  outcome: number;
}

export interface PeopleEvent {
  name: string;
  date: string;
  income: number;
  outcome: number;
  relation: string;
}

export type Event = CategoryEvent | PeopleEvent;
