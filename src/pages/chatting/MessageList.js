import React, {useEffect, useState} from 'react';
import SendMessageArea from './SendMessageArea';
import ChatRoomToolbar from './ChatRoomToolBar';
import ChatToolbarButton from './ChatToolBarButton';
import Message from './Message';
import moment from 'moment';
import 'moment/locale/ko'
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import './MessageList.css';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MessageList(props) {

  // 채팅방 구성하는 데이터 및 함수들 추출
  const {showMessage, setShowMessage, partner, list, host, sendToMessage, handleLeaveChat} = props;
  // inputMessage : 사용자가 입력한 메세지 저장
  const [inputMessage, setInputMessage] = useState("");

  // 컴포넌트 처음 렌더링 될 때 아무 동작도 수행 안하게
  useEffect(() => {
  },[])

  // 채팅방 닫기
  const handleClose = () => {
    setShowMessage(false);
  };    

  // 채팅방 나가기
  const handleExit = () => {
    handleLeaveChat(partner);    
  }

  // 사용자가 input창에 메세지 입력후 전송버튼 눌렀을 때 실행
  const sendMessages = () => {
    if(inputMessage.length===0 || inputMessage===undefined)return;
    sendToMessage(host, partner, inputMessage)
    setInputMessage("")
  }

  // ConversationListItem에서 props로 전달받은 대화목록(conversationList)을 기반으로 메세지 렌더링
  // => 대화목록에서 메세지 가져와서 이전메세지랑 비교해서 시작이랑 끝 확인하고 메세지 렌더링하게함
  const renderMessages = () => {
    moment.locale('ko'); // 날짜랑 시간 한국어로 표시
    let i = 0;
    let messageCount = list.length; // 메세지 목록 총 길이 가져옴
    let tempMessages = [];  // 배열 초기화해서 렌더링할 메세지 컴포넌트들 저장할 때 사용

    // while로 메세지 처리 반복
    while (i < messageCount) {
      // 이전메세지, 현재 메세지, 다음 메세지 비교해서 시작과 끝 판단
      let previous = list[i - 1]; 
      let current = list[i];
      let next = list[i + 1];

      let isMine = current.author === host;  // 현재 메세지가 호스트메세지인지 여부 확인
      let currentMoment = moment(current.timestamp);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;

      // 메시지가 대화 시퀀스의 시작과 끝에 해당하는지, 타임스탬프를 표시해야 하는지, 이전 메시지와 시간 간격을 비교해야 하는지를 결정
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;
      let prevCompare = true;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.author === current.author;
        
        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        const prevDateParts = previousMoment._d;
        const currentDateParts = currentMoment._d;
        if(prevDateParts.getYear() === currentDateParts.getYear() && prevDateParts.getMonth() === currentDateParts.getMonth() && prevDateParts.getDay() === currentDateParts.getDay()){
          showTimestamp = false;
        }
          
      }

      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.author === current.author;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }        
        const currentDateParts = currentMoment._d;
        const nextDateParts = nextMoment._d;
        
        if(currentDateParts.getYear() === nextDateParts.getYear() && currentDateParts.getMonth() === nextDateParts.getMonth() 
        && currentDateParts.getDay() === nextDateParts.getDay() && currentDateParts.getHours() === nextDateParts.getHours() && 
        currentDateParts.getMinutes() === nextDateParts.getMinutes()){
          prevCompare = false;
        }

        if(!nextBySameAuthor){
          prevCompare = true;
        }
        
      }

      tempMessages.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
          prevCompare={prevCompare}
        />
      );

      i += 1;
    }

    return tempMessages;
  }

  //Dialog 컴포넌트 사용해서 채팅방 화면 표시 (메세지 목록, 메세지 입력하는 영역, 툴바같은거 포함)
  // ChatRoomToolBar버튼 클릭하면 뒤로가기(handleClose), 채팅방 아예 나가기(handleExit)
    return(
      <Dialog fullScreen open={showMessage} TransitionComponent={Transition}>
        <div className="message-list">
          <ChatRoomToolbar
            title={partner}
            leftItems={[
              <ChatToolbarButton icon={faChevronLeft} action={handleClose} key="back">
                </ChatToolbarButton>
            ]}
            rightItems={[
              <ChatToolbarButton icon={faArrowRightFromBracket} action={handleExit} key="exit">
              </ChatToolbarButton>              
            ]}
          />

          <div className="message-list-container">{renderMessages()}</div>

          <SendMessageArea 
            rightItems={[
              <ChatToolbarButton icon={faPaperPlane} action={sendMessages} key="send"/>
            ]}
            host={host}
            name={partner}
            setInputMessage={setInputMessage}
            sendMessages={sendMessages}
            inputMessage={inputMessage}
          />          
        </div>
      </Dialog>
    );
}