export default function InputDiv(props) {
    const {classname, labelfor, type,name} = props;
  return (
    <div className={classname}>
      <label className="form-label" for={labelfor}>
        {name}
      </label>
      {props.children}
      <input className="form-control" type={type} id={labelfor} required />
    </div>
  );
}
