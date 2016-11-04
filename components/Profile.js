import React from 'react'

var Profile = (props) => <div>

    <img className="img-responsive thumbnail" src={props.userpic ? props.userpic : 'http://unsplash.it/600'} alt={props.name} />
    <h3 className="text-center">@{props.name}</h3>
    <div className="row">
        <div className="col-xs-6">{props.followers_count} Followers</div>
        <div className="col-xs-6">{props.followees_count} Following</div>
    </div>
    <a href="follow.html" className="btn btn-default btn-block btn-sm">Follow some peepz</a>
</div>

export default Profile
