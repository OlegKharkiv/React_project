
import './skills.css';


const SkillsInfo = () => {

    return (
                <div className="skills__row">
                        <div className="item-skills">
                            <div className="item-skills__title">Hard Skills</div>
                            <div className="item-skills__text">
                                <ul className="item__skills">
                                    <ul className="item__skills _anim-items">
                                        <li>Programming language and frameworks: JavaScript/ES6+, React</li>
                                        <li>Strong HTML5/CSS3 knowledge</li>
                                        <li>Version control: GIT, GitHub</li>
                                        <li>Working knowledge of software development practices and technologies</li>
                                        <li>Experienced with module bundler -  WebPack</li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                        <div className="item-skills">
                            <div className="item-skills__title">Soft Skills</div>
                            <div className="item-skills__text">
                                <ul className="item__skills">
                                    <ul className="item__skills _anim-items">
                                        <li>Integrity</li>
                                        <li>Dependability</li>
                                        <li>Effective communication</li>
                                        <li>Open-mindedness</li>
                                        <li>Teamwork</li>
                                        <li>Problem-solving</li>
                                        <li>Willingness to learn</li>
                                        <li>Adaptability</li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                </div>

    )
}

export default SkillsInfo;