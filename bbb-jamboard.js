const checkElement = async selector => {
    
    while (document.querySelector(selector) === null) {
        await new Promise(resolve => requestAnimationFrame(resolve))
    }
    return true;
  };
  
  async function addJamboard(){
    const layout = await checkElement("#layout")
    if(layout){
      var element = document.querySelector('ul[class^=MuiList-root]');
      var li = document.createElement("li")
      var a = document.createElement("a")
      var i = document.createElement("i")
      var div = document.createElement("div")
    
      li.classList = "MuiButtonBase-root MuiListItem-root MuiMenuItem-root menuitem--Zqo0Cv  MuiListItem-button"
      li.setAttribute = ("tabindex", "-1")
      li.setAttribute = ("role", "menuitem")
      li.setAttribute = ("aria-disabled", "false")
      li.style.cssText = "padding: 8px 4px; margin-left: 4px; margin-right: 4px"
    
      a.style.cssText = "display: flex; flex-flow: row; width: 100%;text-decoration:none;"
      a.href = "https://jamboard.google.com/"
      a.onclick = function(){
        alert('Starting Google Jamboard in a new tab. Please share your screen for attendees to view your Jamboard.')
      }
      a.setAttribute('target', '_blank');
      i.classList = "icon-bbb-desktop"
      div.innerText = "Open Jamboard"
      div.classList = "option--RgzMA"
    a.appendChild(i)
    a.appendChild(div)
    li.appendChild(a)
    element.appendChild(li)
    }
    
  } 
  addJamboard()