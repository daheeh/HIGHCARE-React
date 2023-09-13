
export function getChatRoomId(userId, partnerId) {
    // 사용자 ID와 상대방 ID를 조합하여 고유한 채팅방 ID 생성
    return `${userId}_${partnerId}`;
  }