function extractBookmarks () {
    let data = [];
    const outlineView = document.getElementById('outlineView');
    const treeItems = outlineView.children;
    let i = 0;

    for (const treeItem of treeItems) {
        data.push(extractBookmarksRecursive(treeItem, i));
        i++;
    }

    return data;
}

function extractBookmarksRecursive (treeItem, iter) {
    if(treeItem.children.length == 1) {
        return getBookmarkData(treeItem.children[0], iter);
    }

    if (treeItem.children.length == 3) {
        const data = getBookmarkData(treeItem.children[1], iter);
        const treeItems = treeItem.children[2].children;
        let i = 0;

        for (const child of treeItems) {
            data.children.push(extractBookmarksRecursive(child, i));
            i++;
        }

        return data;
    }

    return null;
}

function getBookmarkData (a, position) {
    const url = a.href;
    const title = a.innerText;
    const metadata = JSON.parse(decodeURIComponent(url).split('#')[1])

    return {
        index: position,
        title: title,
        metadata: metadata,
        children: []
    };
}

extractBookmarks();