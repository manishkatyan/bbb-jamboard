const r=async e=>{while(document.querySelector(e)===null){await new Promise(e=>requestAnimationFrame(e))}return true};function e(){const bbb_server_version=2.3;var e=document.createElement("div");e.style.display="none";e.id="bbb_version";e.innerText=bbb_server_version;document.querySelector("body").appendChild(e)}function l(){const e=document.getElementById("bbb_version").innerText;const t=parseFloat(e[0]+e[1]+e[2]);if(t==2.4){return 2.4}if(t==2.3){return 2.3}else{return 2.2}}function t(){var e=document.querySelector('li[data-test="uploadPresentation"]').parentElement;var t=document.createElement("li");var o=document.createElement("a");var n=document.createElement("i");var a=document.createElement("div");t.classList="MuiButtonBase-root MuiListItem-root MuiMenuItem-root menuitem--Zqo0Cv  MuiListItem-button";t.setAttribute=("tabindex","-1");t.setAttribute=("role","menuitem");t.setAttribute=("aria-disabled","false");t.style.cssText="padding: 8px 4px; margin-left: 4px; margin-right: 4px";t.id="jam_board";o.style.cssText="display: flex; flex-flow: row; width: 100%;text-decoration:none;";o.onclick=function(){window.open("https://jamboard.google.com/");document.querySelector("div[class^=presentationArea]").click();alert("Starting Google Jamboard in a new tab. Please share your screen for attendees to view your Jamboard.");document.querySelector('button[aria-label="Share your screen"]').click()};o.setAttribute("target","_blank");n.classList="icon-bbb-desktop";a.innerText="Open Jamboard";a.classList="option--RgzMA";o.appendChild(n);o.appendChild(a);t.appendChild(o);e.appendChild(t)}function o(){var e=document.querySelector('li[data-test="uploadPresentation"]').parentElement;var t=document.createElement("li");var o=document.createElement("a");var n=document.createElement("i");var a=document.createElement("span");t.classList="item--yl1AH";t.setAttribute=("tabindex","0");t.setAttribute=("role","menuitem");t.setAttribute=("aria-labelledby","dropdown-item-label-66");t.setAttribute=("aria-describedby","dropdown-item-desc-67");t.id="jam_board";o.style.cssText="display: flex; flex-flow: row; width: 100%;text-decoration:none;";o.onclick=function(){window.open("https://jamboard.google.com/");document.querySelector("div[class^=presentationArea]").click();alert("Starting Google Jamboard in a new tab. Please share your screen for attendees to view your Jamboard.");document.querySelector('button[aria-label="Share your screen"]').click()};o.setAttribute("target","_blank");n.classList="itemIcon--Z207zn1 icon-bbb-desktop ";a.innerText="Open Jamboard";a.classList="itemLabel--Z12glHA";o.appendChild(n);o.appendChild(a);t.appendChild(o);e.appendChild(t)}function i(e){try{if(e===2.4){console.log("2.4");return t()}if(e===2.3){console.log("2.3");return o()}else{console.log("bbb-jamboard not supported")}}catch(e){console.log("Could not add jamboard")}}async function n(){const e=await r("section[class^=actionsbar]");const o=l();if(e){try{if(document.querySelectorAll("#jam_board").length==0){try{if(document.querySelector('li[data-test="uploadPresentation"]').parentElement)i(o)}catch(e){console.log("Could not add jamboard")}const t=document.querySelector("div[class^=actionsbar] > div[class^=center]");const n=function(){const e=document.querySelectorAll("#jam_board").length==0?false:true;var t=document.querySelector('li[data-test="uploadPresentation"]');if(t&&!e){i(o)}if(!t&&e){try{document.getElementById("jam_board").remove()}catch(e){console.log("Could not remove jamboard")}}};const a=new MutationObserver(n);a.observe(t,{childList:true})}}catch(e){console.log("Could not add bbb-jamboard")}}}e();n();
