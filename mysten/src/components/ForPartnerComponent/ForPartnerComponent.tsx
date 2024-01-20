import './ForPartnerComponent.scss';
import forPartnerDeco from '../../assets/decoration/LOOKING FOR A PARTNER Section.svg';
import ContactsButton from '../../buttonsComponents/ContactsButton/ContactsButton';
function ForPartnerComponent() {
    return ( 
        <section className='for-Partner'>
            <div className='img-conteiner'>
                <img src={forPartnerDeco} alt="forPartnerDeco" />
            </div>
            <div className='information'>
                <div className='information-conteiner'>
                    <h2>LOOKING FOR A PARTNER IN BUILDING A SOLUTION?</h2>
                    <p>We are ready to discuss your project requirements</p>
                    <ContactsButton buttonContent={'Let’s talk'}/>
                </div>
            </div>

        </section>
    );
}

export default ForPartnerComponent;