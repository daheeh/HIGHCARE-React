import React, { useState, useEffect } from 'react';
import shave from 'shave';
import MessageList from './MessageList';
import {useSelector,useDispatch} from 'react-redux';
import { leaveChat } from '../../modules/ConversationList';
import axios from 'axios';
// import { RESETLIST } from '../../modules/ConversationList';
import './ConversationListItem.css';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ConversationListItem ({ partner, host, sendToMessage}){
  const [showMessage, setShowMessage] = useState(false);  
  const conversationList = useSelector(state => state.conversationlist);
  const dispatch = useDispatch();
  // dispatch({ type: RESETLIST});


  useEffect(() => {
    console.log('partner =========>', partner);
    console.log('host ===========>', host);

    shave('.conversation-snippet', 20);
  }, [partner, host]);

  useEffect(() => {
    shave('.conversation-snippet', 20);    
  })  

  const openMessage = () =>{
    setShowMessage(true);
  }

  // const handleLeaveChat = () => {
  //   const isOk = window.confirm('채팅방에서 나가시겠습니까?\n나가면 대화내용이 모두 삭제되고 채팅목록에서도 삭제됩니다.');
  //   if(isOk){
  //     dispatch(leaveChat(partner));
  //     setShowMessage(false);
  //     axios(
  //       {          
  //         method:'DELETE',
  //         url:process.env.REACT_APP_USER_BASE_URL+'/leaveChat',
  //         data:{
  //           author:host,
  //           to:partner,
  //         }
  //       }
  //     )
  //   }
  // }


  const handleLeaveChat = () => {
    const isOk = window.confirm('채팅방에서 나가시겠습니까?\n나가면 대화내용이 모두 삭제되고 채팅목록에서도 삭제됩니다.');
    if (isOk) {
      dispatch(leaveChat(partner));
      setShowMessage(false);
      axios.delete(
        `${process.env.REACT_APP_USER_BASE_URL}/leaveChat/${encodeURIComponent(host)}/${encodeURIComponent(partner)}`
      )
        .then((response) => {
          console.log('DELETE 요청 성공');
        })
        .catch((error) => {
          console.log('DELETE 요청 실패');
          console.log(error);
        });
    }
  };

  

  return (
    <>
      <div className="conversation-list">
        <div onClick={openMessage} className="conversation-list-item">
          <FontAwesomeIcon icon={faCircleUser} style={{ color: '#CBDDFF', fontSize: '70px'}}/>
          {/* <div className="conversation-info"> */}
            <h1 className="conversation-title">{ partner }</h1>
            <p className="conversation-snippet">{ conversationList[partner].length === 0 ? "" : conversationList[partner][conversationList[partner].length-1].message }</p>
          {/* </div>         */}
        {/* </div> */}
        <MessageList 
          showMessage={showMessage} 
          setShowMessage={setShowMessage} 
          partner={partner} 
          host={host} 
          list={conversationList[partner]}
          sendToMessage={sendToMessage}
          handleLeaveChat={handleLeaveChat}
        />  
        </div>      
      </div>
    </>
  )
};


export default ConversationListItem;