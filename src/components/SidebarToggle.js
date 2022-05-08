import React,{useState} from 'react'

const styles = {
  radioGroupLabel: {
    padding: '8px 12px',
    display: 'inline-block',
    verticalAlign: 'middle'
  }
};

 const SidebarToggle = () => {
  const [size, setSize] = useState('xs');
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleOpen = key => {
    setOpen(true);
    setPlacement(key);
  };
  return (
    <div></div>
  )
}

export default SidebarToggle