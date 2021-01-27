import React, {useState, useEffect} from 'react';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from './styles';

const Footer = ({likesCount: likesCountProp, caption, postedAt}) => {
	const [isLiked, setIsLike] = useState(false);
	const [likesCount, setLikesCount] = useState(0)

    const onLikePressed = () => {
		setIsLike(!isLiked)
		let ammount = isLiked ? -1 : 1
		setLikesCount(likesCount + ammount);
	};
	
	useEffect(() => {
		setLikesCount(likesCountProp)
	}, [])

    return (
        <View style={styles.container}>
            <View style={styles.iconsContainer}>
                <View style={styles.leftIcons}>
                    <TouchableWithoutFeedback onPress={onLikePressed}>
                        {isLiked ? (
                            <ADIcon name="heart" size={25} color={'#f05176'} />
                        ) : (
                            <ADIcon name="hearto" size={25} color={'#525252'} />
                        )}
                    </TouchableWithoutFeedback>
                    <FontistoIcon name="comment" size={22} color={'#525252'} />
                    <IoniconsIcon
                        name="paper-plane-outline"
                        size={25}
                        color={'#525252'}
                    />
                </View>
                <FAIcon name="bookmark-o" size={25} color={'#525252'} />
            </View>

            <Text style={styles.likes}>
                {likesCount == 1 ? likesCount + ' like' : likesCount + ' likes'}
            </Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
    );
};

export default Footer;
