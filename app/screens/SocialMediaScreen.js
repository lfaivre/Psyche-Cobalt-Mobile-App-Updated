import React from 'react';
import { View, Text, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import {
  Icon,
  Button,
  Container,
  Header,
  Content,
  Left,
  Body,
  Tab,
  Tabs,
  TabHeading
} from 'native-base';
import NavigationHeader from '../components/NavigationHeader.js';
import headerStyle from '../styles/SideMenu.style';
import pageStyle from '../styles/SocialMedia.style';

export default class SocialMediaScreen extends React.Component {
  render() {
    return (
      <Container>
        {/* Display the header, including access to the navigation menu */}
        <NavigationHeader {...this.props} />
        {/* Tabs to access various social media pages */}
        <Tabs
          tabBarUnderlineStyle={pageStyle.underlineStyle}
          tabContainerStyle={pageStyle.tabContainer}
        >
          <Tab
            heading={
              <TabHeading style={pageStyle.activeTab}>
                <Image
                  source={require('../assets/images/icons/InstagramGradient_YellowtoOrange-03.png')}
                  style={{ width: 32, height: 32 }}
                />
              </TabHeading>
            }
            tabStyle={pageStyle.inactiveTab}
            activeTabStyle={pageStyle.activeTab}
          >
            <WebView
              source={{ uri: 'https://www.instagram.com/nasapsyche/' }}
            />
          </Tab>

          <Tab
            heading={
              <TabHeading style={pageStyle.activeTab}>
                <Image
                  source={require('../assets/images/icons/FacebookGradient_YellowtoOrange.png')}
                  style={{ width: 32, height: 32 }}
                />
              </TabHeading>
            }
            tabStyle={pageStyle.inactiveTab}
            activeTabStyle={pageStyle.activeTab}
          >
            <WebView source={{ uri: 'https://www.facebook.com/NASAPsyche/' }} />
          </Tab>

          <Tab
            heading={
              <TabHeading style={pageStyle.activeTab}>
                <Image
                  source={require('../assets/images/icons/TwitterGradient_YellowtoOrange-08.png')}
                  style={{ width: 32, height: 32 }}
                />
              </TabHeading>
            }
            tabStyle={pageStyle.inactiveTab}
            activeTabStyle={pageStyle.activeTab}
          >
            <WebView source={{ uri: 'https://twitter.com/NASAPsyche' }} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
