import React from 'react';
import Chip from '@material-ui/core/Chip';

export function Topics({topic}) {

    return (
      <Chip size="small" label={topic} />
    )
}
