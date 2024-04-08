import  React from 'react';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {ButtonGroup,Button,Stack} from '@mui/material'
import { useState } from 'react';
const Buttongroup = () => {

  const [formats, setFormats] = useState([])

  const handleformat = (event,newFormats)=>{
  setFormats(newFormats);
  console.log(newFormats)
  }
  return (
    <div>
        <ButtonGroup variant='contained' size='large' orientation='vertical' >
            <Button >Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
        </ButtonGroup>
        <Stack direction='row'>
      <ToggleButtonGroup onChange={handleformat} value={formats} aria-label='text formatting' size='large'>
        <ToggleButton value='bold' aria-label="bold"><FormatBoldIcon/></ToggleButton>
        <ToggleButton value = 'italic'><FormatItalicIcon/></ToggleButton>
        <ToggleButton value ='underlined'><FormatUnderlinedIcon/></ToggleButton>
      </ToggleButtonGroup>
        </Stack>
    </div>
  )
}

export default Buttongroup
