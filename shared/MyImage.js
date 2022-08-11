import FastImage from 'react-native-fast-image'
//nem működik
export const MyImage = ({uri}) => (
    <FastImage
        style={{ width: 200, height: 200 }}
        source={{
            uri: uri,
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
    />
)