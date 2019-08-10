import React from 'react';
import {Permissions} from 'expo';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import Filtros from '../imageFilters/Filtros';

export default class ImagePickerComponent extends React.Component {
    state = {
        imageUri: null,
    };

    render() {
        let { imageUri } = this.state;
        
        if (imageUri) 
            return <Filtros imageUri={imageUri}/>
        


        return (
            <View>
                <View style={{marginBottom: 20}}>
                    <Button 
                        title="Tomar Foto"
                        onPress={this._openCamera}
                    />
                </View>

                <View>
                    <Button 
                        title="Escoger Foto"
                        onPress={this._pickImage}
                    />
                </View> 
                
            </View>
        );
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            aspect: [4, 3],
        });

        if (!result.cancelled) {
            this.setState({ imageUri: result.uri});
        }
    };

    _openCamera = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            aspect: [4, 3],
        });

        if (!result.cancelled) {
            this.setState({ imageUri: result.uri});
        }
    };
}