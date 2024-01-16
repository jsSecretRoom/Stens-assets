import './ForPartnerComponent.scss';
import forPartnerDeco from '../../assets/decoration/LOOKING FOR A PARTNER Section.svg';
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
                    <button>Let’s talk</button>
                </div>
            </div>

        </section>
    );
}

export default ForPartnerComponent;