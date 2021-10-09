const checkElement=async e=>{while(document.querySelector(e)===null){await new Promise(e=>requestAnimationFrame(e))}return true};function addBbbVersion(){const bbb_server_version=BBB_VERSION;var e=document.createElement("div");e.style.display="none";e.id="bbb_version";e.innerText=bbb_server_version;document.querySelector("body").appendChild(e)}function getBbbVersion(){const e=document.getElementById("bbb_version").innerText;const t=parseFloat(e[0]+e[1]+e[2]);if(t==2.4){return 2.4}if(t==2.3){return 2.3}else{return 2.2}}function jam_board_24(){var e=document.querySelector('li[data-test="uploadPresentation"]').parentElement;var t=document.createElement("li");var o=document.createElement("a");var a=document.createElement("i");var n=document.createElement("div");t.classList="MuiButtonBase-root MuiListItem-root MuiMenuItem-root menuitem--Zqo0Cv  MuiListItem-button";t.setAttribute=("tabindex","-1");t.setAttribute=("role","menuitem");t.setAttribute=("aria-disabled","false");t.style.cssText="padding: 8px 4px; margin-left: 4px; margin-right: 4px";t.id="jam_board";o.style.cssText="display: flex; flex-flow: row; width: 100%;text-decoration:none;";o.onclick=function(){window.open("https://jamboard.google.com/");document.querySelector("#default-dropdown-menu > div").click();alert("Starting Google Jamboard in a new tab. Please share your screen for attendees to view your Jamboard.");document.querySelector('button[aria-label="Share your screen"]').click()};a.classList="icon-bbb-desktop";n.innerText="Open Jamboard";n.classList="option--RgzMA";o.appendChild(a);o.appendChild(n);t.appendChild(o);e.appendChild(t)}function jam_board_23(){var e=document.querySelector('li[data-test="uploadPresentation"]').parentElement;var t=document.createElement("li");var o=document.createElement("a");var a=document.createElement("i");var n=document.createElement("span");t.classList="item--yl1AH";t.setAttribute=("tabindex","0");t.setAttribute=("role","menuitem");t.setAttribute=("aria-labelledby","dropdown-item-label-66");t.setAttribute=("aria-describedby","dropdown-item-desc-67");t.id="jam_board";o.style.cssText="display: flex; flex-flow: row; width: 100%;text-decoration:none;";o.onclick=function(){window.open("https://jamboard.google.com/");document.querySelector("div[class^=presentationArea]").click();alert("Starting Google Jamboard in a new tab. Please share your screen for attendees to view your Jamboard.");document.querySelector('button[aria-label="Share your screen"]').click()};o.setAttribute("target","_blank");a.classList="itemIcon--Z207zn1 icon-bbb-desktop ";n.innerText="Open Jamboard";n.classList="itemLabel--Z12glHA";o.appendChild(a);o.appendChild(n);t.appendChild(o);e.appendChild(t)}function addJamboard(e){try{if(e===2.4){console.log("2.4");return jam_board_24()}if(e===2.3){console.log("2.3");return jam_board_23()}else{console.log("bbb-jamboard not supported")}}catch(e){console.log("Could not add jamboard")}}async function manageJamboard(){const e=await checkElement("section[class^=actionsbar]");const o=getBbbVersion();if(e){try{if(document.querySelectorAll("#jam_board").length==0){try{if(document.querySelector('li[data-test="uploadPresentation"]').parentElement)addJamboard(o)}catch(e){console.log("Could not add jamboard")}const t=document.querySelector("div[class^=actionsbar] > div[class^=center]");const a=function(){const e=document.querySelectorAll("#jam_board").length==0?false:true;var t=document.querySelector('li[data-test="uploadPresentation"]');if(t&&!e){addJamboard(o)}if(!t&&e){try{document.getElementById("jam_board").remove()}catch(e){console.log("Could not remove jamboard")}}};const n=new MutationObserver(a);n.observe(t,{childList:true})}}catch(e){console.log("Could not add bbb-jamboard")}}}addBbbVersion();manageJamboard();
