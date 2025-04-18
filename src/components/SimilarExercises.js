import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import Loader from './Loader'
import HorizontalScrollbar from './HorizontalScrollbar'
const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
   <Box sx={{mt: {lg: '100px', xs: '0'}}}>
   <Typography variant='h3'mb={5}>Exercises that target the same muscle group</Typography>
   <Stack direction='row' sx={{p: '2px', position: 'relative'}}>
    {targetMuscleExercises ? <HorizontalScrollbar data={targetMuscleExercises}/> : <Loader />}
   </Stack>
   <Typography variant='h3'mb={5}>Similar Equipment Exercises</Typography>
   <Stack direction='row' sx={{p: '2px', position: 'relative'}}>
    {equipmentExercises ? <HorizontalScrollbar data={equipmentExercises}/> : <Loader />}
   </Stack>
   
   </Box>
  )
}

export default SimilarExercises
