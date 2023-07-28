import React from 'react'
import Button from 'react-bootstrap/Button';
import  settings from '../images/settings.png';


function Settings() {
    const auth = localStorage.getItem('user')
    return (
        <div>
            <div className='set-col'>
            <h3 className='settings-title-h3'><b>Settings &nbsp;<i class="bi bi-gear-fill" id="sett-icon"></i></b></h3>
            <hr className='settings-line'></hr>
            <div className='settings-info'>

                
 
                <div className='settings-details'>
                    {/* <h5 className='settings-text'><i class="bi bi-person-circle"></i>&nbsp;&nbsp;{JSON.parse(auth).firstname}</h5><br/> */}

                    <h5> Free Ads       <Button variant="primary" className='settings-button'> On</Button></h5><br />
                    <h5> Add premiums   <i class="bi bi-star-fill" id="prem-star"></i> <Button variant="primary" className='settings-button2'> Premium</Button> </h5>
                    <span className='settings-span'> You need to pay $50 per year</span><br/><br/>
                    <h5>Keep Updates     <Button variant="primary" className='settings-button3'> On</Button></h5>
                    <span className='settings-span'> you can recieve messages when ever we post any offers</span>

                </div>
                <div className='image-settings'>
                    <img src={settings} className='img-sett' />
                </div>

            </div>
            {/* <div>
                <img src={set2}  className='img-sett2'></img>
            </div> */}

</div>


        </div>
    )
}

export default Settings