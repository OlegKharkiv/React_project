
import './about-info.modules.scss';
import SelfImage from '../images_01/Avatarr 0711.jpg';


const AboutInfo = () => {

    return (
        <div className="about-info">
            <img width="248px" height="248px" src={SelfImage} alt="Self_image"/>
            <div className="text">
                <div className="text__container _container">
                    <h2 className="text__title">About</h2>
                    <div className="text__item _anim-items">
                        <p className="_anim-show">Junior developer with the ability to learn quickly and work persistently. I am a highly organized and educated person with excellent communication and conflict-resolution abilities. 
                            I can work efficiently and initiatively on tasks; demonstrate the high levels of motivation required to make the problem-solving work within set deadlines. Even under pressure, I can perform strongly and highly efficiently. 
                            Qualified in managing tasks and quality, and maintaining client privacy.
                            Perfectly working as a team player, as well as an independent developer. I would love to be part 
                            of a successful and productive company.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default AboutInfo;