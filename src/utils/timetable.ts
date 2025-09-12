import timetable from "../data/timetable.json";
import sessions from "../data/sessions.json";
import speakers from "../data/speakers.json";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * 指定した開催日のタイムテーブルを取得
 * @param eventDate イベント開催日
 * @returns 指定した開催日のタイムテーブル
 */
export const getCurrentDateTimetable = (eventDate: string) => {
  const date = dayjs.tz(eventDate, "Asia/Tokyo");
  return timetable.find((event) =>
    dayjs.tz(event.date, "Asia/Tokyo").isSame(date, "day"),
  );
};

/**
 * 時間帯毎の各部屋のセッション情報を所得する
 * @param eventDate イベント開催日
 * @returns 時間帯毎のセッション情報
 */
export const getClassifiedSessions = (eventDate: string) => {
  // 指定した開催日のタイムテーブルを取得
  const currentDateTimetable = getCurrentDateTimetable(eventDate);

  // 時間帯（時間）の一覧を取得
  const timeSlotHours = [
    ...new Set(
      currentDateTimetable?.timeSlots.map((slot) =>
        dayjs.tz(`${eventDate}T${slot.slotStart}`, "Asia/Tokyo").hour(),
      ) ?? [],
    ),
  ];

  // 時間帯を1時間毎にまとめる
  return timeSlotHours.map((hour) => {
    // 現在の時間のセッションを取得
    const currentHourTimetable = currentDateTimetable?.timeSlots.filter(
      (slot) =>
        dayjs.tz(`${eventDate}T${slot.slotStart}`, "Asia/Tokyo").hour() ===
        hour,
    );

    // 現在の時間のセッションを会場ごとに分類
    const timeSlots =
      currentHourTimetable?.map((slot) => {
        // 部屋ごとにセッションを抽出
        const room1 = slot.rooms.find((room) => room.id === 67044);
        const room2 = slot.rooms.find((room) => room.id === 67045);
        const room3 = slot.rooms.find((room) =>
          [70103, 70899].includes(room.id),
        );

        // ワークショップセッションを抽出
        const workshopRoom2 = slot.rooms
          .filter((room) => room.id === 67045)
          .filter((room) => room && isWorkshopSession(room.session.categories));
        const workshopRoom3 = slot.rooms
          .filter((room) => [70103, 70899].includes(room.id))
          .filter((room) => room && isWorkshopSession(room.session.categories));

        return {
          slotStart: slot.slotStart,
          room1,
          room2,
          room3,
          workshopRoom2,
          workshopRoom3,
        };
      }) ?? [];

    return {
      hour,
      timeSlots,
    };
  });
};

/**
 * 日時を時間フォーマットに変換
 * @param time 日時
 * @returns フォーマットされた時間
 */
export const getFormattedTime = (time: string) => {
  return dayjs.tz(time, "Asia/Tokyo").format("HH:mm");
};

/**
 * 登壇者のプロフィール情報を取得
 * @param speakerId 登壇者のID
 * @returns 登壇者
 */
export const getSessionSpeaker = (speakerId?: string) => {
  return speakers.find((speaker) => speaker.id === speakerId);
};

/**
 * 跨いだタイムテーブルの時間帯の行数を取得
 * @param eventDate イベント開催日
 * @param start セッションの開始時間
 * @param end セッションの終了時間
 * @returns 時間帯を跨いだ行数
 */
export const getTimeSlotSpanCount = (
  eventDate: string,
  start: string | undefined,
  end: string | undefined,
) => {
  if (start === undefined && end === undefined) return 0;

  // 開始時間と終了時間を取得
  const startTime = dayjs.tz(start, "Asia/Tokyo");
  const endTime = dayjs.tz(end, "Asia/Tokyo");

  // 指定した開催日のタイムテーブルを取得
  const currentDateTimeSlots =
    getCurrentDateTimetable(eventDate)?.timeSlots ?? [];

  // セッションの開始時間と終了時間から時間帯のインデックスを取得
  const startIdx = currentDateTimeSlots.findIndex((slot) =>
    dayjs.tz(`${eventDate}T${slot.slotStart}`, "Asia/Tokyo").isSame(startTime),
  );
  const endIdx = currentDateTimeSlots.findIndex((slot) =>
    dayjs.tz(`${eventDate}T${slot.slotStart}`, "Asia/Tokyo").isSame(endTime),
  );

  // どちらも見つからない場合は0を返す
  if (startIdx === -1 || endIdx === -1) return 0;

  // 時間帯をまたぐ場合は、時間帯を跨いだ行数を計算
  return Math.max(0, endIdx - startIdx);
};

/**
 * 指定した時間帯が前の時間帯で占有されているかどうか
 * @param eventDate イベント開催日
 * @param roomId 会場ID
 * @param timeSlot 時間帯
 * @returns 今の時間帯が前の時間帯で占有されている場合はtrue
 */
export const isTimeSlotOccupied = (
  eventDate: string,
  roomId: number,
  timeSlot: string,
) => {
  // 指定した開催日のタイムテーブルを取得
  const currentDateTimeSlots =
    getCurrentDateTimetable(eventDate)?.timeSlots ?? [];

  // 指定した時間帯のインデックスを取得
  const slotIndex = currentDateTimeSlots.findIndex(
    (slot) => slot.slotStart === timeSlot,
  );

  if (slotIndex === -1) return false;

  // 指定した時間帯の前までのタイムテーブルを取得
  const timeSlots = currentDateTimeSlots.slice(0, slotIndex);

  // 指定した会場の中でセッションの終了時間が指定した時間帯よりも後のものがあるか確認
  return timeSlots.some((slot) =>
    slot.rooms.some(
      (r) =>
        r.id === roomId &&
        dayjs
          .tz(r.session.endsAt, "Asia/Tokyo")
          .isAfter(dayjs.tz(`${eventDate}T${timeSlot}`, "Asia/Tokyo")),
    ),
  );
};

/**
 * ワークショップセッションかどうかを判定
 * @param categories セッションのカテゴリ
 * @returns ワークショップセッションの場合はtrue
 */
export const isWorkshopSession = (
  categories:
    | (typeof timetable)[0]["timeSlots"][0]["rooms"][0]["session"]["categories"]
    | undefined,
) => {
  // セッションタイプカテゴリを取得
  const sessionType = categories?.find((category) => category.id === 101938);

  // セッションタイプがworkshopかどうかを判定
  return sessionType?.categoryItems.some((item) => item.id === 389623) ?? false;
};

/**
 * スポンサーセッションかどうかを判定
 * @param questionAnswers 種別
 * @returns スポンサーセッションの場合はtrue
 */
export const isSponsoredSession = (
  questionAnswers:
    | (typeof sessions)[0]["sessions"][0]["questionAnswers"]
    | undefined,
) => {
  // スポンサーセッションのフィールドを取得
  const sponsoredSession = questionAnswers?.find((qa) => qa.id === 109751);

  // answerが"true"の場合はスポンサーセッションと判定
  return sponsoredSession?.answer === "true" || false;
};

/**
 * Try to translate session related string to locale. Fallback to given string
 * if translation does not exist.
 * @param str a string to translate
 * @param locale a locale to translate to
 * @returns translated string or str if translation not found
 */
export const getTranslated = (str: string, locale: string) => {
  // TODO: leaving translation table here because it is small, but can be moved
  // to json if needed
  const transl: { [key: string]: { [key: string]: string } } = {
    en: {
      休憩: "Break",
      お昼休憩: "Lunch Break",
      場面転換: "Stage Setup",
    },
  };
  return locale in transl && str in transl[locale] ? transl[locale][str] : str;
};
