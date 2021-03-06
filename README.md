# bbb-jamboard

The default whiteboard of BigBlueButton has limited features including no eraser. Many teachers wish to have a more features-rich whiteboard that would help them better in conducting online classes. 

BigBlueButton core team is working to improve the Whiteboard feature. Quoting Fred Dixon, "we've got plans to improve the whiteboard (eraser, editing/moving objects, etc.) in future updates.  I think with some specific updates, we could get BigBlueButton closer to what others are looking for in a whiteboard with full support for recording".

In the meantime, we have an excellent alternative solution!

With bbb-jamboard, you can easily integrate Google Jamboard into your BigBlueButton server. 

Jamboard is a digital interactive whiteboard developed by Google and can be used in stead of the default BugBlueButton whiteboard. Google Jamboard has the eraser feature that has often been requested by BigBlueButton users. 

## Key Features

1. Works for BigBlueButton 2.3 and 2.4 versions
2. Works with BigBlueButtin recording
3. Can easily be stored and shared for later references

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

## [BigBlueButton Tech Support](https://higheredlab.com/bigbluebutton-support/)
### Are you facing difficulties with your BigBlueButton server?
Lean on our expertise to smoothly run your BigBlueButton server. We can: 
1. troubleshoot your BigBlueButton servers to improve audio and video performance,
1. install additional features such as streaming, mp4 recordings and attendance, and
1. provide managed BigBlueButton servers, starting at $12 per month

[Click here to learn more](https://higheredlab.com/bigbluebutton-support/)

## More on BigBlueButton

Check-out the following apps to further extend features of BBB.

### [bbb-twilio](https://github.com/manishkatyan/bbb-twilio)

Integrate Twilio into BigBlueButton so that users can join a meeting with a dial-in number. You can get local numbers for almost all the countries.

### [bbb-mp4](https://github.com/manishkatyan/bbb-mp4)

With this app, you can convert a BigBlueButton recording into MP4 video and upload to S3. You can covert multiple MP4 videos in parallel or automate the conversion process.

### [bbb-streaming](https://github.com/manishkatyan/bbb-streaming)

Livestream your BigBlueButton classes on Youtube or Facebook to thousands of your users.

### [bbb-recording-server](https://github.com/manishkatyan/bbb-recording-server)

With this app, you can process BigBlueButton recordings on a separate server, called BBB Recording Server. Separation of recordings from BigBlueButton (client) improves performance as all server resources are dedicated towards conducting live classes.

### [bbb-admin](https://github.com/manishkatyan/bbb-admin)

Scripts for BigBlueButton admins including extracting IP of users joining, participants attendance, poll answers and many other analytics. 

### [100 Most Googled Questions on BigBlueButton](https://higheredlab.com/bigbluebutton-guide/)

Everything you need to know about BigBlueButton including pricing, comparison with Zoom, Moodle integrations, scaling, and dozens of troubleshooting.
