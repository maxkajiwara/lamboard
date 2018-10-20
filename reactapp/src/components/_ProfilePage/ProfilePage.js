/*
The start of the ProfilePage component
 todo:
  - auth check with jwt when on profile, if passes edit controls
  - hook up to redux
  - do we have a sprite for the logo?
  - add cog on highlight over Location/Specialty?
*/

import React, { Component } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

// TestParentComponent built to pass props to ProfilePage
export default class TestParentComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { // test user
      name: 'Aklutch90001',
      location: 'Los Angeles, California',
      bio: 'Angel Investor, Tech Enthusiast, Acting',
      profileImage: 'https://pbs.twimg.com/media/DlPbLwhX0AAi5JQ?format=jpg',
      auth: true,
      profileID: this.props.match.params.id,
      userID: "1"
    }
  }
  render() {
    return (
      <ProfilePage user={this.state} />
    )
  }
}

class ProfilePage extends Component {
  render() {
    return (
      <ProfilePageWrapper>
        <ProfileInfo>
          {/* Loads profile image from props */}
          <ProfileImg src={this.props.user.profileImage} />
          <ProfileBio>
            <ProfileStats><ProfileStat>Username</ProfileStat>: {this.props.user.name}</ProfileStats>
            <ProfileStats><ProfileStat>Location</ProfileStat>: {this.props.user.location}</ProfileStats>
            <ProfileStats><ProfileStat>Activities</ProfileStat>: {this.props.user.bio}</ProfileStats>
          </ProfileBio>
        </ProfileInfo>
        {/* Conditional that checks if this.props.user.auth is true then shows buttons */}
        {this.props.user.auth &&
          <AuthInterface>
            <ProfileButton>Message</ProfileButton>
            <ProfileButton>Follow</ProfileButton>
            {/* Conditional that checks if the this.props.user.userID is equal to this.props.user.profileID
            then displays update profile button if true. */}
            {this.props.user.userID === this.props.user.profileID && <ProfileButton>Update Profile</ProfileButton>}
          </AuthInterface>
        }
      </ProfilePageWrapper>
    )
  }
}

// prop-types check for sample parent component
ProfilePage.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  bio: PropTypes.string,
  profileImage: PropTypes.string,
  auth: PropTypes.bool,
  profileID: PropTypes.string,
  userID: PropTypes.string
}

// styled components
const ProfilePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
  margin-top: 100px;
  /* Code below generated from gradient editor: http://www.colorzilla.com/gradient-editor/ */
  background: rgb(174,159,222); /* Old browsers */
  background: -moz-linear-gradient(top, rgba(174,159,222,1) 0%, rgba(233,168,195,1) 50%, rgba(166,123,172,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(174,159,222,1) 0%,rgba(233,168,195,1) 50%,rgba(166,123,172,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(174,159,222,1) 0%,rgba(233,168,195,1) 50%,rgba(166,123,172,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ae9fde', endColorstr='#a67bac',GradientType=0 ); /* IE6-9 */
`;

const ProfileInfo = styled.div`
  display: flex;
  height: 400px;
  margin: 20px;
`;

const ProfileImg = styled.img`
  width: 300px;
  height: 400px;
  background: #E9A8C3;
  border: 3px solid #9397D1;
  border-radius: 12px;
  /* overflow: hidden; */
`;

const ProfileBio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 50px;
  width: 50%;
`;

const ProfileStats = styled.h4`
  font-size: 40px;
  color: #72496D;
`;

const ProfileStat = styled.span`
  font-weight: bold;
`;

const AuthInterface = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 20px 0 20px;
`;

const ProfileButton = styled.a`
  display: flex;
  justify-content: center;
  border-radius: 3px;
  padding: 9px;
  width: 140px;
  height: 40px;
  background: #72496D;
  color: white;
  border: 2px solid white;
  font-size: 18px;
`;