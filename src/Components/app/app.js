import { Component } from 'react';
import nextId from "react-id-generator";



import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EducationList from '../education-list/education-list';
import EducationAddForm from '../education-add-form/education-add-form';
import AboutInfo from '../about-info/about-info';
import SkillsInfo from '../skills/skills';
// import AnimationOnScroll from '../services/service_script';

import './app.css';

class App extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            data: [
                {name: 'Petro Vasylenko National Technical University of Agriculture, Kharkiv, Ukraine', year: "09/2003 - 12/2008", increase: false, promotion: true, id: nextId()},
                {name: 'Yaroslav Mudryi National Law University, Kharkiv, Ukraine', year: "07/2007 - 12/2012", increase: true, promotion: false, id: nextId()},
                {name: 'The Fundamentals of Software Testing ', year: '06/2022', increase: false, promotion: false, id: nextId()},
                {name: 'The Fundamentals of Software Testing ', year: '06/2022', increase: false, promotion: false, id: nextId()},
            ],
            term: '',
            filter: ''
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, year) => {
        const newItem = {
            name, 
            year,
            increase: false,
            promotion: false,
            id: nextId()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterEmp = (items, filter) => {
        switch (filter) {
            case 'promotion':
                return items.filter(item => item.promotion);
            case 'increase':
                return items.filter(item => item.increase)
            default: 
                return items 
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const diplomas = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterEmp(this.searchEmp(data, term), filter);
        return (
            <div className="app">
                <AppInfo
                diplomas={diplomas}
                increased={increased}/>
                <div className="page">
                    <div> 
                        <AboutInfo/>
                    </div>
                    <div className="search-panel">
                        <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                        <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                    </div>
                    <EducationList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                    <SkillsInfo/>
                    <EducationAddForm
                    onAdd={this.addItem}/>
                </div>
            </div>
        );
    }
}

export default App;