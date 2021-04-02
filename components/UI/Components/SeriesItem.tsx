import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, Text } from 'react-native';
import { Result } from '../../../model/Search/tvmaze';
import Container from '../Global/Container';

interface SeriesItemProps {
    series : Result,
}

const SeriesItem : React.FC<SeriesItemProps> = (props) => {
    const {series : {show}} = props;
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9 / 16);
    const imageWidth = dimensions.width;
    return(
    <Container style={{flexBasis: '50%', padding: 10}}>
        {show.image && <Image style={{width: '100%', height: imageHeight}} source={{uri : show.image.medium }} />  }
        <Text>{show.name}</Text>
    </Container>
    )
}

export default SeriesItem;