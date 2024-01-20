import './FAQsComponent.scss';

import DropInfoComponent from '../DropInfoComponent/DropInfoComponent';

const mainText = [
    {
        mainHeader: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales ?',
        mainText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat. '
    },
    {
        mainHeader: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales ?',
        mainText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat. '
    },
    {
        mainHeader: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales ?',
        mainText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat. '
    },
    {
        mainHeader: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales ?',
        mainText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat. '
    },
    {
        mainHeader: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales ?',
        mainText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat. '
    },
]

function FAQsComponent() {

    return ( 
        <section className='faqs'>
            <h2>FAQ’s</h2>
            <div className='FAQs-chapters'>
                <div className='left-plank'></div>
                <div className='rovws-text'>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales ?</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales ?</li>
                        <li>Lorem ipsum dolor sit amet?</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ?</li>
                        <li>Lorem ipsum dolor sit amet, consectetur ?</li>
                    </ul>
                </div>
                <div className='right-plank'></div>
            </div>
            <div className='state-chapters'>
                {mainText.map((item, index) => (
                    <DropInfoComponent droupDownItem={item} isActive={(index === 0) ? true : false} key={index}/>
                ))}
            </div>
        </section>
    );
}

export default FAQsComponent;