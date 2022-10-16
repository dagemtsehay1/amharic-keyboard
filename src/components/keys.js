const Keys = (props) => {
    return ( 
        <div className="keys" onClick={()=>props.onClick(props.letter)}>
            <p>{props.letter}</p>
        </div>
     );
}
 
export default Keys;