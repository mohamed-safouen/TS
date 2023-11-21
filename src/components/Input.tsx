type InputProps={
    value:string,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}
export const Input = (props:InputProps)=> {
    return <input  onChange={props.handleChange} value={props.value} type="text"/>
}