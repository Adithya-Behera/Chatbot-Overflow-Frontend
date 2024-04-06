import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
const Chatbot = () => {
  var User = useSelector((state) => (state.currentUserReducer))
  useEffect(() => {
    if (!User) {
      return; // If User is null, do not proceed
    }
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        botName: 'Stack-Overflow Chatbot', 
        botId: '7123d021-7322-4cce-8a09-8c1c0a751f76',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: '7123d021-7322-4cce-8a09-8c1c0a751f76',
        composerPlaceholder:'Ask Stack-Overflow Chatbot',
        enablePersistHistory:false,
        enableConversationDeletion:true,
        enableTranscriptDownload:true
      })
    }
  }, [User])
 
  return <div id="webchat" />
}
 
export default Chatbot

