import { useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import { IoFootballOutline } from "react-icons/io5";
import { MdSportsCricket } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { IoTennisball } from "react-icons/io5";
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { FaSearchPlus } from "react-icons/fa";

const Test = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSearch = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <>
            <div className='header'>
                <Row className='spaceBetween'>

                    <Col sm={6} style={{ display: 'flex' }}><img className='logo' src="https://sitethemedata.com/sitethemes/d247.com/front/logo.png" /></Col>

                    <Col sm={6}><div class="user-balance ms-1 ms-xl-3"><div><span>Balance:</span><b>1500</b></div><div><span>Exp:</span><b class="pointer">0</b><div class="dropdown"><a class="user-name ms-1 ms-xl-3 d-inline-block d-xl-none dropdown-toggle" id="react-aria2371733761-1" aria-expanded="false">Demo<i class="fas fa-chevron-down ms-1"></i></a></div></div></div></Col>


                </Row>
                <Row>
                    <Col sm={12}>
                  
                      <div className='searchbarIcon'>
                    
                    
                        <div className="search-container">
                           
                            <input
                                type="text"
                                className={`search-input ${isOpen ? "open" : ""}`}
                                placeholder="Search..."
                            />
                           
                        </div>
                        <span><FaSearchPlus onClick={toggleSearch} style={{color:'white'}} size={20}/></span>
                      </div>
                     
                    </Col>
                </Row>
                <div class="scrollmenu">
                    <a href="#home" className='nav1menu'><span className='iconWithName'><IoFootballOutline className='icon' />Valencia v Alaves</span></a>
                    <a href="#news" className='nav1menu'><span className='iconWithName'><MdSportsCricket className='icon' />South Africa v Pakistan</span></a>
                    <a href="#contact" className='nav1menu'><span className='iconWithName'><IoFootballOutline className='icon' />Everton v Chelsea</span></a>



                </div>
               
            </div>

            <ul>
                    <li><a class="active" href="#home"><FaPerson size={15}/>POLITICS</a></li>
                    <li><a href="#news"><MdSportsCricket size={15}/>CRICKET</a></li>
                    <li><a href="#contact"><IoFootballOutline size={15}/>FOOTBALL</a></li>
                    <li><a href="#about"><IoTennisball size={15}/>TENNIS</a></li>
                    <li><a href="#about"><MdOutlineSportsKabaddi size={15}/>CABADDI</a></li>

                </ul>


        </>
    )
}

export default Test