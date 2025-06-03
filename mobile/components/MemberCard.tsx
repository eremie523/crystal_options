import { TEAM_MEMBER_TYPE } from '@/constants';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring
} from 'react-native-reanimated';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const MemberCard = (props: TEAM_MEMBER_TYPE) => {
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });

    const handlePressIn = () => {
        scale.value = withSpring(0.95);
    };

    const handlePressOut = () => {
        scale.value = withSpring(1);
    };

    return (
        <AnimatedTouchable
            activeOpacity={0.9}
            style={[styles.card, animatedStyle]}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
        >
            <View style={styles.cardContent}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: props.photo }}
                        style={styles.image}
                        accessibilityLabel={props.name.split(" ")[0]}
                    />
                </View>

                <View style={styles.detailsContainer}>
                    <Text style={styles.name}>{props.name}</Text>

                    <View style={styles.jobContainer}>
                        <Text style={styles.jobTitle}>{props.jobTitle}</Text>
                    </View>

                    <View style={styles.tagsContainer}>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>{props.department}</Text>
                        </View>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>{props.type}</Text>
                        </View>
                    </View>

                    <View style={styles.socialContainer}>
                        {/* {props.socials.map(({ href, icon }, i) => (
                            <SocialIcon
                                key={i}
                                icon={icon}
                                url={href}
                                size={24}
                                style={styles.socialIcon}
                            />
                        ))} */}
                    </View>
                </View>
            </View>

            <View style={styles.bottomBar} />
        </AnimatedTouchable>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f5f4f4',
        borderRadius: 16,
        marginBottom: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardContent: {
        flexDirection: 'row',
        padding: 16,
        position: 'relative',
        zIndex: 10,
    },
    imageContainer: {
        width: 90,
        height: 90,
        borderRadius: 45,
        overflow: 'hidden',
        marginRight: 12,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    detailsContainer: {
        flex: 1,
        padding: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2d3748',
        textAlign: 'center',
        marginBottom: 4,
    },
    jobContainer: {
        alignItems: 'center',
        paddingBottom: 8,
    },
    jobTitle: {
        color: '#718096',
        fontSize: 14,
        textAlign: 'center',
    },
    tagsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: 8,
        gap: 8,
    },
    tag: {
        backgroundColor: '#e2e8f0',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
    },
    tagText: {
        color: '#4a5568',
        fontSize: 12,
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 16,
        gap: 8,
    },
    socialIcon: {
        backgroundColor: '#4299e1',
        padding: 6,
        borderRadius: 8,
    },
    bottomBar: {
        height: 8,
        backgroundColor: '#4299e1',
        width: '100%',
    },
});

export default MemberCard;