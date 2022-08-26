import React, {useState} from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useForm } from 'react-hook-form'


function runShScript(params) {
    console.log(params)
    // Simple GET request using fetch
    fetch('http://localhost:300/?foo=123456', )
        .then(response => response.json())
        .then(data => this.setState({ totalReactPackages: data.total }));
}

const App = () => {
  const [Board, setBoard] = React.useState('Target Device');
};

export default function Basic(props) {    
  const [Board, setBoard] = React.useState('Target Device');

  const handleSetBoard = (event) => {
    setBoard(event.value);
    console.log(event.value)
  }
  state = {
    BoardFarm_USER: "bhoopesh",
    BoardFarm_IP: "192.168.3.183",
    BoardFarm_PASS: "admin@1234",
    DeviceUSB: "0",
    Boot_With: "sd",
    Board_IP: "192.168.2.152",
    MMC_BLOCK: "mmc0",
    BIN_PATH: "home/user/syte"
  }

  return (
    <form>
        <h5 className="text-center">{props.heading}</h5>
        <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Select the file for Flashing</label>
            <input className="form-control"  name = "Binary File" type="file" id="formFile"/>
        </div>

      <div>
      <Dropdown
        label="Select the Target device"
        options={[
          { label: 'None', value: '' },
          { label: 'BR1', value: 'BR1' },
          { label: 'BR2', value: 'BR2' },
          { label: 'BR3', value: 'BR3' },
        ]}
        value={Board}
        onChange={handleSetBoard}
      />
      <p className='my-3'>You select: {Board}</p>
      </div>
        <label>
          BoardFarm_USER: <input type="text" value ={this.state.BoardFarm_USER}/>
        </label>
        <label>
        BoardFarm_IP: <input type="text" value = {this.state.BoardFarm_IP}/>
        </label>
        BoardFarm_PASS: <input type="text" value = {this.state.BoardFarm_PASS}/>
        <lable>
          DeviceUSB: <input type="text" value = {this.state.DeviceUSB}/>
        </lable>
        <lable>
          Boot_With: <input type="text" value = {this.state.Boot_With}/>
        </lable>
        <lable>
          Board_IP: <input type="text" value = {this.state.Board_IP}/>
        </lable>
        <label>
          MMC_BLOCK: <input type="text" value = {this.state.MMC_BLOCK}/>
        </label>
        <label>
          BIN_PATH: <input type="text" value = {this.state.BIN_PATH}/>
        </label>
        <div className="mb-3 form-check mt-3">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">I Confirm</label>
        </div>
        <div className='delete-button' onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.onCancel() } } />
        <button type="submit" className="btn btn-primary" onClick={runShScript} >Flash</button>
      </form>
  )
}
