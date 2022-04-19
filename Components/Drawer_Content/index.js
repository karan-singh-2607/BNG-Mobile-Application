import { StyleSheet, View } from 'react-native';
import React from 'react';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntD from 'react-native-vector-icons/AntDesign'

const DrawerContent = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 20 }} >
                            <Avatar.Image
                                source={{
                                    uri: 'https://picsum.photos/seed/picsum/200/300',
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                < Title style={styles.title} >Karan Singh</
                                Title>
                                <Caption style={styles.caption}>Web Developer</
                                Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="folder-outline"
                                    color={color}
                                    size={size} />
                            )}
                            label="Assignments IN"
                            onPress={() => props.navigation.navigate("Assignment IN")} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="alarm-snooze"
                                    color={color}
                                    size={size} />
                            )}
                            label="Snoozed"
                            onPress={() => { }} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="folder-open-outline"
                                    color={color}
                                    size={size} />
                            )}
                            label="Open Projects"
                            onPress={() => { }} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <AntD
                                    name="addfile"
                                    color={color}
                                    size={size} />
                            )}
                            label="Add Assignment"
                            onPress={() => { }} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <AntD
                                    name="addfolder"
                                    color={color}
                                    size={size} />
                            )}
                            label="Add Project"
                            onPress={() => { }} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <AntD
                                    name="adduser"
                                    color={color}
                                    size={size} />
                            )}
                            label="Add Client"
                            onPress={() => { }} />
                    </Drawer.Section>
                </View >
            </DrawerContentScrollView >
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="exit-to-app" color={color} size={size} />
                    )}
                    label="Sign Out"
                    onPress={() => { }}
                />
            </Drawer.Section>
        </View >
    );
};

export default DrawerContent;

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        пarginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
