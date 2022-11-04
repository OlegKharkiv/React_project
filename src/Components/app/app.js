import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploeesList from '../emploees-list/emploees-list';
import EmploeesAddForm from '../emploees-add-form/emploees-add-form';

import './app.css';

function App() {

    const data = [
        {name: 'Peter C.', salary: 800, increase: false, id: 1},
        {name: 'John M.', salary: 3000, increase: true, id: 2},
        {name: 'Nikki W.', salary: 1500, increase: false, id: 3},
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmploeesList data={data}/>
            <EmploeesAddForm/>
        </div>
    );
}

export default App;