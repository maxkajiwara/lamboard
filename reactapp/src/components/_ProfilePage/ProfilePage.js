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

export default class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.state = { // test user
      name: 'Aklutch90001',
      location: 'Los Angeles, California',
      bio: 'Angel Investor, Tech Enthusiast, Acting'
    }
  }

  render() {
    return (
      <ProfilePageWrapper>
        <ProfileInfo>
          <ProfileImg />
          <ProfileBio>
            <ProfileStats><ProfileStat>Username</ProfileStat>: {this.state.name}</ProfileStats>
            <ProfileStats><ProfileStat>Location</ProfileStat>: {this.state.location}</ProfileStats>
            <ProfileStats><ProfileStat>Activities</ProfileStat>: {this.state.bio}</ProfileStats>
          </ProfileBio>
        </ProfileInfo>
        <ActivityButtons></ActivityButtons>
      </ProfilePageWrapper>
    )
  }
}

// styled components
const ProfilePageWrapper = styled.div`
  display: flex;
  width: 95%;
  margin: 0 auto;
  margin-top: 100px;
  background: rgb(233,168,195); /* Old browsers */
  background: -moz-linear-gradient(top, rgba(233,168,195,1) 0%, rgba(200,142,193,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(233,168,195,1) 0%,rgba(200,142,193,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(233,168,195,1) 0%,rgba(200,142,193,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e9a8c3', endColorstr='#c88ec1',GradientType=0 ); /* IE6-9 */
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
const ActivityButtons = styled.div`
  
`;