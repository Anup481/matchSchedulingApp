import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

import { CONSTANTS, Styles, COLORS } from '../../../Themes';

const Card = (props) => {
    console.log(props.data)

    const [data, setData] = useState(props.data);

    return (
        props.type == 1 ?
            <View style={[Styles.flexOne, Styles.row, Styles.spaceBetween, Styles.alignItemsCenter, Styles.height60, Styles.backgroundColorWhite, Styles.padding8,
            Styles.borderRadius8, Styles.shadow]}>

                <View style= {[Styles.width220]}>
                    <Text style={[Styles.paddingLeft16, Styles.fontSize16, Styles.colorBlack, Styles.maxWidth210]}
                        numberOfLines={1}>
                        {data.matchName}
                    </Text>
                </View>

                <View style={[Styles.row]}>
                    <TouchableOpacity activeOpacity={CONSTANTS.activeOpacity}
                        onPress={() => props.onPressEdit(props.data)}>
                        <Icon2 name='edit'
                            size={CONSTANTS.Width30}
                            color={COLORS.BLACK} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={CONSTANTS.activeOpacity}
                        style={[Styles.paddingLeft16]}
                        onPress={() => props.onPressDelete(props.data?.id)}>
                        <Icon name='trash'
                            size={CONSTANTS.Width28}
                            color={COLORS.BLACK} />
                    </TouchableOpacity>
                </View>
            </View>
            :
            <TouchableOpacity activeOpacity={CONSTANTS.activeOpacity}
                style={[Styles.flexOne, Styles.row, Styles.alignItemsCenter, Styles.height60, Styles.backgroundColorWhite, Styles.padding8,
                Styles.borderRadius8, Styles.shadow]}
                onPress={() => props.onPress()}>
                <Icon name='add-sharp'
                    size={CONSTANTS.Width30}
                    color={COLORS.BLACK} />

                <Text style={[Styles.paddingLeft16, Styles.fontSize12, Styles.colorBlack]}>
                    Schedule a new match
                </Text>
            </TouchableOpacity>
    )
}

export default Card;