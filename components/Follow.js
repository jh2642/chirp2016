import React from 'react'

class Follow extends React.Component {
    constructor(props) {
        super(props)
        this.followToggle = this.followToggle.bind(this)
        this.state = {
            users: props.users
        }
    }

    followToggle(e) {
        var users = this.state.users,
            followingUser = !users[e.target.getAttribute('data-user-key')].currently_being_followed

        users[e.target.getAttribute('data-user-key')].currently_being_followed = followingUser
        this.setState({users: users})

        if (followingUser) {
            fetchApi('POST', '/follow/' + users[e.target.getAttribute('data-user-key')].id, {})
        }
        else {
            fetchApi('DELETE', '/unfollow/' + users[e.target.getAttribute('data-user-key')].id, {})
        }

    }

    render() {
        var users = this.state.users.map((user, i) => {
        if (typeof user.userpic !== 'string') {
            user.userpic = ''
        }
            return <div key={i} className="col-sm-3">
                <div className="thumbnail" style={{marginBottom: '-8px', width: '100%', height: '250px', border: '2px solid white', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundImage: 'url(' + (user.userpic.includes('robohash') ? user.userpic + i : user.userpic) + '?set=set3&bgset=bg1)'}}>
                </div>
                <div className="text-center" style={{color: 'white'}}>
                    <h3>@{user.name}</h3>
                </div>
                <button style={{marginBottom: '25px'}} className={user.currently_being_followed ? 'btn btn-success btn-block' : 'btn btn-default btn-block'} onClick={this.followToggle} data-user-key={i}>{user.currently_being_followed ? 'Unfollow' : 'Follow'}</button>
            </div>
        })

        return <div className="row">
            {users}
        </div>
    }
}

export default Follow
