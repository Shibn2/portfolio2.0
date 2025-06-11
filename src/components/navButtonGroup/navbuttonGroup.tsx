import { CONTACT_PAGE, EXPERIENCE_PAGE, HOME_PAGE } from "../../constants";

type navButtonPropTypes = {
    onClickHandler: (e: React.MouseEvent<HTMLButtonElement>, page: string) => void,
}

const NavButtonGroup: React.FC<navButtonPropTypes> = ({ onClickHandler }) => {
    return <div>
        <button onClick={(e) => onClickHandler(e, HOME_PAGE)}>Home</button>
        <button onClick={(e) => onClickHandler(e, EXPERIENCE_PAGE)}>Experience</button>
        <button onClick={(e) => onClickHandler(e, CONTACT_PAGE)}>Contact</button>
        </div>
}

export default NavButtonGroup;