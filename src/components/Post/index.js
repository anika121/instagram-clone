import React from 'react';
import {View} from 'react-native';

import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

const Post = ({ post: { user, imageUri, caption, likesCount, postedAt }}) => (
  <View>
    <Header imageUri={user.imageUri} name={user.name} />
    <Body imageUri={imageUri} />
    <Footer caption={caption} likesCount={likesCount} postedAt={postedAt} />
  </View>
);

export default Post;
