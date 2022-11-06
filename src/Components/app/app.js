import { Component } from 'react';
import nextId from "react-id-generator";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploeesList from '../emploees-list/emploees-list';
import EmploeesAddForm from '../emploees-add-form/emploees-add-form';

import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        const id1 = nextId(); 
        const id2 = nextId(); 
        const id3 = nextId(); 
        this.state = {
            data: [
                {name: 'Peter C.', salary: 800, increase: false, promotion: true, id: id1},
                {name: 'John M.', salary: 3000, increase: true, promotion: false, id: id2},
                {name: 'Nikki W.', salary: 1500, increase: false, promotion: false, id: id3},
            ]
        }
    }

    htmlId = nextId();

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            promotion: false,
            id: this.htmlId
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

    render() {
        const emploees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo
                emploees={emploees}
                increased={increased}/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmploeesList 
                data={this.state.data}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}/>
                <EmploeesAddForm
                onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;