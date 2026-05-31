import { BoardItem } from "../components/Board/types";

const noticeBoard: BoardItem[] = [
  {
    id: "3",
    category: "PATENT",
    title: "특허 관련 안내사항",
    date: "2026-05-31",
    content: `- (주)아이리스랩은 2026년 5월 18일, 서비스 '틈틈'의 BM(Business Model) 및 백엔드/DB 로직에 대한 특허를 임시 출원했습니다.
- 출원번호 10-2026-0089989`,
  },
    {
    id: "2",
    category: "TM",
    title: "상표 관련 안내사항",
    date: "2026-05-31",
    content: `- (주)아이리스랩은 2026년 4월 22일 상표 '틈틈' / 2026년 5월 5일 상표 'IRIS LAB(아이리스랩)'을 출원했으며, 해당 권리는 대표이사에게 있습니다.
- 2026년 5월 29일 기준 해당 상표의 권리를 대표이사 개인에서 (주)아이리스랩으로 이전하는 작업을 진행하고 있습니다.
- 출원번호 40-2026-0080197(틈틈), 40-2026-0089304(IRIS LAB)`,
  },

  {
    id: "1",
    category: "NOTICE",
    title: "웹사이트 개편 및 채용 게시판 오픈",
    date: "2026-05-30",
    content: `- 공지사항 및 채용 게시판이 추가되었습니다.`,
  },
  
];

export default noticeBoard;
