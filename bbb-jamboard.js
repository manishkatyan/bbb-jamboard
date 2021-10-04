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
        var jamboard_element = `<li class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root menuitem--Zqo0Cv  MuiListItem-button" tabindex="1" role="menuitem" aria-disabled="false" data-test="jamBoard" style="padding: 8px 4px; margin-left: 4px; margin-right: 4px;">
        <div style="display: flex; flex-flow: row; width: 100%;">
        <i class="icon-bbb-presentation"></i>
        <a style="text-decoration:none;" href="https://jamboard.google.com/" onclick="alert('Starting Google Jamboard in a new tab. Please share your screen for attendees to view your Jamboard.')" target="_blank" class="option--RgzMA">Open Jamboard</div>
        </div>
        </li>`
        element.innerHTML += jamboard_element
    }
    
  }
  addJamboard()