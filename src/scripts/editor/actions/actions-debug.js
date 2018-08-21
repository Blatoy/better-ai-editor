const DISPLAY_DEBUG_COMMANDS = true;

module.exports.registerActions = () => {
  actionHandler.addAction({
    name: "debug: reload",
    action: () => {
      location.reload();
    },
    displayable: DISPLAY_DEBUG_COMMANDS,
    preventTriggerWhenDialogOpen: false,
    preventTriggerWhenInputFocused: false
  });
  /*
    actionHandler.addAction({name:}"debug: log definitions", () => {
      console.log(blockLoader.getBlockDefinitions())
    }, false, false, 0, DISPLAY_DEBUG_COMMANDS, false, () => {}, false);*/

  // undo stack test that doesn't make any sense to keep anyway
  /*actionHandler.addAction("debug: add log to undo stack", (num) => {
    console.log("Added " + num + " to history");
  }, () => {
    return Math.round(Math.random() * 100);
  }, (num) => {
    console.log("Removed " + num + " from history");
  }, 0, DISPLAY_DEBUG_COMMANDS);*/
  /*
    actionHandler.addAction("debug: log undo stack", () => {
      let currentHistory = actionHandler.setHistory({undo: [], redo: []});
      console.log(currentHistory);
      actionHandler.setHistory(currentHistory);

    }, false, false, 0, DISPLAY_DEBUG_COMMANDS, false, () => {}, false);*/
};
