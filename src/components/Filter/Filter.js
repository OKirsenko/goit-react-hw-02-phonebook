import s from './Filter.module.css';
export default function Filter({ filter, handleChange }) {
  return (
    <label className={s.label}>
      Find contact by name
      <br />
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
}
