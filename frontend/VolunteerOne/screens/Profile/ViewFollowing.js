// This page is temporarily being used to test other pages (notifications, friends, etc.) - matt
import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';
import ProfileItem from '../../components/ProfileItem';
import profiles from '../../constants/profiles';

// ================================= View Friends Page ================================= //

<<<<<<< HEAD:frontend/VolunteerOne/screens/Profile/ViewFollowing.js
// ================================= View Friends Page ================================= //

const { width } = Dimensions.get('screen');

class ViewFollowingPage extends React.Component {
  renderFollowing = () => {
=======
const { width } = Dimensions.get('screen');

class ViewFriendsPage extends React.Component {
  renderNotifications = () => {
>>>>>>> 4e9ea3a (Update (#5)):frontend/VolunteerOne/screens/Friends/index.js
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.notifications}>
<<<<<<< HEAD:frontend/VolunteerOne/screens/Profile/ViewFollowing.js
 
        <Block flex>
=======
        
        {/* map all notifications using loop */}
        <Block flex>
          {profiles.map(profile => (
             <ProfileItem item={profile} horizontal />
          ))}
>>>>>>> 4e9ea3a (Update (#5)):frontend/VolunteerOne/screens/Friends/index.js
        </Block>
    
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
<<<<<<< HEAD:frontend/VolunteerOne/screens/Profile/ViewFollowing.js
        {this.renderFollowing()}
=======
        {this.renderNotifications()}
>>>>>>> 4e9ea3a (Update (#5)):frontend/VolunteerOne/screens/Friends/index.js
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  notifications: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

<<<<<<< HEAD:frontend/VolunteerOne/screens/Profile/ViewFollowing.js
export default ViewFollowingPage;
=======
export default ViewFriendsPage;
>>>>>>> 4e9ea3a (Update (#5)):frontend/VolunteerOne/screens/Friends/index.js
