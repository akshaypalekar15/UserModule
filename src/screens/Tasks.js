import React, { Component } from 'react';
import NavBar from '../component/Navbar';
import axios from 'axios';
import './Task.css';

class Tasks extends Component {
  state = {
    list: [],
    taskInputVisible: false,
    taskName: ''
  };

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/todos').then((resp) => {
      console.log(resp);
      this.setState({ list: resp.data });
    }).catch((err) => {
      alert('Failed to fetch data');
    });
  }

  removeItem(e) {
    let allItems = this.state.list;
    let index = allItems.indexOf(e);
    if (index > -1) {
      allItems.splice(index, 1);
    }
    this.setState({ list: allItems });
  }

  addTask() {
    this.setState({
      taskInputVisible: true
    })
  }

  setTaskName(e) {
    this.setState({
      taskName: e.target.value
    });
  }

  pushTask() {
    let allItems = this.state.list;
    allItems.push({
      "userId": 1,
      "id": parseInt(Math.random()*1000),
      "title": this.state.taskName,
      "completed": false
    });
    this.setState({
      list: allItems,
      taskInputVisible: false,
      taskName: ''
    })
  }

  hideModal() {
    this.setState({
      taskInputVisible: false
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className='tasks-container'>
          {this.state.list.map((item, index) => {
            return (
              <div className='task-item' key={item.id}>
                <div>{++index}.</div>
                <div style={{ width: '500px' }}>{item.title}</div>
                <div>{item.completed.toString()}</div>
                <div>
                  <input
                    value='Delete'
                    type='button'
                    className='task-delete-btn' onClick={this.removeItem.bind(this, item)} />
                </div>
              </div>
            );
          })}
          {this.state.taskInputVisible &&
            <div className='modal'>
              <div>
                <input
                  className='modal-txt-input'
                  type='text'
                  placeholder='Task name'
                  value={this.state.taskName}
                  onChange={this.setTaskName.bind(this)} />
              </div>
              <div className='modal-btn-grp'>
                <input
                  type='button'
                  className='modal-btn'
                  value='Add'
                  onClick={this.pushTask.bind(this)} />
                <input
                  type='button'
                  className='modal-btn'
                  value='Close'
                  onClick={this.hideModal.bind(this)} />
              </div>
            </div>
          }
          <div className='task-add-div'>
            <input type='button'
              className='task-add-btn'
              value='Add Task'
              onClick={this.addTask.bind(this)} />
          </div>
        </div>

      </div>
    );
  }
}

export default Tasks;