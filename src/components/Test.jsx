import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import { IoFootballOutline } from "react-icons/io5";
import { MdSportsCricket } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { IoTennisball } from "react-icons/io5";
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { FaSearchPlus } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useRef } from 'react';

const Test = () => {
    const popUpRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [popUp,setPopUp]=useState(false)

        useEffect(() => {
            const handleClickOutside = (event) => {
               
                if (popUpRef.current && !popUpRef.current.contains(event.target)) {
                    setPopUp(false);
                }
            };
    

            document.addEventListener("mousedown", handleClickOutside);
    
  
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, []); 

    const toggleSearch = () => {
        setIsOpen((prev) => !prev);
    };

    const togglePopUp = () => {
        setPopUp((prev) => !prev);
    };
    return (
        <>
            <div className='header'>
                <Row className='spaceBetween'>

                    <Col sm={6} style={{ display: 'flex' }}><FaHome size={30} color='white' style={{ marginRight: '5px' }} /><img className='logo' src="https://sitethemedata.com/sitethemes/d247.com/front/logo.png" /></Col>

                    <Col sm={6}>
                        <div class="user-balance ms-1 ms-xl-3">
                            <div><span>Balance:</span><b>1500</b></div>
                            <div className='expodemo' onClick={togglePopUp}>
                                <span>Exp:0</span>
                                <div className='verticallyCenter'>
                                    <div class="dropdown "><a class="user-name ms-1 ms-xl-3 d-inline-block d-xl-none dropdown-toggle" id="react-aria2371733761-1" aria-expanded="false">Demo </a></div>
                                    <RiArrowDropDownLine size={20} className='downArrow' />
                                   {
                                    popUp && ( <div className='popUp' ref={popUpRef}>

                                        </div>)
                                   }
                                </div>
                            </div>
                        </div>
                    </Col>


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
                            <span><FaSearchPlus onClick={toggleSearch} style={{ color: 'white' }} size={20} /></span>
                            <marquee scrollamount="3" className="scrollTxt">Big Bash League 2024-25 is Live! Scratch to Unlock Incredible Rewards!</marquee>
                        </div>

                    </Col>
                </Row>
                <div class="scrollmenu">
                    <a href="#home" className='nav1menu '><span className='iconWithName blinking-text'><IoFootballOutline className='icon' />Valencia v Alaves</span></a>
                    <a href="#news" className='nav1menu'><span className='iconWithName blinking-text'><MdSportsCricket className='icon' />South Africa v Pakistan</span></a>
                    <a href="#contact" className='nav1menu'><span className='iconWithName blinking-text'><IoFootballOutline className='icon' />Everton v Chelsea</span></a>



                </div>

            </div>

            <ul>
                <li><a class="active" href="#home"><FaPerson size={15} />POLITICS</a></li>
                <li><a href="#news"><MdSportsCricket size={15} />CRICKET</a></li>
                <li><a href="#contact"><IoFootballOutline size={15} />FOOTBALL</a></li>
                <li><a href="#about"><IoTennisball size={15} />TENNIS</a></li>
                <li><a href="#about"><MdOutlineSportsKabaddi size={15} />CABADDI</a></li>

            </ul>

            <div className='horizontalSpaceBetween'>
                <div className='alignvertically'>
                    <span className='smallBold'>Assembly Election 2024</span>
                    <span className='smaller'>25/11/2024 00:01:00</span>
                </div>
                <FaFacebookF size={10} />
            </div>

            <div style={{ display: 'flex' }}>
                <span className='oneXtwo'>1</span>
                <span className='oneXtwo'>x</span>
                <span className='oneXtwo'>2</span>
            </div>
            <div class="container">


                <div class="box locked"><div className='lock'><MdLock color='white' size={20} /></div></div>
                <div class="box"></div>

                <div class="box blue"></div>
                <div class="box pink"></div>
                <div class="box"><div className='lock'><MdLock color='white' size={20} /></div></div>
                <div class="box locked"></div>
            </div>


        </>
    )
}

export default Test