import MyCarousel from '../carousel/Carousel';
import { Image, Text, StyleSheet, View, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';

let imgWidth, imgHeight;

export default class Filtros extends React.Component {

    state = {
        filtros: [
            {
                'nombre': 'Rojo',
                'accion': 'filtro Rojo',
                'icon': 'https://maxmax.com/Old_Web/images/Filters/Tree665nmLg.jpg',
                'id': 1
            },
            {
                'nombre': 'Rojo',
                'accion': 'filtro Rojo',
                'icon': 'https://maxmax.com/Old_Web/images/Filters/Tree665nmLg.jpg',
                'id': 2
            },
            {
                'nombre': 'Rojo',
                'accion': 'filtro Rojo',
                'icon': 'https://maxmax.com/Old_Web/images/Filters/Tree665nmLg.jpg',
                'id': 3
            },
            {
                'nombre': 'Rojo',
                'accion': 'filtro Rojo',
                'icon': 'https://maxmax.com/Old_Web/images/Filters/Tree665nmLg.jpg',
                'id': 4
            },
            {
                'nombre': 'Rojo',
                'accion': 'filtro Rojo',
                'icon': 'https://maxmax.com/Old_Web/images/Filters/Tree665nmLg.jpg',
                'id': 5
            },
            {
                'nombre': 'Rojo',
                'accion': 'filtro Rojo',
                'icon': 'https://maxmax.com/Old_Web/images/Filters/Tree665nmLg.jpg',
                'id': 6
            },
        ]
    };

    render() {
        return (
            <View style={styles.container}>
                <Image 
                    source={{ uri: this.props.imageUri }} 
                    style={styles.image} 
                > 
                
                </Image>

                {/* Carousel de Filtros  */}

                <View style={styles.bottomContainer}>
                    <ScrollView horizontal={true} style={{flex: 1, flexDirection: 'row'}}>
                        {
                            this.state.filtros.map((item, index) => {
                                return (
                                    <TouchableOpacity key = {item.id} style={styles.items} onPress={(evt) => this._filterClick(evt, item.accion)}> 
                                        <Image source={{uri: item.icon}} style={styles.itemIcon}></Image>
                                        <Text style={styles.itemText}>{item.nombre}</Text>
                                    </TouchableOpacity>
                                );
                            })
                        }

                       {/*  <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} /> */}
                    </ScrollView>
                    
                </View>
            </View>

        ); 
    }

    _filterClick(evt, action) {
        console.log(action);
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: 800, 
        height: Dimensions.get('window').height, 
        position: 'absolute',
    }, 

    container : {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    }, 

    bottomContainer: {
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        width: Dimensions.get('window').width,
        bottom: 20, 
    },

    items: {
        width: 100, 
        height: 100,
        marginLeft: 5, 
        marginRight: 5,
        backgroundColor: 'transparent', 
        justifyContent: 'center', 
        alignItems: 'center',

    }, 

    itemIcon: {
        height: 80, 
        width: 80
    }, 

    itemText: {
        fontSize: 20, 
        paddingHorizontal: 5,
        paddingVertical: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center', 


    }
  });