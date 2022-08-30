import React, {useState} from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useForm } from 'react-hook-form'



function runShScript(params) {
    console.log(params)
    // Simple GET request using fetch
    fetch('http://192.168.3.107:3008/?foo='+JSON.stringify(board))
        .then(response => response.json())
        .then(data => this.setState({ totalReactPackages: data.total }));
}

const App = () => {
  const [Board, setBoard] = React.useState('Target Device');
};

var board = {
    Board_type: "",
    BoardFarm_USER: "",
    BoardFarm_IP: "",
    BoardFarm_PASS: "",
    DeviceUSB: "",
    Boot_With: "",
    Board_IP: "",
    MMC_BLOCK: "",
    BIN_PATH: ""
  }

export default function Basic(props) {  
  
  
  const [Board, setBoard] = React.useState('Target Device');

  const handleSetBoard = (event) => {
    setBoard(event.value);
    var boardsConf = require("./boards.json");
    // console.log(typeof(boardsConf))
    if (event.value === "None") {
      board = boardsConf.None;
    }
      if (event.value === "BR1") {
        board = boardsConf.BR1;
    }

    if (event.value === "BR2") {
      console.log(boardsConf.BR2);
      board = boardsConf.BR2;
    }

    if (event.value === "BR3") {
      // console.log(boardsConf.BR3);
      board = boardsConf.BR3;
    }


  };

  function inputEvent() {
   
  }

  const [name, setName] = useState(() =>{
  //   _BR1 = {BoardFarm_USER: "bhoopesh",
  //   BoardFarm_IP: "192.168.3.183",
  //   BoardFarm_PASS: "admin@1234",
  //   DeviceUSB: "0",
  //   Boot_With: "sd",
  //   Board_IP: "192.168.2.152",
  //   MMC_BLOCK: "mmc0",
  //   BIN_PATH: "home/user/syte"
  // }
  });
  
  return (
    <form>
        <h5 className="text-center">{props.heading}</h5>
        <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Select the file for Flashing</label>
            <input className="form-control"  name = "Binary File" type="file" id="formFile"/>
        </div>

      <div>
        <lable className = "md-3">
        Select the Target device:
        </lable>
        <br/>
      <Dropdown
        label="Select the Target device"
        options={[
          { label: 'None', value: 'None' },
          { label: 'BR1', value: 'BR1' },
          { label: 'BR2', value: 'BR2' },
          { label: 'BR3', value: 'BR3' },
        ]}
        value={Board}
        onChange={handleSetBoard}
      />
      <p className='my-3'>You select: <b>{Board}</b></p>
      </div>
      <div>
        <label>
          BoardFarm_USER: <input name='' type="text" onChange={inputEvent} value ={  board.BoardFarm_USER}/>
        </label>
        <br/>
        <label>
        BoardFarm_IP: <input name=''  type="text" onChange={inputEvent} value = {  board.BoardFarm_IP}/>
        </label>
        <br/>
        <lable>
        BoardFarm_PASS: <input name='' type="text"  onChange={inputEvent} value= {  board.BoardFarm_PASS}/>
        </lable>
        <br/>
        <lable>
          DeviceUSB: <input name='' type="text" onChange={inputEvent} value = {  board.DeviceUSB}/>
        </lable>
        <br/>
        <lable>
          Boot_With: <input name='' type="text" onChange={inputEvent} value = {  board.Boot_With}/>
        </lable>
        <br/>  
        <lable>
          Board_IP: <input name='' type="text" onChange={inputEvent} value = {  board.Board_IP}/>
        </lable>
        <br/>
        <label>
          MMC_BLOCK: <input name='' type="text" onChange={inputEvent} value = {  board.MMC_BLOCK}/>
        </label>
        <br/>
        <label>
          BIN_PATH: <input name='' type="text" value = {  board.BIN_PATH}/>
        </label>
        <br/>
        </div>
        <div className="mb-3 form-check mt-3">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">I Confirm</label>
        </div>
        <div className='delete-button' onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.onCancel() } } />
        <button type="submit" className="btn btn-primary" onClick={runShScript} >Flash</button>
      </form>
  )
}
