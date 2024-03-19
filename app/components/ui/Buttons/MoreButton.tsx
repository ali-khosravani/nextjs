
import Link from "next/link"
const MoreButton =(props:{linkValue:string , title:string}) =>{
    return (
        <>
            <button className="btn btn-primary"><Link href={props.linkValue}>{props.title}</Link></button>           
        </>
    )
}

MoreButton.defaultProps = {
    linkValue:"#",
    title: 'بیشتر '+String.fromCharCode(187)
}
export default MoreButton;