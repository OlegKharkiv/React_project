
import './app-filter.css'

const AppFilter = (props) => {
    const buttonsDate = [
        {name: 'all', label: 'All diplomas'},
        {name: 'promotion', label: 'Choose a diploma'},
        {name: 'increase', label: 'Certificate'},
    ]

    const buttons = buttonsDate.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button
                className={`btn ${clazz}`}
                type='button'
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;