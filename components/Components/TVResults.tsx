import { css } from '@emotion/native';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Text } from 'react-native';
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
        {
           series.length > 0 && series.map((single) => <SeriesItem series={single} />)
        }
    </Container>    
  )
}

export default TVResults;
