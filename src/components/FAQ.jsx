import '../styles/frequently_asked_questions.scss'
import {FAQ_MAP} from '../utils/FAQ'

export default function FAQ() {
    return (
       <>
       <div id='FAQ-container-main-grid' className='noselect'>
        <div id='FAQ-container-main'>
            <div id="FAQ-container">
                 <p id='FAQ-title'>FREQUENTLY ASKED QUESTIONS</p>
                <div className='divider'></div>
                {[0,1,2,3,4,5,6].map((x) => 
                <span>
                <div className='faq-grid'>
                <p className='FAQ-question pointer'>{FAQ_MAP.get(x)[0]}</p>
                <div className='arrow-grid-container'>
                <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z" fill="#000000"></path> </g></svg>
                </div>
                </div>
                <div className='divider'></div>
                </span>
                )}
              </div>
            </div>
        </div>
       </> 
    )
}