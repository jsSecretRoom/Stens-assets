import './ContactsFormComponent.scss';



function ContactsFormComponent() {
    return ( 

        <div className='form-conteiner'>
            <form action="">
                <input type="text" placeholder='Name'/>
                <input type="email" name="" id="" placeholder='Email'/>
                <textarea name="" id="" cols="30" rows="10" placeholder='Massage'></textarea>
                <button>Send request</button>
            </form>
        </div>
    );
}

export default ContactsFormComponent;