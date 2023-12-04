import React, { useState } from 'react';
import { Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Certificate = (props) => {
  const ImgSertif = props.ImgSertif;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="">
        <img
          src={ImgSertif}
          alt="Img Sertif Zilfa"
          id="ImgSertif"
          onClick={handleOpen}
          className="cursor-pointer"
        />
        <span>VIEW</span>
      </div>
      <Modal open={open} onClose={handleClose}>
        <div className="modal fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-75">
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: '0.5rem',
              right: '0.5rem',
              color: 'white',
              '&:hover': {
                backgroundColor: 'transparent', // Prevent background color change on hover
              },
            }}
          >
            <CloseIcon sx={{ fontSize: 52 , position: "relative"}} />
          </IconButton>
          <img src={ImgSertif} alt="Img Sertif Zilfa" className="max-w-full max-h-full" />
        </div>
      </Modal>
    </div>
  );
};

export default Certificate;
