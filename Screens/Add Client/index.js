import { StyleSheet, ScrollView, View, StatusBar, Text, Linking } from 'react-native'
import React from 'react'
import { DataTable, List, Checkbox } from 'react-native-paper';

const optionsPerPage = [2, 3, 4];

const AddClient = ({ navigation }) => {
    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[10]);

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <View>
            <StatusBar backgroundColor="#008497" barStyle="light-content" />
            <DataTable>
                <ScrollView horizontal>
                    <DataTable.Header>
                        <DataTable.Title style={{ width: 70 }}>Select</DataTable.Title>
                        <DataTable.Title style={{ width: 100 }}>Date</DataTable.Title>
                        <DataTable.Title style={{ width: 120 }}>Client</DataTable.Title>
                        <DataTable.Title style={{ width: 150 }}>Project</DataTable.Title>
                        <DataTable.Title style={{ width: 180 }}>Message</DataTable.Title>
                        <DataTable.Title style={{ width: 200 }}>Files</DataTable.Title>
                        <DataTable.Title style={{ width: 100 }}>Notes</DataTable.Title>
                        <DataTable.Title style={{ width: 100 }}>Assigned by</DataTable.Title>
                        <DataTable.Title style={{ width: 100 }}>Assigned to</DataTable.Title>
                        <DataTable.Title style={{ width: 100 }}>Action</DataTable.Title>
                    </DataTable.Header>
                </ScrollView>
                <ScrollView horizontal>
                    <View>
                        <DataTable.Row  >
                            <DataTable.Cell style={{ width: 70 }}>
                                <Checkbox.Item status="checked" />
                            </DataTable.Cell>
                            <DataTable.Cell style={{ width: 100 }}>04/05/2021</DataTable.Cell>
                            <DataTable.Cell style={{ width: 120 }}>Methawe Andes</DataTable.Cell>
                            <DataTable.Cell style={{ width: 150 }}>NFT crypto dasboard</DataTable.Cell>
                            <DataTable.Cell style={{ width: 180 }}>
                                <Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dicta ab cupiditate consectetur at ipsam amet quis eveniet, consequatur velit odio quidem dolore placeat fugiat doloremque culpa ut facere temporibus.
                                </Text>
                            </DataTable.Cell>
                            <DataTable.Cell style={{ width: 200 }}>
                                <Text style={{ color: 'blue' }}
                                    onPress={() => Linking.openURL('http://google.com')}>
                                    Google
                                </Text>
                            </DataTable.Cell>
                            <DataTable.Cell style={{ width: 180 }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellendus eum, sapiente, quibusdam consectetur praesentium soluta </DataTable.Cell>
                            <DataTable.Cell style={{ width: 120 }}>Hemant Gupta</DataTable.Cell>
                            <DataTable.Cell style={{ width: 120 }}>Rahul tyagi</DataTable.Cell>
                            <DataTable.Cell style={{ width: 180 }}>04/05/2021</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row  >
                            <DataTable.Cell style={{ width: 70 }}>
                                <Checkbox.Item status="checked" />
                            </DataTable.Cell>
                            <DataTable.Cell style={{ width: 100 }}>04/05/2021</DataTable.Cell>
                            <DataTable.Cell style={{ width: 120 }}>Methawe Andes</DataTable.Cell>
                            <DataTable.Cell style={{ width: 150 }}>NFT crypto dasboard</DataTable.Cell>
                            <DataTable.Cell style={{ width: 180 }}>
                                <Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dicta ab cupiditate consectetur at ipsam amet quis eveniet, consequatur velit odio quidem dolore placeat fugiat doloremque culpa ut facere temporibus.
                                </Text>
                            </DataTable.Cell>
                            <DataTable.Cell style={{ width: 200 }}>

                            </DataTable.Cell>
                            <DataTable.Cell style={{ width: 180 }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellendus eum, sapiente, quibusdam consectetur praesentium soluta </DataTable.Cell>
                            <DataTable.Cell style={{ width: 120 }}>Hemant Gupta</DataTable.Cell>
                            <DataTable.Cell style={{ width: 120 }}>Rahul tyagi</DataTable.Cell>
                            <DataTable.Cell style={{ width: 180 }}>04/05/2021</DataTable.Cell>

                        </DataTable.Row>

                    </View>

                </ScrollView>
                <DataTable.Pagination
                    page={page}
                    numberOfPages={3}
                    onPageChange={(page) => setPage(page)}
                    label="1-2 of 6"
                    optionsPerPage={optionsPerPage}
                    itemsPerPage={itemsPerPage}
                    setItemsPerPage={setItemsPerPage}
                    showFastPagination
                    optionsLabel={'Rows per page'}
                />
            </DataTable>
        </View>
    )
}


export default AddClient

const styles = StyleSheet.create({})