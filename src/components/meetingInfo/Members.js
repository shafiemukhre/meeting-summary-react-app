import React from 'react';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';


export function Members({member}) {

    return (
      <Chip icon={<FaceIcon />} label={member} />
    )
}
