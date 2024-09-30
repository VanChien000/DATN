import MainWrapper from "@/src/components/MainWrapper";
import {
    ArrowLeftIcon,
    HomeModernIcon,
    KeyIcon,
    ShieldCheckIcon,
    UserIcon,
} from "react-native-heroicons/outline";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    View,
} from "react-native";
import { useCustomTheme } from "@/src/contexts/theme";
import { router } from "expo-router";
import CustomInput from "@/src/components/input/CustomInput";
import CustomButton from "@/src/components/button/CustomButton";
import { LinearGradient } from "expo-linear-gradient";
import ThemeText from "@/src/components/theme/ThemeText";

const CreditCard = () => {
    const themeValue = useCustomTheme();
    const { colors } = themeValue;

    return (
        <TouchableOpacity className="h-[150px]">
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[colors.text.disable, colors.background.highlight]}
                className="rounded-2 p-3 h-full flex justify-center"
            >
                <View className="flex-row justify-between items-center">
                    <View className="text-center flex-1">
                        <ThemeText
                            fontSize={13}
                            color={colors.text.default}
                            otherProps={{ textAlign: "center" }}
                        >
                            **** **** **** 1905
                        </ThemeText>
                        <ThemeText
                            fontSize={13}
                            color={colors.text.default}
                            otherProps={{ textAlign: "center", marginTop: 6 }}
                        >
                            DAO HUU QUAN
                        </ThemeText>
                    </View>

                    <Image
                        source={require("../../assets/images/vcb-logo.png")}
                        className="h-10 w-10"
                        resizeMode="contain"
                    />
                </View>

                <View className="flex-row justify-between items-center mt-6">
                    <View className="items-center w-1/2">
                        <ThemeText color={colors.text.light} fontSize={10}>
                            CCV / CVV
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

                    <View className="items-center w-1/2">
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

const ModifyCreditCard = () => {
    const themeValue = useCustomTheme();
    const { colors } = themeValue;

    return (
        <MainWrapper>
            <View className="p-3">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="mb-4"
                >
                    <ArrowLeftIcon color={colors.icon.highlight} />
                </TouchableOpacity>

                <CreditCard />

                <View className="mt-8">
                    <View className="mb-3">
                        <CustomInput
                            placeHolder="Bank Name"
                            placeHolderColor={colors.text.light}
                            leftIcon={
                                <HomeModernIcon color={colors.icon.highlight} />
                            }
                        />
                    </View>

                    <View className="mb-3">
                        <CustomInput
                            placeHolder="Your Name"
                            placeHolderColor={colors.text.light}
                            leftIcon={
                                <UserIcon color={colors.icon.highlight} />
                            }
                        />
                    </View>

                    <View className="mb-3">
                        <CustomInput
                            placeHolder="Card Number"
                            placeHolderColor={colors.text.light}
                            leftIcon={<KeyIcon color={colors.icon.highlight} />}
                        />
                    </View>

                    <View className="flex-row">
                        <View className="mb-3 w-1/2 flex-1 pr-2">
                            <CustomInput
                                placeHolder="CCV / CVV"
                                placeHolderColor={colors.text.light}
                                leftIcon={
                                    <ShieldCheckIcon
                                        color={colors.icon.highlight}
                                    />
                                }
                            />
                        </View>

                        <View className="mb-3 w-1/2 flex-1 pl-2">
                            <CustomInput
                                placeHolder="Expires"
                                placeHolderColor={colors.text.light}
                                leftIcon={
                                    <ShieldCheckIcon
                                        color={colors.icon.highlight}
                                    />
                                }
                            />
                        </View>
                    </View>

                    <TouchableOpacity>
                        <CustomButton
                            title="Confirm & Save"
                            height={50}
                            style={{ width: "100%", marginTop: 12 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </MainWrapper>
    );
};

export default ModifyCreditCard;
