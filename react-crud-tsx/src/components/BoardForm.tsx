import React from 'react'

interface IProps {
  onSaveData: Function;
}


class BoardForm extends React.Component<IProps, {}> {
    state = {
      brdwriter: '',
      brdtitle: '',
    }
    handleChange = (e: any) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    handleSubmit = (e: any) => {
      e.preventDefault();
      this.props.onSaveData(this.state);
      this.setState({
        brdwriter: '',
        brdtitle: '',
      });
    }
    handleSelectRow = (row: any) => {
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

export default BoardForm;