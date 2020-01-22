import React from 'react'

interface IProps {
    name: string;
}

class UserItem extends React.Component<IProps, {}> {
    render() {
        return (
            <h1>{this.props.name}</h1>
        );
    }
}

export default UserItem;