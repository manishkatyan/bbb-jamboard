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
      var div = document.createElement("div")
      var i = document.createElement("i")
      var a = document.createElement("a")
    
      li.classList = "MuiButtonBase-root MuiListItem-root MuiMenuItem-root menuitem--Zqo0Cv  MuiListItem-button"
      li.setAttribute = ("tabindex", "-1")
      li.setAttribute = ("role", "menuitem")
      li.setAttribute = ("aria-disabled", "false")
      li.style.cssText = "padding: 8px 4px; margin-left: 4px; margin-right: 4px"
    
      div.style.cssText = "display: flex; flex-flow: row; width: 100%;"
    
      i.classList = "icon-bbb-desktop"
    
      a.classList = "option--RgzMA"
      a.style.cssText = "text-decoration:none;"
      a.href = "https://jamboard.google.com/"
      a.onclick = function(){
        alert('Starting Google Jamboard in a new tab. Please share your screen for attendees to view your Jamboard.')
      }
      a.setAttribute('target', '_blank');
      a.innerText = "Open Jamboard"
    
    
    div.appendChild(i)
    div.appendChild(a)
    li.appendChild(div)
    element.appendChild(li)
    }
    
  } 
  addJamboard()