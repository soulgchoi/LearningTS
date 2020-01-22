import React from 'react';
import UserItem from '../user/UserItem'

class UserPage extends React.Component {
    render() {
        return (
            <div>
                <h2>User Page</h2>
                <UserItem name="이것은 name 이다." />
            </div>
        );
    }
}

export default UserPage