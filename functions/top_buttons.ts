const handleFullScreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
};

const handleClose = () => {
  window.close();
};

const handleMinimize = () => {
  // there's no way to minimize a window in the browser; with electron we can achieve this.
};

export { handleFullScreen, handleClose, handleMinimize };
