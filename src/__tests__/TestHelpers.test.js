import {uppercaseFirstLetter} from "../helpers/upperCase";

test('concatenateNames', () => {
    const value = uppercaseFirstLetter('J', 'ansen');
    expect(value).toBe('Jansen');
});