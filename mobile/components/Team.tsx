import { TEAM, TEAM_MEMBER_TYPE } from '@/constants';
import { useActiveMember } from '@/contexts/ActiveMember';
import { useFilter } from '@/contexts/FilterProvider';
import React, { useEffect, useState } from 'react';
import {
    Animated,
    Dimensions,
    FlatList,
    Modal,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import MemberCard from './MemberCard';
import MemberDetailsModal from './MemberDetailsModal';

const Team = () => {
    const { filters, setFilters } = useFilter();
    const { detailsIsOpen, setDetailsIsOpen, member, setMember } = useActiveMember();
    const [team, setTeam] = useState(TEAM);
    const [pageIndex, setPageIndex] = useState({
        startIndex: 0,
        endIndex: 5,
        total: TEAM.length
    });

    // Animation values
    const fadeAnim = useState(new Animated.Value(0))[0];
    const scaleAnim = useState(new Animated.Value(0.8))[0];
    const slideAnim = useState(new Animated.Value(20))[0];

    // Filter team members
    useEffect(() => {
        let filteredTeam = TEAM;

        if (filters.departments.length > 0) {
            filteredTeam = filteredTeam.filter(member =>
                filters.departments.includes(member.department)
            );
        }

        if (filters.jobType !== "all") {
            filteredTeam = filteredTeam.filter(member =>
                member.type.toLowerCase().replace("-", "_").replace(" ", "_") === filters.jobType
            );
        }

        const offset = (filters.page - 1) * 6;
        const startVal = 0 + offset;
        const endVal = startVal + 6;

        setPageIndex({
            startIndex: startVal,
            endIndex: endVal > filteredTeam.length ? filteredTeam.length : endVal,
            total: filteredTeam.length
        });

        setTeam(filteredTeam.slice(startVal, endVal));

        // Animate when team changes
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 5,
                useNativeDriver: true
            }),
            Animated.spring(slideAnim, {
                toValue: 0,
                friction: 8,
                useNativeDriver: true
            })
        ]).start();
    }, [filters]);

    // Close modal when clicking outside
    const handleBackdropPress = () => {
        setDetailsIsOpen(false);
    };

    const generateNumberArray = (stopIndex: number): number[] => {
        return Array.from({ length: stopIndex }, (_, index) => index + 1);
    };

    // Render each team member
    const renderMember = ({ item }: { item: TEAM_MEMBER_TYPE }) => (
        <Animated.View
            className={'min-w-full'}
            style={[
                styles.memberItem,
                {
                    opacity: fadeAnim,
                    transform: [
                        { translateY: slideAnim },
                        { scale: scaleAnim }
                    ]
                }
            ]}
        >
            <TouchableOpacity
                onPress={() => {
                    if (member?.id === item.id && detailsIsOpen) {
                        setDetailsIsOpen(false);
                    } else {
                        setMember(item);
                        setDetailsIsOpen(true);
                    }
                }}
            >
                <MemberCard {...item} />
            </TouchableOpacity>
        </Animated.View>
    );

    // Render pagination buttons
    const renderPaginationButton = (pageNum: number) => {
        const isActive = filters.page === pageNum;

        return (
            <Animated.View
                key={pageNum}
                style={[
                    styles.paginationButton,
                    isActive && styles.activePaginationButton,
                    {
                        transform: [
                            { scale: isActive ? scaleAnim : 1 }
                        ]
                    }
                ]}
            >
                <TouchableOpacity
                    onPress={() => {
                        setFilters(prev => ({ ...prev, page: pageNum }));

                        // Button press animation
                        Animated.sequence([
                            Animated.timing(scaleAnim, {
                                toValue: isActive ? 0.9 : 0.95,
                                duration: 100,
                                useNativeDriver: true
                            }),
                            Animated.spring(scaleAnim, {
                                toValue: isActive ? 1.1 : 1,
                                friction: 3,
                                useNativeDriver: true
                            })
                        ]).start();
                    }}
                    style={styles.paginationTouchable}
                >
                    <Text style={[styles.paginationText, isActive && styles.activePaginationText]}>
                        {pageNum}
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        );
    };

    return (
        <ScrollView className='flex-col mb-36'>
            <View style={styles.header}>
                <Text style={styles.title}>Meet Our Team</Text>
                <Text style={styles.subtitle}>
                    Showing {pageIndex.startIndex + 1} to {pageIndex.endIndex} of {pageIndex.total}
                </Text>
            </View>

            <FlatList
                data={team}
                renderItem={({ item }) => {
                    console.log(item);

                    return renderMember({ item })
                }}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                scrollEnabled={false}
                columnWrapperStyle={styles.columnWrapper}
                contentContainerStyle={styles.listContent}
            />

            <Modal
                visible={detailsIsOpen}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setDetailsIsOpen(false)}
            >
                <Pressable
                    style={styles.modalBackdrop}
                    onPress={handleBackdropPress}
                >
                    <MemberDetailsModal />
                </Pressable>
            </Modal>

            {Math.ceil(pageIndex.total / 5) > 1 && (
                <View style={styles.paginationContainer}>
                    {generateNumberArray(Math.ceil(pageIndex.total / 5)).map(renderPaginationButton)}
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        marginBottom: 20,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eaeaea',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2d3748',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#718096',
    },
    columnWrapper: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    listContent: {
        paddingBottom: 20,
    },
    memberItem: {
        width: Dimensions.get('window').width / 2 - 24,
        marginBottom: 16,
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        paddingVertical: 10,
    },
    paginationButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        marginHorizontal: 4,
        backgroundColor: '#fff',
        overflow: 'hidden',
    },
    activePaginationButton: {
        backgroundColor: '#4299e1',
        borderColor: '#4299e1',
    },
    paginationTouchable: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    paginationText: {
        fontSize: 16,
        color: '#4a5568',
    },
    activePaginationText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    modalBackdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Team;