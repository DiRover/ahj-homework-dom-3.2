import filterByText from '../filterByText';

test('Check filter', () => {
  const arr = ['asd', 'qwe', 'foo'];
  const str = 'asd';
  const expected = ['asd'];
  const received = filterByText(arr, str);
  expect(received).toEqual(expected);
});

test('Тест', () => {
  expect('ok').toBe('ok');
});
