import convertHoursToMinutes from '../../src/utils/convertHoursToMinutes';

describe('ConvertHoursToMinutes', () => {
  it('should be able to convert hours to minutes', () => {
    const convertedTime = convertHoursToMinutes('12:00');

    expect(convertedTime).toBe(720);
  });
});
