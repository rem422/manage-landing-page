import { Link } from "react-scroll";

interface Props {
    classes? : string,
    Text: string
}
function Button({classes, Text}:Props) {
    return (
        <Link to='/' className={classes}>{ Text }</Link>
    );
}

export default Button;