import './index.scss';
import Icon from "../icon";

function SideBar(params) {
    return (
        <div className="sidebar">
            <div className="sidebar__logo">
            <h2>Zulkar</h2>
            <button>
                <Icon iconName="left-double-arrow" />
            </button>
            </div>
        </div>
    )
}

export default SideBar;