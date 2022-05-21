export default function ClubbedInput(props){
    const {classname, labelfor, groupObject,name} = props;
    return(
       <div className={classname}>
        <label className="form-label" for={labelfor}>
          {name}
        </label>
        <div className="input-group">
          <span className="input-group-text">{groupObject}</span>
          <input
            className="form-control"
            id="username"
            placeholder="Username"
            required
          />
        </div>
      </div>    
    )
}