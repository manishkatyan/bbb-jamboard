# bbb-jamboard
Integrate Google Jamboard into BigBlueButton. Jamboard is a digital interactive whiteboard developed by Google and can be used in stead of the default BugBlueButton whiteboard. 
Google Jamboard has the eraser feature that has often been requested by BigBlueButton users. 

## How it Works
The screencast below shows how simple it is to start Google JamBoard from within a BigBlueButton session.
<img ahref="https://higheredlab.com/wp-content/uploads/bbb-jamboard-latest.gif"/>


## How to Install

## Please run the following command to install bbb-jamboard
`bash <(curl -s https://raw.githubusercontent.com/manishkatyan/bbb-jamboard/main/deploy-integration.sh)`


## How to Uninstall

`mv /usr/share/meteor/bundle/programs/web.browser/head.html.default /usr/share/meteor/bundle/programs/web.browser/head.html`

`mv /usr/share/meteor/bundle/programs/web.browser.legacy/head.html.default /usr/share/meteor/bundle/programs/web.browser.legacy/head.html`
