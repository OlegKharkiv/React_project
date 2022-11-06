import './app-info.css';


const AppInfo = (props) => {
    const {emploees, increased} = props;
    return (
        <div className="app-info">
            <h1>Employee accounting at LTD "Viola"</h1>
            <h2>Total number of employees: {emploees}</h2>
            <h2>The award will be received: {increased} </h2>
        </div> 
    )
}

export default AppInfo;