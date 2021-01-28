import { css } from '@emotion/native';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchtv } from '../../Store/Slice/Maze';
import TextField from '../UI/Common/TextField';
import Container from '../UI/Global/Container';

const FilmSearch = () => {
  const [search,setSearch] = useState<string>('');
  const dispatch = useDispatch();

  const handleChangeText = (text : string) => {
      setSearch(text);
  }

  const handleSearch = () => {
    if (search.length > 3) {
      dispatch(fetchtv(search));
    }
  }

  return(
    <Container direction="row" alignitems="center">
    <TextField onChangeText={handleChangeText} value={search}  />
    <Button onPress={handleSearch} title="Flex On" />
    </Container>    
  )

}

export default FilmSearch;
