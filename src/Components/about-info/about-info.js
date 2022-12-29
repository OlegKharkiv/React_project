
import './about-info.modules.scss';
import SelfImage from '../images_01/photo_2022-12-10_13-35-57.jpg';


const AboutInfo = () => {

    return (
        <div className="about-info">
            <div className="about-image">
                <img src={SelfImage} alt="Self_image"/>
            </div>
            <div className="text">
                <div className="text__container _container">
                    <h2 className="text__title">About Educator</h2>
                    <div className="text__item _anim-items">
                        <p className="_anim-show">Certified judge of international level INJA, member of the International Association of Nail Judges, Global instructor, CEO of Iryna Giblett Ukraine. Gold medalist, winner of the Grand Prix "Winner of Winners" Cup at the 2012 Nailympics Championship, London. 
                        Medalist of the international championship Nailympion Ukraine, 2017. Multiple medalist of national championships. Ranked among the 50 best specialists in the world of the nail industry according to the first professional Nail Bloga. Trainer of new basic instructors. Master of the highest category according to KSSK standards. Speaker of international seminars, forums, participant of exhibitions, 
                        author of microns and articles in professional publications. 
                        Trainer of the Kharkiv team in nail aesthetics. Vice-President of the public organization Union of Hairdressers of Ukraine (Kharkov branch). Leading teacher, founder of the Viola International Nail Academy school 
                        (school of the 1st level of accreditation according to KSSK standards).
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default AboutInfo;