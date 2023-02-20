import React, { useEffect, useState } from "react";
import { SafeAreaView, View, FlatList, Text } from "react-native";
import Title from '../../component/Title';
import Styles from "./styles";
import Categories from '../../component/Categories';
import AttractionCard from "../../component/AttractionCard";
import styles from "./styles";
import jsonData from "../../component/data/Attractions.json";
import categories from "../../component/data/categories.json";
import { useNavigation } from '@react-navigation/native';


const All = 'All';

const Home = () => {
    const navigation = useNavigation();
    const [selectedCategory, setselectedCategory] = useState(All);
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(jsonData);
    }, []);

    useEffect(() => {
        if (selectedCategory === All) {
            setData(jsonData)
        } else {
            const filteredData = jsonData?.filter(item => item?.categories?.includes(selectedCategory));

            setData(filteredData);
        }
    }, [selectedCategory])


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                numColumns={2}
                style={{ flexGrow: 1, }}
                ListEmptyComponent={(<Text style={styles.emptyText}>No items found.</Text>)}
                ListHeaderComponent={(
                    <View style={{ margin: 32 }}>

                        <Title text="Where do" style={{ fontWeight: 'normal' }} />
                        <Title text="you want to go? " />
                        <Title text="Explore Attractions" style={Styles.subtitle} />
                        <Categories
                            selectedCategory={selectedCategory}
                            onCategroyPress={setselectedCategory}
                            categories={[All, ...categories]}
                        />
                    </View>
                )}
                keyExtractor={(item) => String(item?.id)}
                renderItem={({ item, index }) => (
                    <AttractionCard
                        key={item.id}
                        style={index % 2 === 0 ? { marginRight: 12, marginLeft: 32 } : { marginRight: 32 }}
                        onpress={
                            navigation.navigate('AttractionDetails')
                        }
                        title={item.name}
                        subtitle={item.city}
                        imageSrc={item.images?.length ? item.images[0] : null}
                    />
                )
                }

            />
        </SafeAreaView >

    );
}

export default React.memo(Home);