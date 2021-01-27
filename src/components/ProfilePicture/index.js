import React from 'react'
import { Image, View } from 'react-native';
import styles from './styles'

const ProfilePicture = ({ uri, size = 70 }) => (
	<View style={[styles.container, { width: size + 7, height: size + 7 }]}>
		<Image
			source={{ 
				uri
			}}
			style={[styles.image, { width: size, height: size }]}
		/>
	</View>
)

export default ProfilePicture;
