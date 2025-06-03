import { useActiveMember } from "@/contexts/ActiveMember";
import { X } from "lucide-react-native";
import React from "react";
import {
    Dimensions,
    Image,
    Linking,
    Modal,
    Pressable,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Animated, {
    FadeIn,
    SlideInUp,
    SlideOutDown
} from "react-native-reanimated";

const { height } = Dimensions.get("window");

const MemberDetailsModal = () => {
    const { member, setDetailsIsOpen } = useActiveMember();

    const handleBackdropPress = () => {
        setDetailsIsOpen(false);
    };

    if (!member) return null;

    return (
        <Modal transparent animationType="none" visible={true}>
            {/* Backdrop */}
            <Pressable
                onPress={handleBackdropPress}
                style={{
                    flex: 1,
                    backgroundColor: "rgba(0,0,0,0.4)",
                    justifyContent: "flex-end",
                }}
            >
                {/* Details Panel */}
                <Animated.View
                    entering={SlideInUp.duration(300)}
                    exiting={SlideOutDown.duration(300)}
                    style={{
                        backgroundColor: "#fff",
                        padding: 24,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        shadowColor: "#000",
                        shadowOpacity: 0.2,
                        shadowOffset: { width: 0, height: -2 },
                        shadowRadius: 10,
                        elevation: 5,
                        maxHeight: height * 0.9,
                    }}
                >
                    {/* Drag handle */}
                    <View
                        style={{
                            alignSelf: "center",
                            width: 40,
                            height: 4,
                            backgroundColor: "#ccc",
                            borderRadius: 2,
                            marginBottom: 12,
                        }}
                    />

                    {/* Close button */}
                    <TouchableOpacity
                        onPress={handleBackdropPress}
                        style={{
                            position: "absolute",
                            top: 20,
                            right: 20,
                            zIndex: 10,
                        }}
                    >
                        <X size={24} color="#555" />
                    </TouchableOpacity>

                    {/* Member Avatar */}
                    <Animated.View entering={FadeIn.delay(100)} style={{ alignItems: "center", marginBottom: 16 }}>
                        <Image
                            source={{ uri: member.photo }}
                            style={{
                                width: 120,
                                height: 120,
                                borderRadius: 60,
                                borderWidth: 4,
                                borderColor: "#fff",
                            }}
                        />
                    </Animated.View>

                    {/* Member Info */}
                    <Animated.View entering={FadeIn.delay(200)} style={{ alignItems: "center", marginBottom: 12 }}>
                        <Text style={{ fontSize: 22, fontWeight: "bold", color: "#333" }}>
                            {member.name}
                        </Text>
                        <Text style={{ fontSize: 16, color: "#666", marginBottom: 4 }}>
                            {member.jobTitle}
                        </Text>
                        <View style={{ flexDirection: "row", gap: 8 }}>
                            <Text style={tagStyle}>{member.department}</Text>
                            <Text style={tagStyle}>{member.type}</Text>
                        </View>
                    </Animated.View>

                    {/* Description */}
                    <Animated.View entering={FadeIn.delay(300)} style={{ marginBottom: 16 }}>
                        <Text
                            style={{
                                textAlign: "center",
                                color: "#666",
                                lineHeight: 20,
                            }}
                        >
                            {member.description || "No description available."}
                        </Text>
                    </Animated.View>

                    {/* Socials */}
                    <Animated.View
                        entering={FadeIn.delay(400)}
                        style={{ flexDirection: "row", justifyContent: "center", gap: 12 }}
                    >
                        {member.socials.map(({ icon, href }, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => Linking.openURL(href)}
                                style={{
                                    backgroundColor: "#4f46e5", // Replace with your primary color
                                    padding: 12,
                                    borderRadius: 999,
                                }}
                            >
                                {icon}
                            </TouchableOpacity>
                        ))}
                    </Animated.View>

                    {/* Phone Number */}
                    {member.phone && (
                        <Animated.View entering={FadeIn.delay(500)} style={{ marginTop: 20, alignItems: "center" }}>
                            <TouchableOpacity onPress={() => Linking.openURL(`tel:${member.phone}`)}>
                                <Text style={{ color: "#4f46e5", fontWeight: "600" }}>
                                    {member.phone}
                                </Text>
                            </TouchableOpacity>
                        </Animated.View>
                    )}
                </Animated.View>
            </Pressable>
        </Modal>
    );
};

const tagStyle = {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
    fontSize: 12,
    color: "#666",
};

export default MemberDetailsModal;
