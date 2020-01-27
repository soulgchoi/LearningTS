import React from 'react';


class BoardItem extends React.Component {
  handleRemove = () => {
    const {row, onRemove} = this.props;
    onRemove(row.brdno);
  }

  handleSelectRow = () => {
    const { row, onSelectRow } = this.props;
    onSelectRow(row);
  }
  render() {
    return (
      <tr>
        <td>{this.props.row.brdno}</td>
        <td><a onClick={this.handleSelectRow}>{this.props.row.brdtitle}</a></td>
        <td>{this.props.row.brdtitle}</td>
        <td>{this.props.row.brdwriter}</td>
        <td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td>
        <td><button onClick={this.handleRemove}>X</button></td>
      </tr>
    );
  }
}

class BoardForm extends React.Component {
  state = {
    brdwriter: '',
    brdtitle: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSaveData(this.state);
    this.setState({
      brdno: '',
      brdwriter: '',
      brdtitle: '',
    });
  }
  handleSelectRow = (row) => {
    this.setState(row);
  }
  

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="title" name="brdtitle" onChange={this.handleChange}/>
        <input placeholder="name" name="brdwriter" onChange={this.handleChange}/>
        <button type="submit">Save</button>
      </form>
    )
  }
}

class App extends React.Component{
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  state = {
    maxNo: 3,
    boards: [
      {
        brdno: 1, 
        brdwriter: 'Writer1',
        brdtitle: 'Title1',
        brddate: new Date()
      },
      {
        brdno: 2,
        brdwriter: 'Writer2',
        brdtitle: 'Title1',
        brddate: new Date(),
      }
    ]
  }
  // handleSaveData = (data) => {
  //   this.setState({
  //     maxNo: this.state.maxNo+1,
  //     boards: this.state.boards.concat({brdno: this.state.maxNo, brddate: new Date(), ...data})
  //   })
  // }
  handleSaveData = (data) => {
    let boards = this.state.boards;
    if (data.brdno === null || data.brdno === '' || data.brdno === undefined) { 
        this.setState({
            maxNo: this.state.maxNo+1,
            boards: boards.concat({brdno: this.state.maxNo, brddate: new Date(), ...data })
        });
    } else {                                                      
        this.setState({
            boards: boards.map(row => data.brdno === row.brdno ? {...data }: row)
        })            
    }
  }

  handleRemove = (brdno) => {
    this.setState({
      boards: this.state.boards.filter(row=>row.brdno !== brdno)
    })
  }

  handleSelectRow = (row) => {
    this.child.current.handleSelectRow(row);
  }

  render () {
    const { boards } = this.state;

    return (
      <div>
        <BoardForm onSaveData={this.handleSaveData} ref={this.child}/>
        <table border="1">
          <tbody>
            <tr align="center">
              <td width="50">No.</td>
              <td width="300">Title</td>
              <td width="100">Name</td>
              <td width="100">Date</td>
            </tr>
            {
              boards.map(row => (
                <BoardItem
                  key={row.brdno}
                  row={row} 
                  onRemove={this.handleRemove}
                  onSelectRow={this.handleSelectRow}
                />
                )
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;




