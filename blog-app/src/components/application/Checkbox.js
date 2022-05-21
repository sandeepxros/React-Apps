export default function Checkbox(props) {
  const { labels } = props;
  const l = labels.map((label) => (
    <div className="form-check ">
      <input type="checkbox" className="form-check-input" id="save-data" />
      <label className="form-check-label" for="save-data">
        {label}
      </label>
    </div>
  ));
  console.log(l);
  return <>{l}</>;
}
