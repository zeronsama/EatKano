function refreshGameLayer(box, loop, offset) {
    var i = 0, jo = 0;
    for (var j = 0; j < box.children.length; j++) {
        var r = box.children[j],
            rstyle = r.style;
        rstyle.left = (j % 4) * blockSize + 'px';
        rstyle.bottom = Math.floor(j / 4) * blockSize + 'px';
        rstyle.width = blockSize + 'px';
        rstyle.height = blockSize + 'px';
        r.className = r.className.replace(_clearttClsReg, '');
        if (i == j) {
            _gameBBList.push({
                cell: i % 4,
                id: r.id
            });
            r.className += ' t' + (Math.floor(Math.random() * 1000) % 5 + 1);
            r.notEmpty = true;
            i = (Math.floor(j / 4) + 1) * 4 - 1;
            if (jo % 8 == 7)
                i += 1;
            if (jo % 8 == 0)
                i += 1;
            if (jo % 8 == 1)
                i += 2;
            if (jo % 8 == 2)
                i += 2;
            if (jo % 8 == 3)
                i += 3;
            if (jo % 8 == 4)
                i += 3;
            if (jo % 8 == 5)
                i += 4;
            if (jo % 8 == 6)
                i += 4;
            jo++;
        } else {
            r.notEmpty = false;
        }
    }
    if (loop) {
        box.style.webkitTransitionDuration = '0ms';
        box.style.display = 'none';
        box.y = -blockSize * (Math.floor(box.children.length / 4) + (offset || 0)) * loop;
        setTimeout(function () {
            box.style[transform] = 'translate3D(0,' + box.y + 'px,0)';
            setTimeout(function () {
                box.style.display = 'block';
            }, 100);
        }, 200);
    } else {
        box.y = 0;
        box.style[transform] = 'translate3D(0,' + box.y + 'px,0)';
    }
    box.style[transitionDuration] = '150ms';
}