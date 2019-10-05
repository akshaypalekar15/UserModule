import React, { Component } from 'react';
import NavBar from '../component/Navbar';
import './Home.css'



class Home extends Component {
  state = {
    dropdownVal: "Select",
    dropdownValues: [{
      value: "1",
      name: 'Value 1'
    }, {
      value: "2",
      name: 'Value 2'
    },
    {
      value: "3",
      name: 'Value 3'
    },
    ],
    currentText: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    textData: [
      {
        id: 1,
        body:
          "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      },
      {
        id: 2,
        body:
          "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
      },
      {
        id: 3,
        body:
          "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
      }
    ]
  };

  getDropdownVal(e) {
    let currentTxt = "";
    for (let i = 0; i < this.state.textData.length; i++) {
      if (e.target.value == this.state.textData[i].id) {
        currentTxt = this.state.textData[i].body;
      }
    }
    this.setState({
      currentText: currentTxt,
      dropdownVal: e.target.value
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="users-div">
          <select
            className="dropdown"
            value={this.state.dropdownVal}
            onChange={this.getDropdownVal.bind(this)}
          >
            {this.state.dropdownValues.map((item) => {
              return (
                <option value={item.value}>{item.name}</option>
              );
            })}
          </select>

          <div className='text-div'>
            <p>{this.state.currentText}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;