import React from "react";
import { FlatList, Text, Pressable } from "react-native";
import styles from "./styles";

const Categories = ({ categories, selectedCategory, onCategroyPress }) => {
    return (
        <FlatList
            horizontal
            data={categories}
            style={{ borderWidth: 1, marginRight: -32 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
                const selected = selectedCategory === item;

                return (
                    <Pressable onPress={() => onCategroyPress(item)} style={[styles.itemContainer, selected ? styles.selectedItemContainer : {}]}>
                        <Text style={[styles.item, selectedCategory === item ? styles.selectedItem : {}]}>{item}</Text>
                    </Pressable>
                );
            }}
        />
    );
}
export default React.memo(Categories);  