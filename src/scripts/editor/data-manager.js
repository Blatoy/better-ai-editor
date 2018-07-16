const Block = require(basePath + '/src/scripts/editor/block.js');
const actionHandler = require(basePath + "/src/scripts/utils/action-handler.js");
const canvasStyle = require(basePath + '/src/scripts/utils/theme-loader.js').canvasStyle;

// Root block
const root = new Block("root", "root", {
  x: canvasStyle.blocks.rootPosition.x,
  y: canvasStyle.blocks.rootPosition.y
}, "root", {});

// Block list, init'd to root
let blocks = [];
let historyStack = [];

// Tab list
let tabs = [];

function updateTabListView() {
  let tabListDiv = document.getElementById("tab-list");
  tabListDiv.innerHTML = "";
  for (let i = 0; i < tabs.length; ++i) {
    let tabElement = document.createElement("span");
    tabElement.classList.add("tab-element");

    if (tabs[i].selected) {
      tabElement.classList.add("tab-selected");
    }

    tabElement.textContent = tabs[i].name;
    tabElement.onclick = (e) => {
      // TODO: switch button and edit/close
      selectTab(i);
    };
    tabListDiv.appendChild(tabElement);
  }
}

function selectTab(index) {
  // Allow cycling using switchTab
  if(index > tabs.length - 1) {
    index = 0;
  }
  else if(index < 0){
    index = tabs.length - 1;
  }
  tabs.map((element, i) => {
    element.selected = (i == index);
  });

  blocks = tabs[index].blocks;
  historyStack = tabs[index].historyStack;

  updateTabListView();
}

function addTab(name, blockList = [], selected = false) {
  if (blockList.length == 0) {
    // Everything needs a root block
    blockList.push(new Block("root", "root", {
      x: canvasStyle.blocks.rootPosition.x,
      y: canvasStyle.blocks.rootPosition.y
    }, "root", {}));
  }

  tabs.push({
    blocks: blockList,
    name: name,
    saved: true,
    historyStack: [],
    selected: selected
  });

  if(selected) {
    selectTab(tabs.length - 1);
  }

  updateTabListView();
}

function closeTab(index) {
  // TODO: Save dialog or something like that
  if(tabs.length > 1) {
    tabs.splice(index, 1);
    if(index > tabs.length - 1) {
      selectTab(index - 1);
    }
    else {
      selectTab(index);
    }
  }
}

function switchTab(reverse = false) {
  for(let i = 0; i < tabs.length; ++i) {
    if(tabs[i].selected) {
      if(reverse) {
        selectTab(i - 1);
      }
      else {
        selectTab(i + 1);
      }
      break;
    }
  }
}

function getCurrentTab() {
  for (let i = 0; i < tabs.length; ++i) {
    if (tabs[i].selected) {
      return tabs[i];
    }
  }
}
module.exports.getCurrentTab = getCurrentTab;

module.exports.addBlock = (block) => {
  blocks.push(block);
};

module.exports.getBlocks = () => {
  return blocks;
}

module.exports.addTab = addTab;

actionHandler.addAction("open new tab", () => {
  addTab("untitled" + tabs.length + ".xml", [], true);
});

actionHandler.addAction("close current tab", () => {
  closeTab(tabs.indexOf(getCurrentTab()));
});

actionHandler.addAction("switch to next tab", () => {
  switchTab();
});

actionHandler.addAction("switch to previous tab", () => {
  switchTab(true);
});

document.getElementById("new-tab").onclick = () => {
  addTab("untitled" + tabs.length + ".xml", [], true);
};

addTab("untitled.xml", [], true);
updateTabListView();
