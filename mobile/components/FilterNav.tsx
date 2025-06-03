import { DEPARTMENTS } from '@/constants';
import { useFilter } from '@/contexts/FilterProvider';
import { Check, ChevronDown } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import {
    Animated,
    Dimensions,
    LayoutAnimation,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    UIManager,
    View
} from 'react-native';

// Enable layout animations for Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const FilterNav = () => {
    const [filterTabIsOpen, setFilterTabIsOpen] = useState(true);
    const [heightAnim] = useState(new Animated.Value(0));
    const [opacityAnim] = useState(new Animated.Value(0));
    const { setFilters, filters } = useFilter();

    useEffect(() => {
        const isMobile = Dimensions.get('window').width < 640;
        if (isMobile) setFilterTabIsOpen(false);
    }, []);

    useEffect(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

        if (filterTabIsOpen) {
            Animated.parallel([
                Animated.timing(heightAnim, {
                    toValue: 1,
                    duration: 400,
                    useNativeDriver: false,
                }),
                Animated.timing(opacityAnim, {
                    toValue: 1,
                    duration: 300,
                    delay: 100,
                    useNativeDriver: false,
                }),
            ]).start();
        } else {
            Animated.parallel([
                Animated.timing(heightAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: false,
                }),
                Animated.timing(opacityAnim, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: false,
                }),
            ]).start();
        }
    }, [filterTabIsOpen]);

    const heightInterpolation = heightAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0%", "100%"], // Adjust based on content height
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Filter By</Text>
                <TouchableOpacity
                    onPress={() => setFilterTabIsOpen(!filterTabIsOpen)}
                    style={styles.chevronButton}
                >
                    <Animated.View style={{
                        transform: [{
                            rotate: filterTabIsOpen ? '180deg' : '0deg'
                        }]
                    }}>
                        <ChevronDown size={16} color="#007AFF" />
                    </Animated.View>
                </TouchableOpacity>
            </View>

            <Animated.View style={[
                styles.content,
                {
                    height: heightInterpolation,
                    opacity: opacityAnim
                }
            ]}>
                {/* <View style={styles.filterSection}>
                    <Select
                        selectedValue={filters.jobType}
                        onValueChange={(value) => setFilters(prev => ({
                            ...prev,
                            jobType: value
                        }))}
                    >
                        <Picker.Item label="Job Type" value="all" />
                        <Picker.Item label="Full-time" value="full_time" />
                        <Picker.Item label="Part-time" value="part_time" />
                        <Picker.Item label="Contract" value="contract" />
                        <Picker.Item label="Internship" value="internship" />
                    </Picker>
                </View> */}

                <FilterByDepartment />

                <TouchableOpacity
                    style={styles.clearButton}
                    onPress={() => {
                        setFilters({
                            jobType: "all",
                            departments: [],
                            page: 1
                        });
                    }}
                >
                    <Text style={styles.clearButtonText}>Clear Filters</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};

const FilterByDepartment = () => {
    const { setFilters, filters } = useFilter();

    return (
        <View style={styles.departmentContainer}>
            <Text style={styles.subtitle}>Categories</Text>
            <View style={styles.scrollContainer}>
                {DEPARTMENTS.map(department => {
                    const isSelected = filters.departments.includes(department.title);
                    return (
                        <TouchableOpacity
                            key={department.id}
                            style={styles.checkboxContainer}
                            onPress={() => {
                                if (isSelected) {
                                    setFilters(prev => ({
                                        ...prev,
                                        departments: prev.departments.filter(dep => dep !== department.title)
                                    }));
                                } else {
                                    setFilters(prev => ({
                                        ...prev,
                                        departments: [...prev.departments, department.title]
                                    }));
                                }
                            }}
                        >
                            <View style={[styles.checkbox, isSelected && styles.checked]}>
                                {isSelected && <Check size={14} color="white" />}
                            </View>
                            <Text style={styles.checkboxLabel}>{department.title}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        minWidth: 300,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    chevronButton: {
        padding: 8,
    },
    content: {
        overflow: 'hidden',
    },
    filterSection: {
        marginBottom: 16,
    },
    departmentContainer: {
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 14,
        marginBottom: 8,
    },
    scrollContainer: {
        maxHeight: 150,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    checked: {
        backgroundColor: '#007AFF',
        borderColor: '#007AFF',
    },
    checkboxLabel: {
        fontSize: 14,
        textTransform: 'capitalize',
    },
    clearButton: {
        borderWidth: 1,
        borderColor: '#007AFF',
        borderRadius: 4,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 8,
        position: "absolute",
        width: '100%',
        bottom: "10%",
    },
    clearButtonText: {
        color: '#007AFF',
        fontWeight: '500',
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        overflow: 'hidden',
    },
    picker: {
        width: '100%',
    },
});

export default FilterNav;