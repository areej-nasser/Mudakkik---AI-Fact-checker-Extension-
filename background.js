// Create context menu
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: 'factCheck',
        title: 'تحقق من "%s" مع مُدَقِّق',
        contexts: ['selection']
    });
});


// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'factCheck') {
        // Open popup or trigger fact check
        chrome.action.openPopup();
    }
});

