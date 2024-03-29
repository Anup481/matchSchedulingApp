import { StyleSheet } from 'react-native';
import CONSTANTS from './constants';
import COLOR from './color';

export default StyleSheet.create({
	flexOne: {
		flex: 1
	},
	justifyCenter: {
		justifyContent: 'center'
	},
	justifyFlexStart: {
		justifyContent: 'flex-start'
	},
	justifyFlexEnd: {
		justifyContent: 'flex-end'
	},
	alignItemsCenter: {
		alignItems: 'center'
	},
	alignItemsFlexEnd: {
		alignItems: 'flex-end'
	},
	alignItemsFlexStart: {
		alignItems: 'flex-start'
	},
	alignContentStart: {
		alignContent: 'flex-start'
	},
	alignContentCenter: {
		alignContent: 'center'
	},
	row: {
		flexDirection: 'row'
	},
	column: {
		flexDirection: 'column'
	},
	spaceBetween: {
		justifyContent: 'space-between'
	},
	overFlow: {
		overflow: 'hidden'
	},
	alignSelfFlexEnd: {
		alignSelf: 'flex-end'
	},
	center: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	textAlign: {
		textAlign: 'center'
	},
	textAlignCenter: {
		textAlign: 'center'
	},
	underLine: {
		textDecorationLine: 'underline'
	},
	activeZindex: {
		zIndex: 1
	},
	flexWrap: {
		flexWrap: 'wrap'
	},
	position: {
		position: 'absolute'
	},

	// shadow
	shadow: {
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 4,
		elevation: 5,
	},

	// font weight
	bold: {
		fontWeight: 'bold'
	},

	// font size
	fontSize9: {
		fontSize: CONSTANTS.fontSize9
	},
	fontSize10: {
		fontSize: CONSTANTS.fontSize10
	},
	fontSize11: {
		fontSize: CONSTANTS.fontSize11
	},
	fontSize12: {
		fontSize: CONSTANTS.fontSize12
	},
	fontSize13: {
		fontSize: CONSTANTS.fontSize13
	},
	fontSize14: {
		fontSize: CONSTANTS.fontSize14
	},
	fontSize16: {
		fontSize: CONSTANTS.fontSize16
	},
	fontSize18: {
		fontSize: CONSTANTS.fontSize18
	},
	fontSize20: {
		fontSize: CONSTANTS.Width20
	},
	fontSize24: {
		fontSize: CONSTANTS.fontSize24
	},

	// border width
	borderWidth1: {
		borderWidth: StyleSheet.hairlineWidth * 1
	},

	// margin
	marginLeft12: {
		marginLeft: CONSTANTS.Width12
	},
	marginLeft16: {
		marginLeft: CONSTANTS.Width16
	},

	// margin right
	marginRight12: {
		marginRight: CONSTANTS.Width12
	},

	// padding top
	paddingTop4: {
		paddingTop: CONSTANTS.Width4
	},
	paddingTop12: {
		paddingTop: CONSTANTS.Width12
	},
	paddingTop16: {
		paddingTop: CONSTANTS.Width16
	},

	// padding bottom
	paddingBottom24: {
		paddingBottom: CONSTANTS.Width24
	},

	// paddingLeft
	paddingLeft16: {
		paddingLeft: CONSTANTS.Width16
	},
	paddingLeft24: {
		paddingLeft: CONSTANTS.Width24
	},

	// padding horizontal
	paddingHorizontal12: {
		paddingHorizontal: CONSTANTS.Width12
	},
	paddingHorizontal16: {
		paddingHorizontal: CONSTANTS.Width16
	},

	// padding vertical
	paddingVertical12: {
		paddingVertical: CONSTANTS.Width12
	},
	paddingVertical16: {
		paddingVertical: CONSTANTS.Width16
	},

	// width 
	width: {
		width: CONSTANTS.Width
	},
	width2: {
		width: CONSTANTS.Width2
	},
	width: {
		width: CONSTANTS.Width
	},
	width16: {
		width: CONSTANTS.Width16
	},
	width18: {
		width: CONSTANTS.Width18
	},
	width24: {
		width: CONSTANTS.Width24
	},
	width32: {
		width: CONSTANTS.Width32
	},
	width48: {
		width: CONSTANTS.Width48
	},
	width55: {
		width: CONSTANTS.Width55
	},
	width60: {
		width: CONSTANTS.Width60
	},
	width64: {
		width: CONSTANTS.Width64
	},
	width58: {
		width: CONSTANTS.Width58
	},
	width72: {
		width: CONSTANTS.Width72
	},
	width74: {
		width: CONSTANTS.Width74
	},
	width75: {
		width: CONSTANTS.Width75
	},
	width80: {
		width: CONSTANTS.Width80
	},
	width84: {
		width: CONSTANTS.Width84
	},
	width90: {
		width: CONSTANTS.Width90
	},
	width94: {
		width: CONSTANTS.Width94
	},
	width103: {
		width: CONSTANTS.Width103
	},
	width105: {
		width: CONSTANTS.Width105
	},
	Width112: {
		width: CONSTANTS.Width112
	},
	width140: {
		width: CONSTANTS.Width140
	},
	width148: {
		width: CONSTANTS.Width148
	},
	width156: {
		width: CONSTANTS.Width156
	},
	width160: {
		width: CONSTANTS.Width160
	},
	width132: {
		width: CONSTANTS.Width132
	},
	width172: {
		width: CONSTANTS.Width172
	},
	width180: {
		width: CONSTANTS.Width180
	},
	width184: {
		width: CONSTANTS.Width184
	},
	width200: {
		width: CONSTANTS.Width200
	},
	width220: {
		width: CONSTANTS.Width220
	},
	width242: {
		width: CONSTANTS.Width242
	},
	width260: {
		width: CONSTANTS.Width260
	},
	width268: {
		width: CONSTANTS.Width268
	},
	width278: {
		width: CONSTANTS.Width278
	},
	Width280: {
		width: CONSTANTS.Width280
	},
	width312: {
		width: CONSTANTS.Width312
	},
	width320: {
		width: CONSTANTS.Width320
	},
	width328: {
		width: CONSTANTS.Width328
	},
	width330: {
		width: CONSTANTS.Width330
	},
	Width406: {
		width: CONSTANTS.Width406
	},

	// max min
	minWidth50: {
		minWidth: CONSTANTS.Width50
	},
	maxWidth66: {
		maxWidth: CONSTANTS.Width66
	},
	maxWidth70: {
		maxWidth: CONSTANTS.Width70
	},
	maxWidth88: {
		maxWidth: CONSTANTS.Width88
	},
	maxWidth99: {
		maxWidth: CONSTANTS.Width99
	},
	maxWidth150: {
		maxWidth: CONSTANTS.Width150
	},
	maxWidth160: {
		maxWidth: CONSTANTS.Width160
	},
	maxWidth190: {
		maxWidth: CONSTANTS.Width190
	},
	maxWidth210: {
		maxWidth: CONSTANTS.Width210
	},
	maxWidth260: {
		maxWidth: CONSTANTS.Width260
	},

	height60: {
		height: CONSTANTS.Width60
	},

	// background color
	backgroundBlackTransparent: {
		backgroundColor: CONSTANTS.TRANSPARENT
	},
	backgroundColorWhite: {
		backgroundColor: COLOR.WHITE
	},
	backgroundColorCaribbeanGreen: {
		backgroundColor: COLOR.CARIBBEAN_GREEN
	},
	backgroundColorScienceBlue: {
		backgroundColor: COLOR.SCIENCE_BLUE
	},

	// font color
	colorBlack: {
		color: COLOR.BLACK
	},
	colorWhite: {
		color: COLOR.WHITE
	},

	// padding
	padding8: {
		padding: CONSTANTS.Width8
	},
	padding15: {
		padding: CONSTANTS.Width15
	},

	// border radius
	borderRadius4: {
		borderRadius: CONSTANTS.Width4
	},
	borderRadius8: {
		borderRadius: CONSTANTS.Width8
	},
	borderRadius10: {
		borderRadius: CONSTANTS.Width10
	},
	borderRadius12: {
		borderRadius: CONSTANTS.Width12
	},
	borderRadius16: {
		borderRadius: CONSTANTS.Width16
	},

	// border top
	borderTopLeftRadius24: {
		borderTopLeftRadius: CONSTANTS.Width24
	},
	borderTopRightRadius24: {
		borderTopRightRadius: CONSTANTS.Width24
	},
});