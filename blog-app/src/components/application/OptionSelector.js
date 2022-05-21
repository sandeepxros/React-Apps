export default function OptionSelector(props){
    const {classname, name, options, labelfor} = props
    return(
        <div className={classname}>
                  <label for={labelfor} className="form-label">
                    {name}
                  </label>
                  <select className="form-select" id={labelfor} required>
                    {
                        options.map(op=><option key={options.indexOf(op)}>{op}</option>)
                    }
                  </select>
        </div>
    )
}