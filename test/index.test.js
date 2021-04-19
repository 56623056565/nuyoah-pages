const nuyoahPages = require('..')

// TODO: Implement module test
test('nuyoah-pages', () => {
  expect(nuyoahPages('w')).toBe('w@zce.me')
  expect(nuyoahPages('w', { host: 'wedn.net' })).toBe('w@wedn.net')
  expect(() => nuyoahPages(100)).toThrow('Expected a string, got number')
})
