import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {
        id: 11, name: 'Mr. Nice', addresses: [
          { street: '123 Main', city: 'Anywhere', state: 'CA', zip: '94801' },
          { street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226' },
        ]
      },
      {
        id: 12, name: 'Narco', addresses: [
          { street: '789 Elm', city: 'Smallville', state: 'OH', zip: '04501' },
        ]
      },
      { id: 13, name: 'Bombasto', addresses: [] },
      { id: 14, name: 'Celeritas', addresses: [] },
      { id: 15, name: 'Magneta', addresses: [] },
      { id: 16, name: 'RubberMan', addresses: [] },
      { id: 17, name: 'Dynama', addresses: [] },
      { id: 18, name: 'Dr IQ', addresses: [] },
      { id: 19, name: 'Magma', addresses: [] },
      { id: 20, name: 'Tornado', addresses: [] }
    ];
    return { heroes };
  }
}
