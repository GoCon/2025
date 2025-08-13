import sessions from "../data/sessions.json";

/**
 * セッションのラベルを取得
 * @param session セッション
 * @param index セッションのインデックス
 * @returns セッションのラベル
 */
export const getSessionLabel = (
  session: (typeof sessions.sessions)[0],
  index: number,
) => {
  const roomType = session.roomId === sessions.rooms.at(0)?.id ? "A" : "B";
  // TODO: セッションのラベルを取得
  return `${roomType}${index + 1}-SP`;
};

/**
 * セッションの時間区分を取得
 * @param sessionId セッションのID
 * @returns セッションの時間区分
 */
export const getSessionTime = (sessionId: number[]) => {
  // セッションのタイプを取得
  const sessionType = sessions.categories.find(
    (category) => category.title === "Session Type",
  );

  return (
    sessionType?.items.find((item) => sessionId.includes(item.id))?.name || ""
  );
};

/**
 * 日時を時間フォーマットに変換
 * @param time 日時
 * @returns フォーマットされた時間
 */
export const getFormattedTime = (time: string) => {
  const date = new Date(time);
  return new Intl.DateTimeFormat("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

/**
 * セッションの部屋区分を取得
 * @param roomId 部屋のID
 * @returns 部屋の名前
 */
export const getSessionRoom = (roomId: number) => {
  return sessions.rooms.find((room) => room.id === roomId)?.name || "";
};

/**
 * セッションの登壇者名を取得
 * @param speakerId 登壇者のID
 * @returns 登壇者の名前
 */
export const getSessionSpeakerName = (speakerId?: string) => {
  return (
    sessions.speakers.find((speaker) => speaker.id === speakerId)?.fullName ||
    ""
  );
};

/**
 * 登壇者のプロフィール画像を取得
 * @param speakerId 登壇者のID
 * @returns 登壇者のプロフィール画像
 */
export const getSessionSpeakerThumbnailSrc = (speakerId?: string) => {
  return (
    sessions.speakers.find((speaker) => speaker.id === speakerId)
      ?.profilePicture || ""
  );
};
