# bbb-jamboard

The default whiteboard of BigBlueButton has limited features including no eraser. Many teachers wish to have a more features-rich whiteboard that would help them better in conducting online classes. 

Well, we have an excellent solution!

With this project, you can easily integrate Google Jamboard into your BigBlueButton server. 

Jamboard is a digital interactive whiteboard developed by Google and can be used in stead of the default BugBlueButton whiteboard. Google Jamboard has the eraser feature that has often been requested by BigBlueButton users. 

## How to Use

The screencast below shows how you can launch Google JamBaord from within a BigBlueButton session. 

<img src="https://bbb1.asyncweb.io/recording/bbb-jamboard.gif"/>


## How to Install

Please run the following command to install bbb-jamboard

`bash <(curl -s https://raw.githubusercontent.com/manishkatyan/bbb-jamboard/main/deploy-integration.sh)`


## How to Uninstall

In case you change your mind, here is how to uninstall bbb-jamboard: 

`mv /usr/share/meteor/bundle/programs/web.browser/head.html.default /usr/share/meteor/bundle/programs/web.browser/head.html`

`mv /usr/share/meteor/bundle/programs/web.browser.legacy/head.html.default /usr/share/meteor/bundle/programs/web.browser.legacy/head.html`
