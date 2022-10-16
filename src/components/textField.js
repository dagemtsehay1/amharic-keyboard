const TextField = (props) => {
    return ( 
        <div className="text-field">
            <textarea value={props.text} onChange ={props.onChange} placeholder="have fun :)"></textarea>
        </div>
     );
}
 
export default TextField;