import React from 'react';

function Community() {
    return ( 
        <>
            <div className='footer_after'>
                <div className="row text-center">
                    <h1 className='footer_h'>BE A PART OF THE COMMUNITY!</h1>
                    <div className="col-3">
                        <a className='social_link telegram' href="https://web.telegram.org/k/">
                            <h1 className='com_icons'><i class="fa fa-telegram" aria-hidden="true"></i></h1> Telegram
                        </a>
                    </div>
                    <div className="col-3">
                        <a className='social_link facebook' href="https://www.facebook.com/">
                            <h1 className='com_icons'><i class="fa fa-facebook-official" aria-hidden="true"></i></h1> Facebook
                        </a>
                    </div>
                    <div className="col-3">
                        <a className='social_link instragram' href="https://www.instagram.com/">
                            <h1 className='com_icons'><i class="fa fa-instagram" aria-hidden="true"></i></h1> Instragram
                        </a>
                    </div>
                    <div className="col-3">
                        <a className='social_link linkedin' href="https://www.linkedin.com/feed/">
                            <h1 className='com_icons'><i class="fa fa-linkedin-square" aria-hidden="true"></i></h1> LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Community;