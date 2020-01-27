import React from 'react'

interface IProps {
  row: any;
  onRemove: any;
  onSelectRow: any;
}

class BoardItem extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props)
  }
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
          {/* <td><a onClick={this.handleSelectRow}>{this.props.row.brdtitle}</a></td> */}
          <td>{this.props.row.brdtitle}</td>
          <td>{this.props.row.brdwriter}</td>
          <td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td>
          <td><button onClick={this.handleRemove}>X</button></td>
        </tr>
      );
    }
  }

export default BoardItem;