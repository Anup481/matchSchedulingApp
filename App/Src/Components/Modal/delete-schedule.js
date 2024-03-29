import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, View, Modal, TouchableOpacity, Text } from 'react-native';
import { Styles } from '../../../Themes';

const DeleteModal = (props) => {

    const [show, setShow] = useState(props.show);

    useEffect(() => {
        setShow(props.show);
    }, [props.show]);

    const _handleConfirmDelete = () => {
        props.onConfirm();
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

                    <Text style={[Styles.paddingTop16, Styles.paddingBottom24, Styles.fontSize18, Styles.colorBlack, Styles.bold, Styles.textAlign]}>
                        Do you really want to delete?
                    </Text>

                    <View style={[Styles.row, Styles.paddingTop16, Styles.paddingBottom24, Styles.paddingHorizontal16]}>
                        <TouchableOpacity style={[Styles.flexOne, Styles.paddingVertical12, Styles.marginRight12, Styles.paddingHorizontal12, Styles.borderRadius10, Styles.backgroundColorCaribbeanGreen]}
                            onPress={_handleConfirmDelete}>
                            <Text style={[Styles.fontSize14, Styles.colorWhite, Styles.bold, Styles.textAlign]}>
                                Yes
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[Styles.flexOne, Styles.marginLeft12, Styles.paddingVertical12, Styles.paddingHorizontal12, Styles.borderRadius10, Styles.backgroundColorCaribbeanGreen]}
                            onPress={_closeModal}>
                            <Text style={[Styles.fontSize14, Styles.colorWhite, Styles.bold, Styles.textAlign]}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default DeleteModal;
