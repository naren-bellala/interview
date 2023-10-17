export function FavouritesCheckbox({ checked, setChecked }) {
  return (
    <label>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked(!checked)}
      />
      Show Favourites only
    </label>
  );
}
