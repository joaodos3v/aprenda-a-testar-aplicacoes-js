const { queryString } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'João',
      profession: 'Developer',
    };

    expect(queryString(obj)).toBe('name=João&profession=Developer');
  });
});

// describe('Query string to object', () => {

// });
