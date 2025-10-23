import "./style.css"
import Gear from "../../assets/gear.png"
import Menu from "../../assets/menu_bar.png"
import Edit from "../../assets/edit.png"

function SideFlap(){

    return(
        <div id="side-flap-container">
            <button type="button">
                <img src={Menu} alt="Bar menu to open the side flap" />
            </button>
            <button type="button">
                <img src={Edit} alt="Edit button to open chat options" />
            </button>
            <button type="button">
                <img src={Gear} alt="Gear button to open user config" />
            </button>
        </div>
    )
}

export default SideFlap