// Change keybinds here
// The key item must be one of the following:
// A character: 'a', 'b', ... , 'z', '+', '1', etc
// A key code: 'KeyA', 'Digit1', 'Escape' etc
// Note: the only reason to use a keycode is if you want to use shift and a number

// Default:
// ctrl-z         => undo
// ctrl-y         => redo
// ctrl-s         => save
// r              => auto block layout
// ctrl-t         => open new tab
// ctrl-w         => close current tab
// ctrl-Tab       => switch to next tab
// ctrl-shift-Tab => switch to previous tab
// Delete         => delete selected block
// Delete         => delete selected link
// ctrl-Delete    => delete selected block and children
// Escape         => cancel block linking

module.exports = [{
    key: 'z',
    ctrl: true,
    alt: false,
    shift: false,
    action: "core: undo"
  },
  {
    key: 'y',
    ctrl: true,
    alt: false,
    shift: false,
    action: "core: redo"
  },
  {
    key: 's',
    ctrl: true,
    alt: false,
    shift: false,
    action: "core: save"
  },
  {
    key: 'r',
    ctrl: false,
    alt: false,
    shift: false,
    action: "blocks: auto layout"
  },
  {
    key: 't',
    ctrl: true,
    alt: false,
    shift: false,
    action: "tabs: create new tab"
  },
  {
    key: 'w',
    ctrl: true,
    alt: false,
    shift: false,
    action: "tabs: close current tab"
  },
  {
    key: 'Tab',
    ctrl: true,
    alt: false,
    shift: false,
    action: "tabs: switch to next tab"
  },
  {
    key: 'Tab',
    ctrl: true,
    alt: false,
    shift: true,
    action: "tabs: switch to previous tab"
  },
  {
    key: 'Delete',
    ctrl: false,
    alt: false,
    shift: false,
    action: "blocks: delete selected"
  },
  {
    key: 'Delete',
    ctrl: true,
    alt: false,
    shift: false,
    action: "delete selected block and children"
  },
  {
    key: 'Delete',
    ctrl: false,
    alt: false,
    shift: false,
    action: "delete selected link"
  },
  {
    key: 'Escape',
    ctrl: false,
    alt: false,
    shift: false,
    action: "cancel block linking"
  },
  {
    key: 'p',
    ctrl: true,
    alt: false,
    shift: true,
    action: "quick access bar: execute action dialog"
  },
  {
    key: 'Enter',
    ctrl: false,
    alt: false,
    shift: false,
    action: "quick access bar: add block dialog"
  },/*
  {
    key: 'Enter',
    ctrl: false,
    alt: false,
    shift: true,
    action: "quick access bar add linked else block"
  },
  {
    key: 'Enter',
    ctrl: true,
    alt: false,
    shift: false,
    action: "quick access bar add block"
  },*/
  {
    key: 'Enter',
    ctrl: false,
    alt: false,
    shift: false,
    action: "quick access bar: execute selected result"
  },
  {
    key: 'Escape',
    ctrl: false,
    alt: false,
    shift: false,
    action: "quick access bar: hide dialog"
  },
  {
    key: 'ArrowUp',
    ctrl: false,
    alt: false,
    shift: false,
    action: "quick access bar: previous result"
  },
  {
    key: 'ArrowDown',
    ctrl: false,
    alt: false,
    shift: false,
    action: "quick access bar: next result"
  },
  {
    key: 'ArrowDown',
    ctrl: true,
    alt: false,
    shift: false,
    action: "blocks: select last sibling"
  },
  {
    key: 'ArrowUp',
    ctrl: true,
    alt: false,
    shift: false,
    action: "blocks: select first sibling"
  },
  {
    key: 'ArrowDown',
    ctrl: false,
    alt: false,
    shift: false,
    action: "blocks: select next sibling"
  },
  {
    key: 'ArrowUp',
    ctrl: false,
    alt: false,
    shift: false,
    action: "blocks: select previous sibling"
  },
  {
    key: 'ArrowLeft',
    ctrl: false,
    alt: false,
    shift: false,
    action: "blocks: select parent"
  },
  {
    key: 'ArrowRight',
    ctrl: false,
    alt: false,
    shift: false,
    action: "blocks: select child"
  },
  {
    key: 'KeyW',
    ctrl: false,
    alt: false,
    shift: false,
    action: "camera: move up"
  },
  {
    key: 'KeyS',
    ctrl: false,
    alt: false,
    shift: false,
    action: "camera: move down"
  },
  {
    key: 'KeyA',
    ctrl: false,
    alt: false,
    shift: false,
    action: "camera: move left"
  },
  {
    key: 'KeyD',
    ctrl: false,
    alt: false,
    shift: false,
    action: "camera: move right"
  },
  {
    key: 'Home',
    ctrl: false,
    alt: false,
    shift: false,
    action: "camera: reset position"
  },
  {
    key: '0',
    ctrl: true,
    alt: false,
    shift: false,
    action: "camera: reset zoom"
  },
  {
    key: 'r',
    ctrl: true,
    alt: false,
    shift: false,
    action: "debug: reload"
  },
];