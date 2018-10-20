/*
The start of the ProfilePage component
 todo:
  - auth check with jwt when on profile, if passes edit controls
  - Auth version design
  - hook up to redux
  - do we have a sprite for the logo?
  - add cog on highlight over Location/Specialty
  - props n' junk
*/

import React, { Component } from 'react'
import styled from 'styled-components';

const testUser = {
  name: 'Aklutch90001',
  location: 'Los Angeles, California',
  bio: 'Angel Investor, Tech Enthusiast, Acting'
}

const ProfilePageWrapper = styled.div`
  display: flex;
  background: green;
  width: 100%;
`;

const ProfileInfo = styled.div`
  display: flex;
  height: 400px;
`;

const ProfileImg = styled.img`
  width: 300px;
  height: 400px;
  background: blue;
`;

const ProfileBio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 50px;
`;

const ProfileStats = styled.h4`
  font-size: 40px;
`;
const ProfileStat = styled.span`
  font-weight: bold;
`;
const ActivityButtons = styled.div`
  
`;

export default class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <ProfilePageWrapper>
        <ProfileInfo>
          <ProfileImg />
          <ProfileBio>
            <ProfileStats><ProfileStat>Username</ProfileStat>: {testUser.name}</ProfileStats>
            <ProfileStats><ProfileStat>Location</ProfileStat>: {testUser.location}</ProfileStats>
            <ProfileStats><ProfileStat>Activities</ProfileStat>: {testUser.bio}</ProfileStats>
          </ProfileBio>
        </ProfileInfo>
        <ActivityButtons></ActivityButtons>
      </ProfilePageWrapper>
    )
  }
}
