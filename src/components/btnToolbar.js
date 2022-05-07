import React from 'react'
import {Button, ButtonToolbar} from 'rsuite'

const btnToolbar = () => {
  return (
    <ButtonToolbar style={{display:"flex"}}>
        <Button style={{marginRight:"100px",display:"flex"}} appearance="primary">Submit</Button>
        <Button appearance="default">Cancel</Button>
    </ButtonToolbar>
  )
}

export default btnToolbar