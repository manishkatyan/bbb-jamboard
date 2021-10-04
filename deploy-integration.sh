#!/bin/bash
BBB_SERVER_URL="$(bbb-conf --secret | grep URL|  cut -d'/' -f3)"
HEAD_HTML="/usr/share/meteor/bundle/programs/web.browser/head.html"
HEAD_HTML_DEFAULT="/usr/share/meteor/bundle/programs/web.browser/head.html.default"
HEAD_HTML_LEGACY="/usr/share/meteor/bundle/programs/web.browser.legacy/head.html"
HEAD_HTML_LEGACY_DEFAULT="/usr/share/meteor/bundle/programs/web.browser.legacy/head.html.default"
BBB_WEBROOT="/var/www/bigbluebutton-default"


if [  ! -d "$BBB_WEBROOT/integrations" ];then
    mkdir -p "$BBB_WEBROOT/integrations"
fi


if [ -d "$BBB_WEBROOT/integrations" ];then
    wget -O "$BBB_WEBROOT/integrations/bbb-jamboard.js" https://raw.githubusercontent.com/manishkatyan/bbb-jamboard/main/bbb-jamboard.js
fi

#Backup default files
if [ ! -f $HEAD_HTML_DEFAULT];then
    echo "Backing up Default $HEAD_HTML"
    cp $HEAD_HTML $HEAD_HTML_DEFAULT
fi

if [ ! -f $HEAD_HTML_LEGACY_DEFAULT];then
    echo "Backing up Default $HEAD_HTML_LEGACY"
    cp $HEAD_HTML_LEGACY $HEAD_HTML_LEGACY_DEFAULT
fi


#Add bbb-jamboard Integration
if grep -Fxq "<script src=\"https://$BBB_SERVER_URL/integrations/bbb-jamboard.js\"></script>" $HEAD_HTML
then
   echo "Found Jamboard integration at $HEAD_HTML"
else
    echo "<script src=\"https://$BBB_SERVER_URL/integrations/bbb-jamboard.js\"></script>" >>  $HEAD_HTML
fi

if grep -Fxq "<script src=\"https://$BBB_SERVER_URL/integrations/bbb-jamboard.js\"></script>" $HEAD_HTML_LEGACY
then
   echo "Found Jamboard integration at $HEAD_HTML_LEGACY"
else
    echo "<script src=\"https://$BBB_SERVER_URL/integrations/bbb-jamboard.js\"></script>" >>  $HEAD_HTML_LEGACY
fi