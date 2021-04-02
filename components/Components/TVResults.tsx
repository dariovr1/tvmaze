import { css } from '@emotion/native';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Result } from '../../model/Search/tvmaze';
import { RootState } from '../../Store';
import SeriesItem from '../UI/Components/SeriesItem';
import Container from '../UI/Global/Container';

const TVResults = () => {
  const dispatch = useDispatch();
  const series : Result[] = useSelector((state : RootState) => state.film.data );

  return(
    <Container direction="row" alignitems="center" wrap="wrap">
         <FlatList
            data={series}
            renderItem={({item}) => <SeriesItem series={item} />}
            keyExtractor={(item, index) => item.show.id.toString()}
            numColumns={3}
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingVertical: 20 }}
          />
    </Container>    
   )
}

export default TVResults;
