import EducationListItem from '../education-list-item/education-list-item';
import './education-list.css';

const EducationList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EducationListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })

    return (
        <div className="education"> 
            <ul className="education__list">
                {elements}
            </ul>
        </div>

    )
}

export default EducationList;