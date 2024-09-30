import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    FlatList,
} from "react-native";
import React from "react";
import MainWrapper from "@/src/components/MainWrapper";
import ThemeText from "@/src/components/theme/ThemeText";
import Header from "@/src/components/header";
import { shadowImageStyle } from "@/constants/Styles";
import { useCustomTheme } from "@/src/contexts/theme";
import {
    ArrowLeftStartOnRectangleIcon,
    PencilSquareIcon,
    PlusIcon,
} from "react-native-heroicons/outline";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

export const CreditCard = ({ onPress }: { onPress: VoidFunction }) => {
    const themeValue = useCustomTheme();
    const { colors } = themeValue;

    return (
        <TouchableOpacity className="min-h-[100px]" onPress={onPress}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[colors.text.disable, colors.background.highlight]}
                style={styles.creditCard}
            >
                <View className="flex-row justify-between items-center">
                    <ThemeText fontSize={13} color={colors.text.default}>
                        **** **** **** 1905
                    </ThemeText>

                    <Image
                        source={require("../../assets/images/vcb-logo.png")}
                        className="h-10 w-10"
                        resizeMode="contain"
                    />
                </View>

                <View className="flex-row justify-between items-center mt-2">
                    <ThemeText
                        color={colors.text.default}
                        fontSize={13}
                        letterSpacing={1.15}
                    >
                        DAO HUU QUAN
                    </ThemeText>

                    <View className="items-center">
                        <ThemeText color={colors.text.light} fontSize={10}>
                            EXPIRES
                        </ThemeText>
                        <ThemeText
                            fontSize={10}
                            fontWeight="bold"
                            color={colors.text.default}
                            otherProps={{ marginTop: 4 }}
                        >
                            9/30
                        </ThemeText>
                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const ProfileTab = () => {
    const themeValue = useCustomTheme();
    const { colors } = themeValue;

    const onModifyCreditCard = () => {
        router.push("/(profile)/modify-card");
    };

    return (
        <MainWrapper headerComponent={<Header title="Profile" />}>
            <ScrollView>
                <View
                    className="w-[200px] mx-auto h-[200px] mt-3 items-center justify-center rounded-full"
                    style={shadowImageStyle("#110E0B")}
                >
                    <Image
                        source={require("../../assets/images/avatar.png")}
                        className="w-[190px] h-[190px] rounded-full"
                        style={{ borderColor: "#9C9C9C", borderWidth: 2 }}
                    />
                </View>

                <ThemeText
                    otherProps={styles.name}
                    fontWeight="bold"
                    fontSize={24}
                    color={colors.text.dark}
                >
                    Đào Hữu Quân
                </ThemeText>

                <ThemeText
                    fontSize={16}
                    otherProps={styles.text}
                    color={colors.text.highlight}
                >
                    Email: uvnb195@gmail.com
                </ThemeText>

                <ThemeText
                    fontSize={16}
                    otherProps={styles.text}
                    color={colors.text.highlight}
                >
                    Phone No: 0399818565
                </ThemeText>

                <ThemeText
                    fontSize={16}
                    otherProps={styles.text}
                    color={colors.text.highlight}
                >
                    Address: 72376 Francis Mountains, South Altaside, AK 13277
                </ThemeText>

                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 40,
                        marginHorizontal: 12,
                        columnGap: 12,
                    }}
                >
                    <FlatList
                        bounces={false}
                        data={[1, 2, 3]}
                        horizontal
                        contentContainerStyle={{
                            columnGap: 8,
                            paddingRight: 8,
                        }}
                        renderItem={() => (
                            <CreditCard onPress={onModifyCreditCard} />
                        )}
                    />

                    <TouchableOpacity
                        style={{
                            width: "30%",
                            borderWidth: 1,
                            borderColor: colors.border.default,
                            padding: 12,
                        }}
                        className="rounded items-center justify-center"
                        onPress={() => onModifyCreditCard()}
                    >
                        <PlusIcon color={colors.icon.highlight} />
                        <ThemeText
                            otherProps={{
                                textAlign: "center",
                                marginTop: 6,
                                fontSize: 10,
                                lineHeight: 16,
                            }}
                            color={colors.icon.highlight}
                        >
                            ADD NEW CARD
                        </ThemeText>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        marginHorizontal: 12,
                        marginVertical: 24,
                        flexDirection: "row",
                        columnGap: 12,
                    }}
                >
                    <TouchableOpacity
                        style={[
                            styles.actionItem,
                            {
                                borderColor:
                                    colors.smallButton.backgroundDisable,
                            },
                        ]}
                    >
                        <ThemeText
                            otherProps={{ fontWeight: 500 }}
                            color={colors.text.dark}
                        >
                            Profile Setting
                        </ThemeText>

                        <PencilSquareIcon
                            color={colors.icon.highlight}
                            size={20}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.actionItem,
                            {
                                borderColor:
                                    colors.smallButton.backgroundDisable,
                            },
                        ]}
                    >
                        <ThemeText
                            otherProps={{ fontWeight: 500 }}
                            color={colors.text.dark}
                        >
                            Log Out
                        </ThemeText>

                        <ArrowLeftStartOnRectangleIcon
                            color={colors.icon.highlight}
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </MainWrapper>
    );
};

const styles = StyleSheet.create({
    name: {
        marginTop: 40,
        textAlign: "center",
    },
    text: {
        fontWeight: 500,
        textAlign: "center",
        marginTop: 6,
        lineHeight: 22,
    },
    actionItem: {
        borderWidth: 1,
        borderRadius: 8,
        height: 40,
        justifyContent: "space-between",
        padding: 8,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    creditCard: {
        borderRadius: 8,
        padding: 8,
        justifyContent: "center",
    },
});

export default ProfileTab;
