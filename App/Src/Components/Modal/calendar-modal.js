import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, View, Modal, TouchableOpacity, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Styles } from '../../../Themes';
import moment from 'moment';
import COLOR from '../../../Themes/color';

const CalendarModal = (props) => {

    const [selectedDates, setSelectedDates] = useState({});
    const [show, setShow] = useState(props.show);
    const [value, setValue] = useState('');

    useEffect(() => {
        setShow(props.show);
    }, [props.show]);

    const _handleSelectedDate = () => {
        const selectedDatesArray = Object.keys(selectedDates);
        console.log(selectedDatesArray)
        props.selectedDate(selectedDatesArray, props.isEdit, value);
    };

    const _handleDayPress = (day) => {
        const { dateString } = day;
        const updatedSelectedDates = { ...selectedDates };

        if (selectedDates[dateString]) {
            delete updatedSelectedDates[dateString];
        } else {
            updatedSelectedDates[dateString] = { selected: true };
        }

        setSelectedDates(updatedSelectedDates);
    };

    const _closeModal = () => {
        props.onClose();
    }

    return (
        <Modal animationType={'fade'}
            statusBarTranslucent
            transparent={true}
            visible={show}>

            {/* close modal */}
            <TouchableWithoutFeedback
                onPress={() => _closeModal()}>
                <View style={[Styles.flexOne, Styles.backgroundBlackTransparent]} />
            </TouchableWithoutFeedback>

            <View style={[Styles.backgroundBlackTransparent]}>
                <View style={[Styles.backgroundColorWhite, Styles.borderTopRightRadius24, Styles.borderTopLeftRadius24, Styles.positionAbsoluteBottom, Styles.paddingVertical16]}>
                    <View style={[Styles.paddingHorizontal16, Styles.paddingTop16, Styles.paddingBottom24]}>
                        <KeyboardAvoidingView behavior="padding">
                            <TextInput style={[Styles.borderWidth1, Styles.colorBlack, Styles.borderRadius16, Styles.paddingHorizontal16, { backgroundColor: 'rgba(255,255,255,0.2)' }]}
                                placeholder='Enter a match name'
                                keyboardType='default'
                                placeholderTextColor={COLOR.BLACK}
                                value={props.value}
                                onChangeText={(txt) => setValue(txt)} />
                        </KeyboardAvoidingView>
                    </View>

                    <Calendar onDayPress={_handleDayPress}
                        markedDates={selectedDates}
                        minDate={new Date()}
                        maxDate={'2024-12-31'} />

                    <View style={[Styles.paddingTop16, Styles.paddingBottom24, Styles.paddingHorizontal16]}>
                        <TouchableOpacity style={[Styles.paddingVertical12, Styles.paddingHorizontal12, Styles.borderRadius10, Styles.backgroundColorCaribbeanGreen]}
                            onPress={_handleSelectedDate}>
                            <Text style={[Styles.fontSize14, Styles.colorWhite, Styles.bold, Styles.textAlign]}>
                                Selected
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default CalendarModal;
