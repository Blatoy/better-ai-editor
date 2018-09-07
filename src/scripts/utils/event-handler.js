global.mouse = {
  x: 0,
  y: 0,
  canvasX: 0,
  canvasY: 0,
  buttons: {}
};

global.metaKeys = {
  ctrl: false,
  alt: false,
  shift: false
}

global.camera = {bounds: {x:0, y:0, width: 0, height: 0}, scaling: 1};

global.tabDown = false;

function setMousePosition(e) {
  let rect = canvas.getBoundingClientRect();
  global.mouse.x = e.clientX;
  global.mouse.y = e.clientY;
  global.mouse.canvasX = e.clientX - rect.left;
  global.mouse.canvasY = e.clientY - rect.top;
}

function setCanvasSize() {
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
}

module.exports.addEditorEvents = () => {
  window.addEventListener("mousedown", (e) => {
    camera.onMouseDown(e.which);
    global.mouse.buttons[e.which] = true;
  });

  window.addEventListener("mouseup", (e) => {
    global.mouse.buttons[e.which] = false;
  });

  window.addEventListener("dblclick", (e) => {
    actionHandler.trigger("blocks: display settings for selected block")
  });

  window.addEventListener("keydown", (e) => {
    actionHandler.handleKeyDown(e);

    if(e.key === "Tab") global.tabDown = true;
    metaKeys = {
      ctrl: e.ctrlKey,
      shift: e.shiftKey,
      alt: e.altKey
    };
  });

  window.addEventListener("keyup", (e) => {
    window.focus(); // Shitty fix to prevent tab focusing something strange?

    actionHandler.handleKeyUp(e);
    if(e.key === "Tab") global.tabDown = false;
    metaKeys = {
      ctrl: e.ctrlKey,
      shift: e.shiftKey,
      alt: e.altKey
    };
  });

  canvas.addEventListener("wheel", (e) => {
    camera.onScroll(e.deltaX, e.deltaY, e.ctrlKey, e.shiftKey);
  });

  window.addEventListener("resize", (e) => {
    setCanvasSize();
  });

  window.addEventListener("mousemove", (e) => {
    setMousePosition(e);
  });

  document.onreadystatechange = () => {
    setCanvasSize();
  };

  window.addEventListener('beforeunload', function (event) {
     if(tabManager.closeAll()) {
       event.returnValue = true;
     }
   });
};
