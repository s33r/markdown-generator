module.exports = function walkTree(node, prefixAction, postfixAction) {
    prefixAction && prefixAction(node);

    !!node.children && node.children.forEach(child => walkTree(child, prefixAction, postfixAction));

    postfixAction && postfixAction(node);
    return node;
};