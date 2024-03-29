import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ScrollView, FlatList, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { Styles } from '../../../Themes';
import { Header } from '../../Components/Header';
import { Statusbar } from '../../Components/StatusBar';
import { Card } from '../../Components/Card';
import { CalendarModal, DeleteModal } from '../../Components/Modal';
import { fetchData, insertData, deleteData, editData } from '../../../Redux/actions';
import { Toast } from '../../Components/Toast';
import { useToast } from '../../Components/Toast/useToast';

const HomeScreen = (props) => {

	const toastRef = useRef();
	const { showToast, toastVisible, toastMessage, fadeAnim } = useToast();

	const [showCalendarModal, setShowCalendarModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [rowId, setRowId] = useState('');

	const dispatch = useDispatch();
	const data = useSelector(state => state.data);

	useEffect(() => {
		// Fetch data on component mount
		dispatch(fetchData('FMScheduler'));
	}, [dispatch]);

	const _handleCreateMatch = () => {
		setShowCalendarModal(true);
	}

	const _handleCalendarClose = () => {
		setShowCalendarModal(false);
	}

	const _handleDeleteModalClose = () => {
		setShowDeleteModal(false);
	}

	const _handleConfirmDelete = () => {
		dispatch(deleteData('FMScheduler', rowId));
		setShowDeleteModal(false);
		showToast('Data Deleted successfully!')
		setRowId('');
	}

	const _handleSelectedDate = (data, isEdit, name) => {
		setShowCalendarModal(false);

		if (data.length == 0) {
			showToast('Date not selected')
		} else if (name != undefined && name.length == 0) {
			showToast('Match name cannot be empty')
		} else {
			if (isEdit == true) {
				const newItem = {
					id: rowId,
					date: data,
					matchName: name
				};
				const id = dispatch(editData('FMScheduler', newItem));
				if (id) {
					showToast('Data updated successfully!');
				} else {
					showToast('Failed to update data');
				}
			} else {
				const newItem = {
					date: data,
					matchName: name
				};
				const id = dispatch(insertData('FMScheduler', newItem));
				if (id) {
					showToast('Data inserted successfully!');
				} else {
					showToast('Failed to update data');
				}
			}
		}
		setRowId('');
	}

	const _handleEdit = (data) => {
		setRowId(data.id);
		setShowCalendarModal(true);
		// dispatch(editData(data));
	}

	const _handleDelete = (id) => {
		setRowId(id);
		setShowDeleteModal(true);
		// dispatch(deleteData('FMScheduler', id));
	}

	return (
		<SafeAreaView style={[Styles.flexOne, Styles.backgroundColorCaribbeanGreen]}>
			<Statusbar />
			<Header title={'Fantasy Match Scheduling App'} />
			<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={[Styles.flexOne]}>
				<View style={[Styles.paddingTop12, Styles.paddingHorizontal16]}>
					<Card onPress={_handleCreateMatch} />
				</View>
				<FlatList data={data}
					bounces={false}
					showsVerticalScrollIndicator={false}
					keyExtractor={(item) => item.id.toString()}
					contentContainerStyle={[Styles.paddingBottom24]}
					extraData={data}
					renderItem={({ item, index }) => {
						return (
							<View style={[Styles.paddingHorizontal16, Styles.paddingTop16]}>
								<Card type={1} data={item} onPressEdit={_handleEdit} onPressDelete={() => _handleDelete(item.id)} />
							</View>
						)
					}}
				/>
			</ScrollView>

			{showCalendarModal &&
				<CalendarModal show={showCalendarModal}
					isEdit={rowId != '' && rowId != undefined}
					onClose={_handleCalendarClose}
					selectedDate={_handleSelectedDate} />
			}

			{showDeleteModal &&
				<DeleteModal show={showDeleteModal} onClose={_handleDeleteModalClose} onConfirm={_handleConfirmDelete} />
			}

			{showToast &&
				<Toast ref={toastRef} message={toastMessage} visible={toastVisible} fadeAnim={fadeAnim} />
			}
		</SafeAreaView>
	);
};

export default HomeScreen;
