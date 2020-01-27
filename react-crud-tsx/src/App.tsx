import React from 'react';
import BoardForm from './components/BoardForm'
import BoardItem from './components/BoardItem'


interface IProps {
  child: {
    current: {
      onSaveData: Function;
    }
    handleSelectRow: Function;
    handleChange: Function;
    handleRemove: Function;
  }
}



class App extends React.Component<IProps, {}>{
  private stepInput: React.RefObject<BoardForm>
  constructor(props: IProps) {
    super(props);
    this.stepInput = React.createRef();
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

  handleSaveData = (data: any) => {
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

  handleRemove = (brdno: any) => {
    this.setState({
      boards: this.state.boards.filter(row=>row.brdno !== brdno)
    })
  }

  handleSelectRow = (row: object) => {
    this.props.child.handleSelectRow(row);
  }

  render () {
    const { boards } = this.state;

    return (
      <div>
        <BoardForm onSaveData={this.handleSaveData} ref={this.stepInput}/>
        <table >
          <tbody>
            <tr>
              <td>No.</td>
              <td>Title</td>
              <td>Name</td>
              <td>Date</td>
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




