#!/bin/bash
BBB_SERVER_URL="$(bbb-conf --secret | grep URL|  cut -d'/' -f3)"
HEAD_HTML="/usr/share/meteor/bundle/programs/web.browser/head.html"
HEAD_HTML_LEGACY="/usr/share/meteor/bundle/programs/web.browser.legacy/head.html"
BBB_WEBROOT="/var/www/bigbluebutton-default"


if [  ! -d "$BBB_WEBROOT/integrations" ];then
    mkdir -p "$BBB_WEBROOT/integrations"
fi


if [ -d "$BBB_WEBROOT/integrations" ];then
    wget -O "$BBB_WEBROOT/integrations/bbb-jamboard.js" https://raw.githubusercontent.com/manishkatyan/bbb-jamboard/main/bbb-jamboard.js
fi

sed -i "s/<\/body>/<script src=\"https:\/\/$BBB_SERVER_URL\/integrations\/bbb-jamboard.js\"><\/script><\/body>/g" $HEAD_HTML

sed -i "s/<\/body>/<script src=\"https:\/\/$BBB_SERVER_URL\/integrations\/bbb-jamboard.js\"><\/script><\/body>/g" $HEAD_HTML_LEGACY