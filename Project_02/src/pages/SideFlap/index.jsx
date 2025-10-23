import "./style.css"
import Gear from "../../assets/gear.png"
import Menu from "../../assets/menu_bar.png"
import Edit from "../../assets/edit.png"
import { useSidebar } from "../SideFlap/context.jsx"

function SideFlap(){
    const { isSidebarOpen, toggleSidebar, openSidebar } = useSidebar();

    return(
        <div id="side-flap-container" className={isSidebarOpen ? 'open' : 'closed'}>
            <div className="top-buttons">
                <button 
                    type="button"
                    onMouseEnter={openSidebar}
                    onClick={toggleSidebar}
                >
                    <img src={Menu} alt="Bar menu to open the side flap" />
                    <h3>Botao</h3>
                </button>
                <button type="button">
                    <img src={Edit} alt="Edit button to open chat options" />
                </button>
            </div>
            
            {isSidebarOpen && (
                <div className="sidebar-content">
                    <h3>Menu</h3>
                    <p>Histórico de conversas</p>
                </div>
            )}

            <button type="button" className="gear-button">
                <img src={Gear} alt="Gear button to open user config" />
                {isSidebarOpen && <span className="button-label">Configurações</span>}
            </button>
        </div>
    )
}

export default SideFlap