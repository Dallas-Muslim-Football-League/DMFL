import { ToSortObjectAttributesAlphabeticallyPipe } from "./to-sort-object-attributes-alphabetically.pipe";

describe('AlphabeticallySortPipe', () => {
  it('create an instance', () => {
    const pipe = new ToSortObjectAttributesAlphabeticallyPipe();
    expect(pipe).toBeTruthy();
  });
});
